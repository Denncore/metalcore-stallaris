import { Chapter } from 'src/app/model';

export const CHAPTERS: Chapter[] = [
  {
    chapterName: 'chapter-1', distanceToCenter: 100, radius: 10, speed: 4, phi0: 190, bands: [
      {bandName: 'Whitechapel', distanceToCenter: 20, radius: 2, speed: 5, phi0: 20,
      embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/5274obTQJjzjyycRyJlfml" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'},
      {bandName: 'Emmure', distanceToCenter: 40, radius: 2, speed: 10, phi0: 100}
    ],
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n' +
      '\n' +
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
  },
  {distanceToCenter: 225, radius: 8, speed: 5, phi0: 200, bands: []},
  {
    distanceToCenter: 300, radius: 12, speed: 2, phi0: 90, bands: [
      {distanceToCenter: 28, radius: 5, speed: 5, phi0: 200}
    ]
  },
  {
    distanceToCenter: 350, radius: 10, speed: 4, phi0: 190, bands: [
      {distanceToCenter: 20, radius: 2, speed: 5, phi0: 20},
      {distanceToCenter: 40, radius: 1, speed: 10, phi0: 100}
    ]
  },
  {
    distanceToCenter: 450, radius: 10, speed: 4, phi0: 80, bands: [
      {distanceToCenter: 25, radius: 4, speed: 11, phi0: 70}
    ]
  },
  {
    distanceToCenter: 600, radius: 20, speed: 2, phi0: 20, bands: [
      {distanceToCenter: 30, radius: 2, speed: 15, phi0: 20},
      {distanceToCenter: 40, radius: 5, speed: 8, phi0: 50},
      {distanceToCenter: 50, radius: 7, speed: 6, phi0: 190},
      {distanceToCenter: 70, radius: 8, speed: 2, phi0: 100}
    ]
  },
];
