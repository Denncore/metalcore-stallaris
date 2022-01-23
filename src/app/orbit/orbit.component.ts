import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { Band, Chapter, Description, isBand, isGenre, isPlanet, Planet2 } from 'src/app/model';
import * as d3 from 'd3';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CHAPTER_DESCRIPTION } from 'src/app/data';
import { State } from 'src/app/store';
import { Store } from '@ngrx/store';
import * as DataActions from 'src/app/store/actions';

enum DeltaType {
  GENRE, BAND
}

@Component({
  selector: 'app-orbit',
  templateUrl: './orbit.component.html',
  styleUrls: ['./orbit.component.scss']
})
export class OrbitComponent implements AfterViewInit, OnDestroy {
  @Input() part: string | null = null;
  @Input() planets: Planet2[] | null = null;
  @Input() withSun = true;
  @Input() marginLeft = 0;
  @Input() marginTop = 0;
  @Input() reset$: Observable<any> | null = null;

  private w: number = 0;
  private h: number = 0;
  private dataPlanets: Planet2[] = [];
  private isZoomed = false;
  private delta = {
    deltaGenre: 1000000,
    deltaBand: 1000000
  };
  private deltaGenreIncrease = this.createIntervall(DeltaType.GENRE);
  private deltaBandIncrease = this.createIntervall(DeltaType.BAND);

  private svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any> | undefined;
  private g: d3.Selection<SVGGElement, unknown, HTMLElement, any> | undefined;

  private zoom: any;
  private subscription: Subscription | undefined = undefined;

