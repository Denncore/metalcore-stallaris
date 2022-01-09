import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { ZoomView } from 'd3';
import { isPlanet, Planet } from 'src/app/model';



@Component({
  selector: 'app-stellaris',
  templateUrl: './stellaris.component.html',
  styleUrls: ['./stellaris.component.scss']
})
export class StellarisComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const w = window.innerWidth, h = window.innerHeight;
    const t0 = Date.now();
    const delta = (Date.now() - t0);
    const planets: Planet[] = [
      {
        distanceToCenter: 100, radius: 10, speed: 4, phi0: 190, moons: [
          {distanceToCenter: 20, radius: 2, speed: 5, phi0: 20},
          {distanceToCenter: 40, radius: 2, speed: 10, phi0: 100}
        ],
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
      },
      {distanceToCenter: 225, radius: 8, speed: 5, phi0: 200, moons: []},
      {
        distanceToCenter: 300, radius: 12, speed: 2, phi0: 90, moons: [
          {distanceToCenter: 28, radius: 5, speed: 5, phi0: 200}
        ]
      },
      {
        distanceToCenter: 350, radius: 10, speed: 4, phi0: 190, moons: [
          {distanceToCenter: 20, radius: 2, speed: 5, phi0: 20},
          {distanceToCenter: 40, radius: 1, speed: 10, phi0: 100}
        ]
      },
      {
        distanceToCenter: 450, radius: 10, speed: 4, phi0: 80, moons: [
          {distanceToCenter: 25, radius: 4, speed: 11, phi0: 70}
        ]
      },
      {
        distanceToCenter: 600, radius: 20, speed: 2, phi0: 20, moons: [
          {distanceToCenter: 30, radius: 2, speed: 15, phi0: 20},
          {distanceToCenter: 40, radius: 5, speed: 8, phi0: 50},
          {distanceToCenter: 50, radius: 7, speed: 6, phi0: 190},
          {distanceToCenter: 70, radius: 8, speed: 2, phi0: 100}
        ]
      },
    ];
    const svg = d3.select('#starmap').insert('svg')
      .attr("viewBox", [0, 0, w, h])
      .on("click", reset);

    const g = svg.append('g');
    function zoomed({transform}: any) {
      g.attr("transform", transform);
    }
    const zoom = d3.zoom()
      .scaleExtent([1, 40])
      .on("zoom", zoomed);

    g.append('circle').attr('r', 20).attr('cx', w / 2)
      .attr('cy', h / 2).attr('class', 'sun');

    const container = g.append('g')
      .attr('transform', 'translate(' + w / 2 + ',' + h / 2 + ')');

    container.selectAll('g.planet').data(planets).enter().append('g')
      .attr('class', 'planet_cluster').each(function (d, i) {
      // draw the orbit
      d3.select(this).append('circle')
        .attr('class', 'orbit')
        .attr('r', d.distanceToCenter);
      // draw the planet
      d3.select(this).append('circle')
        .attr('r', d.radius)
        .attr('cx', d.distanceToCenter)
        .attr('cy', 0)
        .attr('class', 'planet')
        .attr('cursor', 'pointer')
        .on('click', function(event, i) {
          clicked(event, d);
        })

      // draw it's Moons
      d3.select(this).append('g').attr('transform', `translate(${d.distanceToCenter}, 0)`)
        .selectAll('g.moon').data(d.moons as Planet[]).enter().append('g')
        .attr('class', 'moon_cluster').each(function (d, i) {
        // draw the orbit of the moon
        d3.select(this).append('circle').attr('class', 'orbit')
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
    })
      .attr('transform', function (d) {
        const rotation = d.phi0 + (delta * d.speed / 200);
        return `rotate(${rotation})`;
      });

    d3.timer(function () {
      svg.selectAll('.planet_cluster, .moon_cluster')
        .attr('transform', function (d: any) {
          if (isPlanet(d)) {
            const delta = (Date.now() - t0);
            return 'rotate(' + (d.phi0 + (delta * d.speed / 200)) + ')';
          }
          return '';
        })
    });

    function reset() {
      svg.select('#description').remove();
      svg.transition().duration(750).call(
        zoom.transform as any,
        d3.zoomIdentity,
        d3.zoomTransform(svg.node() as any).invert([w / 2, h / 2])
      );
    }
    function clicked(event: any, data: Planet) {
      event.stopPropagation();
      svg.transition().duration(750).call(
        zoom.transform as any,
        d3.zoomIdentity.translate(w / 2, h / 2).scale(2).translate(-event.clientX, -event.clientY),
        d3.pointer(event)
      );
      if(data.description) {
        const descriptionContainer = svg.append('g')
          .attr('id', 'description')
        descriptionContainer.append('rect')
          .attr('width', 500)
          .attr('height', 500)
          .attr('fill', 'black')
          .attr('stroke', 'black')
          .attr('opacity', '0.5')
          .attr('rx', '20')
          .attr('ry', '20');
        descriptionContainer.append('text')
          .attr('x', 250)
          .attr('y', 250)
          .attr('stroke', 'white')
          .attr('fill', 'white')
          .attr("dy", ".35em")
          .attr('text', function(d, i) {
            return data.description as string;
          });
      }

    }

  }


}
