import { Component, Input, OnInit } from '@angular/core';
import { isBand, isGenre, isPlanet, Planet, Planet2 } from 'src/app/model';
import { OrbitService } from 'src/app/orbit.service';
import * as d3 from 'd3';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orbit',
  templateUrl: './orbit.component.html',
  styleUrls: ['./orbit.component.scss']
})
export class OrbitComponent implements OnInit {
  @Input() chapterText: string | null = null;
  @Input() planets: Planet2[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    const dataPlanets = this.planets
      .map(planet => {
        if(isBand(planet)) {
          return {
            ... planet,
            distanceToCenter: planet.distanceToCenter * 5,
            radius: planet.radius * 5
          }
        }
        return planet
      })
    const router = this.router
    const w = window.innerWidth, h = window.innerHeight - 10;
    const t0 = Date.now();
    const delta = (Date.now() - t0);

    const svg = d3.select('#starmap').insert('svg')
      .attr("viewBox", [0, 0, w, h]);

    const g = svg.append('g');

    g.append('circle').attr('r', 50).attr('cx', w / 2)
      .attr('cy', h / 2).attr('class', 'sun');

    const container = g.append('g')
      .attr('transform', 'translate(' + w / 2 + ',' + h / 2 + ')');

    container.selectAll('g.planet').data(dataPlanets).enter().append('g')
      .attr('class', 'genre_cluster').each(function (d, i) {
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
        .on('click', function(event, i) {
          if (isGenre(d)) {
            router.navigateByUrl('/' + d.chapterName?.toLowerCase())
          }
          if (isBand(d)) {
            d3.select('#embedded').remove()
            d3.select('#orbit-container').append('div')
              .attr('id', 'embedded')
              .html(d.embeddedSpotify as string);
          }
        })

      // draw it's Moons
      if(isGenre(d)) {
        d3.select(this).append('g').attr('transform', `translate(${d.distanceToCenter}, 0)`)
          .selectAll('g.moon').data(d.bands as Planet2[]).enter().append('g')
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
            const rotation = d.phi0 + (delta * d.speed / 200);
            return `rotate(${rotation})`;
          });
      }
    })
      .attr('transform', function (d) {
        const rotation = d.phi0 + (delta * d.speed / 200);
        return `rotate(${rotation})`;
      });

    setInterval(() => {
      svg.selectAll('.genre_cluster, .band_cluster')
        .attr('transform', function (d: any) {
          if (isPlanet(d)) {
            const delta = (Date.now() - t0);
            return 'rotate(' + (d.phi0 + (delta * d.speed / 200)) + ')';
          }
          return '';
        })
    }, 5)
    // d3.timer(function () {
    //
    // });
  }

}