  constructor(private router: Router, private store: Store<State>) {
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngAfterViewInit(): void {
    const component: OrbitComponent = this;

    if (component.reset$) {
      component.subscription = component.reset$.subscribe(() => component.reset());
    }

    component.w = window.innerWidth;
    component.h = window.innerHeight - 10;
    if (component.planets) {
      component.dataPlanets = component.planets
        .map(planet => {
          if (isBand(planet)) {
            return {
              ...planet,
              distanceToCenter: planet.distanceToCenter * 5,
              radius: planet.radius * 5
            };
          }
          return planet;
        });
    }
    component.svg = d3.select('#starmap-' + component.part).insert('svg')
      .attr('viewBox', [0, 0, this.w, this.h]).on('click', (event, i) => {
        component.reset();
      });
    component.g = component.svg.append('g');


    function zoomed({transform}: any): void {
      if (!component.g) {
        return;
      }
      component.g.attr('transform', transform);
    }

    component.zoom = d3.zoom()
      .scaleExtent([1, 40])
      .on('zoom', zoomed);

    if (component.withSun) {
      component.g.append('circle').attr('r', 50).attr('cx', component.getRealXCoordinate())
        .attr('cy', component.getRealYCoordinate()).attr('class', 'sun')
        .on('mouseover', function () {
          if (component.router.url.indexOf('part-1') > -1) {
            d3.select(this)
              .attr('cursor', 'pointer');
          }
        })
        .on('mouseout', function () {
          d3.select(this)
            .attr('cursor', 'default');
        }).on('click', function () {
        if (component.router.url.indexOf('part-1') > -1) {
          component.router.navigate(['/part-2']);
        }
      });
    }

    const container = component.g.append('g')
      .attr('transform', 'translate(' + component.getRealXCoordinate() + ',' + component.getRealYCoordinate() + ')');

    container.selectAll('g.planet').data(component.dataPlanets).enter().append('g')
      .attr('class', 'genre_cluster').each(function (d, i) {

      // draw the orbit
      let existingOrbit = d3.select('#distance-' + d.distanceToCenter);
      if (existingOrbit.size() === 0) {
        d3.select(this).append('circle')
          .attr('id', 'distance-' + d.distanceToCenter)
          .attr('class', 'orbit')
          .attr('r', d.distanceToCenter)
          .attr('stroke-width', '2');
      }
      // draw the planet
      const planet = d3.select(this).append('circle')
        .attr('r', d.radius)
        .attr('cx', d.distanceToCenter)
        .attr('cy', 0)
        .attr('class', 'planet')
        .attr('cursor', 'pointer')
        .attr('id', 'planet-' + d.id);

      if (d.img) {
        d3.select(this).append('image')
          .attr('xlink:href', d.img)
          .attr('x', -387)
          .attr('y', 200)
          .attr('width', 100)
          .attr('height', 100)
          .attr('transform', `rotate(-${d.phi0})`)
          .on('click', function (event, i) {
            component.router.navigateByUrl('/part-1');
          })
          .on('mouseover', function () {
            d3.select(this)
              .attr('cursor', 'pointer');
          })
          .on('mouseout', function () {
            d3.select(this)
              .attr('cursor', 'pointer');
          });
      } else if (component.withSun) {
        planet.on('click', function (event, i) {
          if (isGenre(d)) {
            component.clicked(event, d);
          }
        }).on('mouseover', function () {
          clearInterval(component.deltaGenreIncrease);
          if (isGenre(d)) {
            d3.select('#hoverTitle')
              .text(d.title as string)
          }
        })
          .on('mouseout', function () {
            if (!component.isZoomed) {
              component.deltaGenreIncrease = component.createIntervall(DeltaType.GENRE);
            }
            if (isGenre(d)) {
              d3.select('#hoverTitle')
                .text('')
            }
          });
      }


      // draw it's Moons
      if (isGenre(d)) {
        d3.select(this).append('g').attr('transform', `translate(${d.distanceToCenter}, 0)`)
          .selectAll('g.moon').data(d.bands as Band[]).enter().append('g')
          .attr('class', 'band_cluster').each(function (d, i) {
          // draw the orbit of the moon
          d3.select(this).append('circle')
            .attr('class', 'orbit')
            .attr('r', d.distanceToCenter)
            .attr('stroke-width', '2');

          // draw the moon
          d3.select(this).append('circle').attr('r', d.radius).attr('cx', d.distanceToCenter)
            .attr('cy', 0)
            .attr('class', 'moon');
        })
          .attr('transform', function (d) {
            const rotation = d.phi0 + (component.delta.deltaBand * d.speed);
            return `rotate(${rotation})`;
          })
          .on('click', function (event, i) {
            event.stopPropagation();
            if (component.isZoomed) {
              d3.select('#embedded').remove();
              d3.select('#orbit-container').append('div')
                .attr('id', 'embedded')
                .html(i.embeddedSpotify as string);
            }
          })
          .on('mouseover', function () {
            if (component.isZoomed) {
              d3.select(this)
                .attr('cursor', 'pointer');
              clearInterval(component.deltaBandIncrease);
            }
          })
          .on('mouseout', function () {
            if (component.isZoomed) {
              d3.select(this)
                .attr('cursor', 'default');
              component.deltaBandIncrease = component.createIntervall(DeltaType.BAND);
            }
          });
      }
    })
      .attr('transform', function (d) {

        let speed = d.speed;
        if (d3.select('#planet-' + d.id).classed('active')) {
          speed = 0;
        }
        const rotation = d.phi0 + ((component.delta.deltaGenre * speed) / 200);
        return `rotate(${rotation})`;
      });

    setInterval(() => {
      if (this.svg) {
        this.svg.selectAll('.genre_cluster, .band_cluster')
          .attr('transform', function (d: any) {
            if (isPlanet(d)) {
              let currentDelta = 0;
              if (isGenre(d)) {
                currentDelta = component.delta.deltaGenre;
              }
              if (isBand(d)) {
                currentDelta = component.delta.deltaBand;
              }
              return 'rotate(' + (d.phi0 + (currentDelta * d.speed / 30)) + ')';
            }
            return '';
          });
      }
    }, 5);
  }

  reset(): void {
    if (this.svg && this.isZoomed) {
      this.svg.select('#description').remove();
      this.svg.transition().duration(750).call(
        this.zoom.transform as any,
        d3.zoomIdentity,
        d3.zoomTransform(this.svg.node() as any).invert([(this.getRealXCoordinate()) + this.marginLeft, this.getRealYCoordinate()])
      );
      this.deltaGenreIncrease = this.createIntervall(DeltaType.GENRE);
      this.isZoomed = false;
      d3.select('#embedded').remove();
      this.store.dispatch(DataActions.hideDescription());
    }
  }

  private createIntervall(genreType: DeltaType): any {
    let intervalFunction = () => {
    };
    if (genreType === DeltaType.GENRE) {
      intervalFunction = () => this.delta.deltaGenre++;
    } else if (genreType === DeltaType.BAND) {
      intervalFunction = () => this.delta.deltaBand++;
    }
    return setInterval(intervalFunction, 5);
  }


  private clicked(event: any, data?: Chapter): void {
    if (!this.svg) {
      return;
    }
    event.stopPropagation();
    this.isZoomed = true;
    clearInterval(this.deltaGenreIncrease);

    this.svg.transition().duration(750).call(
      this.zoom.transform as any,
      d3.zoomIdentity.translate(this.getRealXCoordinate(), this.getRealYCoordinate()).scale(5).translate(-event.clientX, -event.clientY),
      d3.pointer(event)
    );

    if (data && data.description) {
      const description: Description = {
        title: data.title,
        text: data.description,
        isHelpText: false
      }
      this.store.dispatch(DataActions.updateDescription({description}));
    }
  }

  public getRealXCoordinate(): number {
    return (this.w / 2) + this.marginLeft;
  }

  public getRealYCoordinate(): number {
    return (this.h / 2) + this.marginTop;
  }
}

