import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Band, Chapter, isBand, isGenre, isPlanet, Planet2 } from 'src/app/model';
import * as d3 from 'd3';
import { Router } from '@angular/router';

enum DeltaType {
  GENRE, BAND
}

@Component({
  selector: 'app-orbit',
  templateUrl: './orbit.component.html',
  styleUrls: ['./orbit.component.scss']
})
export class OrbitComponent implements AfterViewInit {
  @Input() part: string | null = null;
  @Input() planets: Planet2[] | null = null;

  private dataPlanets: Planet2[] = [];
  private w = window.innerWidth;
  private h = window.innerHeight - 10;
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

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
    const component: OrbitComponent = this;
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
    console.log('HUI', d3.select('#starmap-' + component.part))
    console.log('HUI', '#starmap-' + component.part)
    component.svg = d3.select('#starmap-' + component.part).insert('svg')
      .attr('viewBox', [0, 0, this.w, this.h]).on('click', (event, i) => {
        component.reset();
      });
    component.g = component.svg.append('g')

    function zoomed({transform}: any): void {
      if (!component.g) {
      return;
    }
    component.g.attr('transform', transform);
  }

    component.zoom = d3.zoom()
      .scaleExtent([1, 40])
      .on('zoom', zoomed);

    component.g.append('circle').attr('r', 50).attr('cx', component.w / 2)
      .attr('cy', component.h / 2).attr('class', 'sun')
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

    const container = component.g.append('g')
      .attr('transform', 'translate(' + component.w / 2 + ',' + component.h / 2 + ')');

    container.selectAll('g.planet').data(component.dataPlanets).enter().append('g')
      .attr('class', 'genre_cluster').each(function (d, i) {

      console.log('HUUIIII');
      // draw the orbit
      let existingOrbit = d3.select('#distance-' + d.distanceToCenter);
      if (existingOrbit.size() === 0) {
        d3.select(this).append('circle')
          .attr('id', 'distance-' + d.distanceToCenter)
          .attr('class', 'orbit')
          .attr('r', d.distanceToCenter);
      }
      // draw the planet
      d3.select(this).append('circle')
        .attr('r', d.radius)
        .attr('cx', d.distanceToCenter)
        .attr('cy', 0)
        .attr('class', 'planet')
        .attr('cursor', 'pointer')
        .attr('id', 'planet-' + d.id)
        .on('click', function (event, i) {
          if (isGenre(d)) {
            component.clicked(event, d);
          }
        }).on('mouseover', function () {
        clearInterval(component.deltaGenreIncrease);
      })
        .on('mouseout', function () {
          if (!component.isZoomed) {
            component.deltaGenreIncrease = component.createIntervall(DeltaType.GENRE);
          }
        });

      // draw it's Moons
      if (isGenre(d)) {
        d3.select(this).append('g').attr('transform', `translate(${d.distanceToCenter}, 0)`)
          .selectAll('g.moon').data(d.bands as Band[]).enter().append('g')
          .attr('class', 'band_cluster').each(function (d, i) {
          // draw the orbit of the moon
          d3.select(this).append('circle')
            .attr('class', 'orbit')
            .attr('r', d.distanceToCenter);

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
        d3.zoomTransform(this.svg.node() as any).invert([this.w / 2, this.h / 2])
      );
      this.deltaGenreIncrease = this.createIntervall(DeltaType.GENRE);
      this.isZoomed = false;
      d3.select('#embedded').remove();
      d3.select('#chapter-text')
        .style('display', 'none');
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
      d3.zoomIdentity.translate(this.w / 2, this.h / 2).scale(5).translate(-event.clientX, -event.clientY),
      d3.pointer(event)
    );

    if (data && data.description) {
      let chapterText = d3.select('#chapter-text')
        .style('display', 'block');
      chapterText
        .select('.chapter-title')
        .text(data.title as string);

      chapterText
        .select('.chapter-body')
        .text(data.description as string);
    }
  }
}

