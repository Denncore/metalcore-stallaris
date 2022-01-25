import { Chapter, Description } from 'src/app/model';

export const HELP_DESCRIPTION: Description = {
  isHelpText: true,
  title: 'wilkommen im univerum\n' +
  'des metalcore.\n',
  text: 'das universum leitet dich durch\n' +
    'die geschichte und entwicklung\n' +
    'der musik und zeigt wie facetten-\n' +
    'reich ein noch recht junges\n' +
    'genre wie metalcore sein kann.\n\n' +
    'das komplette konstrukt zeigt das\n' +
    'ganze universum des metalcores\n' +
    'in zwei teilen. die anfänge und die\n' +
    'entwicklung des genres bis heute.\n' +
    'die mittleren orbits sind die\n' +
    'kapitel der geschichte. der kern führt\n' +
    'dich tiefer ins metalcore universum.\n\n' +
    'du muss nur klicken.\n' +
    'klicke dich durch die einzelnen\n' +
    'kapitel und höre dir dazu die musik\n' +
    'ein, welche den abschnitt der\n' +
    'geschichte beeinflusst haben um\n' +
    'metalcore zu dem zu machen, was\n' +
    'es heute ist.\n\n' +
    'viel spaß beim entdecken!'
}
export const METALCORE_DESCRIPTION: Description = {
  isHelpText: false,
  title: '00 metalcore? metalcore!',
  text: 'metalcore oder auch metal core, ist\n' +
    'die mischung von heavy metal\n' +
    'und hardcore punk. eine weitere\n' +
    'treffende bezeichnung für das\n' +
    'genre ist auch metallic hardcore.\n' +
    'metalcore trägt den ursprung vor\n' +
    'allem in den vereinigten staaten von\n' +
    'america, das daraus resultiert, dass\n' +
    'hardcore ebenfalls in den USA sich\n' +
    'entwickelte und bekanntheit\n' +
    'erreichte. zunächst war metalcore\n' +
    'eine musikrichtung, mit der sich\n' +
    'niemand so richtig anfreunden\n' +
    'konnte und keine große popularität\n' +
    'damit erreichte. die kluft zwischen\n' +
    'den metalheads [bezeichnet die\n' +
    'fangruppe von heavy metal] und\n' +
    'der hardcore szene war zu groß,\n' +
    'den einen war der einfluss vom\n' +
    'hardcore zu stark, die anderen\n' +
    'distanzierten sich von der\n' +
    'oberflächlichkeit des metals.\n' +
    'diese differenzen der beiden szenen\n' +
    'zeigte sich auch im aussehen.\n' +
    'der stil der metalcore szene war\n' +
    'meist jünger und moderner, was das\n' +
    'bild vom klassischen metalhead\n' +
    'nicht entsprach. dazu kam, dass\n' +
    'den hardcore anhängern die tiefe\n' +
    'und politische attitüde in den songs\n' +
    'der metalcorebands fehlte.\n' +
    'die entwicklung zeigte recht schnell\n' +
    'die vermischung beider musikkul-\n' +
    'turen, das crossover-phänomen\n' +
    '»metalcore« setze eigene maß-\n' +
    'stäbe und auch ihren eigenen\n' +
    'kleidungsstil. der begriff metalcore\n' +
    'findet den weg in den mainstream\n' +
    'anfang der 2000er, als die ersten\n' +
    'bands aus der hardcore szene die\n' +
    'liebe zum metal verkünden in ihren\n' +
    'liedern. die songtexte von metal-\n' +
    'core befassen sich meist mit\n' +
    'themen wie gewalt und aggression,\n' +
    'sie können jedoch auch persönliche,\n' +
    'gesellschaftliche, sozialkritische\n' +
    'oder politische themen beinhalten.\n' +
    'es kombiniert die stärke und\n' +
    'das laute des metals mit dem\n' +
    'tiefsinnigen und thematisierenden\n' +
    'hardcore.',
  isDefault: true
}

export const METALCORE_DESCRIPTION_2: Description = {
  text: '',
  title: 'die entwicklung des metalcores\n' +
    'hat einige etappen bereits schon\n' +
    'durchlebt, schaue wie das genre\n' +
    'sich bis in unsere heutige zeit\n' +
    'weiter gewandeltund daraus entwickelt hat.',
  isHelpText: false,
  isDefault: true
}


export const WELCOME: Chapter[] = [
  {
  chapterName: 'filler',
  distanceToCenter: 415,
  radius: 15,
  speed: 3,
  phi0: 10,
  bands: []
  },
  {
    chapterName: 'start',
    distanceToCenter: 415,
    radius: 45,
    speed: 0,
    phi0: 144,
    img: '/assets/icons/play_button.svg',
    bands: [
      {
        bandName: '1', distanceToCenter: 67, radius: 6, speed: 4, phi0: 80,
      },
      {
        bandName: '2', distanceToCenter: 90, radius: 0, speed: 0, phi0: 0,
      },
      {
        bandName: '3', distanceToCenter: 130, radius: 14, speed: 6, phi0: 100,
      },
    ]
  }
];
export const CHAPTERS: Chapter[] = [
  {
    chapterName: 'chapter-1',
    title: '01 die anfänge des metalcore',
    distanceToCenter: 420,
    radius: 10,
    speed: 3,
    phi0: 190,
    bands: [
      {
        bandName: 'integrity', distanceToCenter: 20, radius: 4, speed: 5, phi0: 20,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/3L3FDQpQskFnHiISPYHmBo?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'unbroken', distanceToCenter: 30, radius: 4, speed: 8, phi0: 100,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/0c7r2XJOGfxr6Mosn8msVv?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'earth crisis', distanceToCenter: 30, radius: 6, speed: 15, phi0: 190,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/4ITkzAQWPILwWpEWJxHB9g?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'downcast', distanceToCenter: 40, radius: 7, speed: 8, phi0: 10,
        embeddedSpotify: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VH1v1ru8xIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      },
      {
        bandName: 'strife', distanceToCenter: 50, radius: 5, speed: 6, phi0: 50,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/68qsduRCs8caw95bbF4IDD?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'ringworm', distanceToCenter: 65, radius: 4, speed: 6, phi0: 250,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/1mVvXNKbCaUapInbgHCDRV?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'deadguy', distanceToCenter: 65, radius: 7, speed: 8, phi0: 10,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/06p0y7edz7fFY3A85oiUgF?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'zao', distanceToCenter: 65, radius: 6, speed: 7, phi0: 125,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/2vqfIznyoJDjhrbNAueQ6s?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      }
    ],
    description:
      'die anfänge des genres machen in\n' +
      'den 1990er jahren unter anderen\n' +
      '»Integrity« und schafften damit die\n' +
      'ersten erfolge des metalcores. 1991\n' +
      'veröffentlichten sie ihr erstes album,\n' +
      'welches stark hörbar, vom hardcore\n' +
      'beeinflusst war und damit den grund-\n' +
      'stein des metalcores legten.\n' +
      '1993 zog die band »Unbroken« nach\n' +
      'und veröffentlicht ihr debütalbum\n' +
      '»ritual«, das eines der frühsten\n' +
      'metalcorealben gilt. weitere an-\n' +
      'fänge legten »earth crisis« [1995],\n' +
      'ähnlich wie »unbroken« mit trash-\n' +
      'metal und hardcore. desweiteren\n' +
      'sind bands wie »Downcast«, »Strife«,\n' +
      '»Ringworm«, »Deadguy« und »Zao«\n' +
      'zu nennen. somit ist der weg zur\n' +
      'popularität des metalcores gelegt\n' +
      'und bringt uns zur etablierung des\n' +
      'genres.'
  },
  {
    chapterName: 'chapter-2',
    title: '02 etablierung des genres',
    distanceToCenter: 320,
    radius: 10,
    speed: 4,
    phi0: 10,
    bands: [
      {
        bandName: 'hatebreed', distanceToCenter: 25, radius: 4, speed: 5, phi0: 20,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/17Mb968quDHpjCkIyq30QV?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'shai hulud', distanceToCenter: 40, radius: 8, speed: 8, phi0: 100,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/4AlPDOBuB1s7NuIPo4veZu?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'poison the well', distanceToCenter: 40, radius: 4, speed: 8, phi0: 200,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/71t8oi0TjZ9Op6JRrVqaBx?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      }
    ],
    description:
      'bis mitte der 1990er war metalcore\n' +
      'ein phänomen der subkultur. der\n' +
      'umschwung kam ende der 1990er\n' +
      'mit bands, welche heute noch büh-\n' +
      'nengeschichte schreiben mit einer\n' +
      'größeren bekanntheit, als die ur-\n' +
      'bands des genres. inspiriert und\n' +
      'beeinflusst von »earth crisis« legen\n' +
      '»hatebreed« 1997 neue maßstäbe\n' +
      'und tragen maßgeblich bis heute\n' +
      'zum erfolg des metalcores bei. heut-\n' +
      'zutage sind »hatebreed« headliner\n' +
      'auf vielen touren und festivals mit\n' +
      'ihrem standfesten metalcore mit\n' +
      'hardcore elementen versehen.\n' +
      '»shai hulud« trat ebenfalls 1997 in\n' +
      'erscheinung mit herausstechenden\n' +
      'hardcoresounds, melodischen riffs\n' +
      'und ein wechsel zwischen cleanen\n' +
      'und harten passagen. sie traten\n' +
      'näher an den metalcore, wie wir ihn\n' +
      'heute kennen. »poison the well«\n' +
      'mischte metalcore riffs und melo-\n' +
      'dische aspekte mit in den sound\n' +
      'für maßgeblich für den metalcore\n' +
      'der 2000er war. »parkway drive«\n' +
      '[kapitel 6] haben bis heute erkenn\n-' +
      'bare elemente dieser grundlage in\n' +
      'ihren songs.'
  },
  {
    chapterName: 'chapter-3',
    title: '03 mathcore hat nichts\n' +
      'mit mathe zu tun',
    distanceToCenter: 250,
    radius: 15,
    speed: 4,
    phi0: 150,
    bands: [
      {
        bandName: 'botch', distanceToCenter: 30, radius: 6, speed: 4, phi0: 180,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/4kRYDoAbgDL7nqeqZhJlA3?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'dillinger escape plan', distanceToCenter: 40, radius: 7, speed: 5, phi0: 10,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/7IGcjaMGAtsvKBLQX26W4i?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'converge', distanceToCenter: 50, radius: 3, speed: 2, phi0: 80,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/7kHzfxMLtVHHb523s43rY1?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      }
    ],
    description:
      '»mathcore« war die erste bildung\n' +
      'eines subgenres, und gehört zur\n' +
      'geschichte des metalcores dazu.\n' +
      'mathcore [auch chaoscore] setzt\n' +
      'sich aus post-hardcore, jazzcore,\n' +
      'extreme metal sowie einflüssen aus\n' +
      'free jazz, industrial metal, progres-\n' +
      'sive metal, metalcore und technical\n' +
      'death metal anfang der 1990er in\n' +
      'den USA zusammen. die bands\n' +
      '»botch«, »dillinger escape plan« und\n' +
      '»converge« schaffen ein perfektes\n' +
      'chaos der genres in einklang zu\n' +
      'bringen und beeinflussten aktuelle\n' +
      'bands, wie »architects« [kapitel 9]\n' +
      'in ihren frühen anfängen.'
  },
  {
    chapterName: 'chapter-4',
    title: '04 »klassischer« metalcore',
    distanceToCenter: 180,
    radius: 12,
    speed: 3,
    phi0: 10,
    bands: [
      {
        bandName: 'norma jean', distanceToCenter: 25, radius: 4, speed: 4, phi0: 180,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/55b0Gfm53udtGBs8mmNXrH?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'killswitch engage', distanceToCenter: 35, radius: 7, speed: 8, phi0: 10,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/37394IP6uhnjIpsawpMu4l?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'darkest hour', distanceToCenter: 45, radius: 5, speed: 2, phi0: 250,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/4dso1lISV1Atdo3O6qbhqq?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'as i lay dying', distanceToCenter: 60, radius: 4, speed: 5, phi0: 50,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/2vd2HnNh4pdYa9gDVHFjEu?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'unearth', distanceToCenter: 60, radius: 8, speed: 1, phi0: 80,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/44wJRGNtWywCUJZug8FJg3?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      }
    ],
    description:
      'mit dem beginn der 2000er machten\n' +
      'bands wie »killswitch Engage«,\n' +
      '»Darkest Hour«, »As I lay Dying« und\n' +
      '»Unearth« metalcore erfolgreich.\n' +
      'alle bands trugen die einflüsse\n' +
      'der vorgänger aus den 1990er\n' +
      'mitsich und zeigten in ihren ersten\n' +
      'alben den thrash metal einfluss,\n' +
      'welcher jedoch schnell, mit ein-\n' +
      'gängigen refrains, massentauglicher\n' +
      'gemacht wurde. bei thrash metal\n' +
      'bemerkt man schnell die schnelle\n' +
      'und extreme spielart aus dem metal.\n' +
      '\n' +
      'thrash metal kam ursprünglich aus\n' +
      '1980er jahren uns wurde bekannt\n' +
      'mit bands wie »metallica« und\n' +
      '»slayer«.'
  },
  {
    chapterName: 'chapter-5',
    title: '05 melodic metalcore',
    distanceToCenter: 120,
    radius: 8,
    speed: 2,
    phi0: 180,
    bands: [
      {
        bandName: 'in flames', distanceToCenter: 20, radius: 7, speed: 4, phi0: 80,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/57ylwQTnFnIhJh4nu4rxCs?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'at the gates', distanceToCenter: 30, radius: 5, speed: 6, phi0: 120,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/6YXarbjg36ODFPez0PnOlD?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'trivium', distanceToCenter: 40, radius: 4, speed: 3, phi0: 10,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/278ZYwGhdK6QTzE3MFePnP?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'bullet for my valentine', distanceToCenter: 50, radius: 3, speed: 4, phi0: 50,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/7iWiAD5LLKyiox2grgfmUT?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'arch enemy', distanceToCenter: 50, radius: 4, speed: 6, phi0: 180,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/0DCw6lHkzh9t7f8Hb4Z0Sx?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      }
    ],
    description:
      'metalcore und melodic death metal\n' +
      'weisen einige parallelen auf und\n' +
      'erschufen ein weiteres subgenre,\n' +
      'der »melodic metalcore«. seit mitte\n' +
      'der 1990er jahre entwickelte sich\n' +
      'das subgerne des hardcores im\n' +
      'untergrund, die musikalisch recht\n' +
      'nahe am extremen metal, vor allem\n' +
      'mit einflüssen des skandinavischen\n' +
      'melodic death metals [göteborger\n' +
      'schule] ist. dabei finden sich hier\n' +
      'schnelle, teilweise dem thrash\n' +
      'metal entnommenen, gitarrenhooks,\n' +
      'zusammen mit zweistimmigen\n' +
      'melodie linien, wie der typische\n' +
      'kreisch-gesang wieder. »at the\n' +
      'gates« und thrash metal ikonen wie\n' +
      '»slayer«, bringen große einflüsse\n' +
      'mitsich. all diese entwicklungen\n' +
      'kamen zusammen und vereinen\n' +
      'sich ca. 2003 im metalcore, auch\n' +
      'wenn der begriff selbst schon länger\n' +
      'existiert.\n' +
      '\n' +
      'weitere bands dieses abschnitts\n' +
      'sind »in flames«, »trivium« und\n' +
      '»bullet for my valentine«.\n' +
      'merkmale des genres sind der\n' +
      'gesang, dieser variiert zwischen\n' +
      'tiefem grunzen [growls], brüllen,\n' +
      'schreien [screams] und klarem gesang.\n' +
      '\n' +
      'frauen sind in dem genre sehr\n' +
      'selten, eine ausnahme ist die band\n' +
      '»arch enemy« mit der frontsängerin\n' +
      'alissa white-gluz.'
  }
];
export const ADDITIONAL_CHAPTERS: Chapter[] = [
  {
    chapterName: 'chapter-x1',
    title: 'moins',
    distanceToCenter: 80,
    radius: 10,
    speed: 3,
    phi0: 190,
    bands: [
    ]
  },
  {
    chapterName: 'chapter-x2',
    title: 'moins2',
    distanceToCenter: 120,
    radius: 10,
    speed: 4,
    phi0: 10,
    bands: [
    ]
  }
];
export const CHAPTERS_PART_TWO: Chapter[] = [
  {
    chapterName: 'chapter-6',
    title: '06 hart, härter — deathcore',
    distanceToCenter: 419,
    radius: 10,
    speed: 2,
    phi0: 10,
    bands: [
      {
        bandName: 'parkway drive', distanceToCenter: 20, radius: 6, speed: 4, phi0: 80,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/159qqlGwzE04xyqpfAwRLo?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'bring me the horizon', distanceToCenter: 20, radius: 5, speed: 6, phi0: 120,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/1Ffb6ejR6Fe5IamqA5oRUF?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'dispised icon', distanceToCenter: 30, radius: 3, speed: 6, phi0: 100,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/3MjNMjqBpaQ0P8ebfbZjYn?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'whitechapel', distanceToCenter: 30, radius: 4, speed: 2, phi0: 50,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/5274obTQJjzjyycRyJlfml?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'the red chord', distanceToCenter: 40, radius: 5, speed: 5, phi0: 10,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/3u0I9EqSd1Uo34MItEAIKc?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'suicide silence', distanceToCenter: 40, radius: 3, speed: 2, phi0: 180,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/6HZr7Fs2VfV1PYHIwo8Ylc?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'emmure', distanceToCenter: 50, radius: 3, speed: 6, phi0: 30,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/1C62FV9Cltn9L4c9jAwCyk?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'within the ruins', distanceToCenter: 50, radius: 7, speed: 2, phi0: 250,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/5mscNJ6lE9Kj7tWv4iCk7y?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'betraying the martyrs', distanceToCenter: 50, radius: 3, speed: 5, phi0: 135,
        embeddedSpotify: '<iframe src="https://open.spotify.com/embed/artist/4tEWLl4loWFLgs25trNnro?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      }

    ],
    description:
      'als metalcore mitte der 2000er an\n' +
      'bekanntheit gewann bildeten sich\n' +
      'bands wie »dispised icon«,\n' +
      '»whitechapel«, »the red chord« [uvm.]\n' +
      'die death metal elemente mit dem\n' +
      'metalcore vereinten. deathcore ist\n' +
      'eine weitaus extremere spielart des\n' +
      'metalcores. um den stil als death\n' +
      '-\n' +
      'core zuordnen zu können, müssen\n' +
      'die death metal einflüsse deutlich\n' +
      'erkennbar sein. nicht unüblich\n' +
      'sind enthaltene breakdowns und\n' +
      'melodische gitarrenriffs in vielen\n' +
      'deathcore songs. »parkway drive«\n' +
      'begannen im jahr 2005 sich einen\n' +
      'namen zu machen. es folgt 2006\n' +
      '»bring me the horizon« , welche\n' +
      'ursprünglich dem deathcore zu-\n' +
      'geordnet wurden. bands wie\n' +
      '»emmure«, »within the ruins« und\n' +
      '»betraying the martyrs« werden so-\n' +
      'wohl dem metalcore als auch dem\n' +
      'deathcore zugeordnet, die grenzen\n' +
      'verschwimmen oftmals zwischen\n' +
      'den genres.'
  },
  {
    chapterName: 'chapter-7',
    title: '07 metalcore in deutschland',
    distanceToCenter: 360,
    radius: 9,
    speed: 2,
    phi0: 260,
    bands: [
      {
        bandName: 'heaven shall burn', distanceToCenter: 20, radius: 6, speed: 4, phi0: 180,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/4sy5qWfwUwpGYBnCKnwfcW?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'caliban', distanceToCenter: 20, radius: 4, speed: 8, phi0: 100,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/1oeo6cC9Fqa2bxxv67qBQL?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'narziss', distanceToCenter: 30, radius: 5, speed: 2, phi0: 250,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/52YzBp9tyajTQhPL7kuQ0K?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'callejon', distanceToCenter: 40, radius: 3, speed: 5, phi0: 250,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/1ce15ppX5OYxPsBVESZG3W?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'maroon', distanceToCenter: 50, radius: 2, speed: 4, phi0: 250,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/7v1NlLtP82T0FMIrE9gvu4?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      }
    ],
    description:
      '»heaven shall burn« eine metalcore/\n' +
      'medolic-death-metal band aus\n' +
      'thüringen ist der größte vertreter\n' +
      'des genres aus deutschland. sie\n' +
      'thematisieren in ihren texten unter\n' +
      'anderem politische themen, der\n' +
      'kampf gegen rassismus und fa-\n' +
      'schismus sowie für freiheit und\n' +
      'gegen eine überwachung und der\n' +
      'respekt gegenüber der natur.\n' +
      '»caliban«, »narziss«, sowie\n' +
      '»callejon« und »maroon« sind\n' +
      'weitere namen in der deutschen\n' +
      'metalcore szene, welche für den\n' +
      'erfolg beitrugen. wobei »narziss«\n' +
      'sich 2011 aufgelöst haben. die\n' +
      'deutsche metalcore szene beitet\n' +
      'eine sehr große vielfalt an künstlern,\n' +
      'welche es geschafft haben sich\n' +
      'auch international zu etablieren und\n' +
      'schaffen es auch regelmäßig in die\n' +
      'deutschen charts.'
  },
  {
    chapterName: 'chapter-8',
    title: '08 trancecore',
    distanceToCenter: 310,
    radius: 10,
    speed: 4,
    phi0: 10,
    bands: [
      {
        bandName: 'we butter the bread with butter', distanceToCenter: 20, radius: 4, speed: 5, phi0: 10,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/1oA1SW4FRAis6e8krh5YAf?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'eskimo callboy', distanceToCenter: 30, radius: 7, speed: 4, phi0: 90,
        embeddedSpotify: '<iframe width="560" height="315" src="https://www.youtube.com/embed/OnzkhQsmSag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      },
      {
        bandName: 'enter shikari ', distanceToCenter: 30, radius: 3, speed: 2, phi0: 150,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/31jvzuB4ikftPQZJwrYfCF?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      }
    ],
    description:
      'aus dem metalcore entwickelte sich\n' +
      'eine vielzahl an subgenres, eine\n' +
      'nennenswerte davon ist der trance-\n' +
      'core, »eskimo callboy«, eine\n' +
      'band aus castrop-rauxel schaffte\n' +
      'es mittlerweile die erfolgreichste\n' +
      'band ihres genres weltweit zu sein.\n' +
      '[stand januar, 2022] bei trancecore\n' +
      'werden stilmittel der elektronischen\n' +
      'tanzmusik mit metalcore vermischt.\n' +
      'harte metalcore elemente treffen\n' +
      'auf synthesizer und post-hardcore\n' +
      'stile. die britische band\n' +
      '»enter shikari« war ein vorreiter\n' +
      'davon im jahre 2003. in deutschland\n' +
      'sind neben »eskimo callboy« noch\n' +
      '»we butter the bread with butter«\n' +
      'aus berlin große trancecore vertre-\n' +
      'ter, beide schaffen komödiantische\n' +
      'musik und videos. »eskimo callboy«\n' +
      'hat aktuell in planung sich umzu-\n' +
      'benennen lt. eigenen aussagen und\n' +
      'kontroverse songs aus der vergan-\n' +
      'genheit wohl aus dem internet zu\n' +
      'entfernen. die band hat vor am\n' +
      'eurovision songcontest mit ihrem\n' +
      'neusten song »pump it« teilzunehmen.'
  },
  {
    chapterName: 'chapter-9',
    title: '09 progressive metalcore',
    distanceToCenter: 280,
    radius: 12,
    speed: 2,
    phi0: 175,
    bands: [
      {
        bandName: 'architects', distanceToCenter: 20, radius: 2, speed: 2, phi0: 124,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/3ZztVuWxHzNpl0THurTFCv?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'august burns red', distanceToCenter: 25, radius: 4, speed: 7, phi0: 225,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/5p9CTsn5ueGU4oScNX1axu?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      }
    ],
    description:
      'ein weiteres subgenre phänomen\n' +
      'ist der progressive metalcore [auch\n' +
      'technical metalcore oder ambient\n' +
      'metalcore genannt]. er zeichnet sich\n' +
      'durch den sehr hohen, technischen\n' +
      'aufwand der instrumente aus und\n' +
      'der geschaffenen atmosphäre in\n' +
      'ihren songs. bereits genannte band\n' +
      '»architects« aus dem mathcore be-\n' +
      'reich, mit inspiration von »converge«\n' +
      'und »the dillinger escape plan« und\n' +
      '»august burns red«, aus dem me-\n' +
      'talcore und extreme metal bereich\n' +
      'gingen experimentellere wege mit\n' +
      'komplexeren sounds und songs die\n' +
      'grenze verschmilzt hier bei vielen\n' +
      'bands wieder mit dem deathcore.'
  },
  {
    chapterName: 'chapter-10',
    title: '10 progressive deathcore',
    distanceToCenter: 230,
    radius: 6,
    speed: 4,
    phi0: 231,
    bands: [
      {
        bandName: 'born of osiris', distanceToCenter: 15, radius: 3, speed: 2, phi0: 180,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/4HgqjpBaWctBWVHafQIpRt?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'after the burial', distanceToCenter: 23, radius: 4, speed: 4, phi0: 110,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/0uNj4RxFjG0iVPlZS753en?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'TesseracT', distanceToCenter: 30, radius: 2, speed: 5, phi0: 71,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/23ytwhG1pzX6DIVWRWvW1r?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      }
    ],
    description:
      'mit dem progressive metalcore und\n' +
      'der verschmelzung mit dem death-\n' +
      'core, schaffte der metalcore es\n' +
      'auf eine weitere stufe und der\n' +
      'begriff »djent« entstand, zurückzu-\n' +
      'führen ist der begriff auf die band\n' +
      '»meshuggah«, wo erstmals »djent«\n' +
      'als begriff verwendet wurde.\n' +
      '»djent« ist ein hart angeschlagener,\n' +
      'abgedämpfter akkord an der\n' +
      'gitarre als klangnachahmung des\n' +
      'gittaristen fredrik thordendal der\n' +
      'band »meshuggah«.\n' +
      'atmosphärisch, rhythmisch zieht\n' +
      '»djent« die szene in den bann.\n' +
      '»born of osiris«, »after the burial«\n' +
      'und »TesseracT« entwickelten sich\n' +
      'im bereich des »djent« parallel zum\n' +
      'metalcore.'
  },
  {
    chapterName: 'chapter-11',
    title: '11 nu metalcore',
    distanceToCenter: 170,
    radius: 9,
    speed: 4,
    phi0: 250,
    bands: [
      {
        bandName: 'korn', distanceToCenter: 15, radius: 3, speed: 2, phi0: 280,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/3RNrq3jvMZxD9ZyoOZbQOD?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'of mice&man', distanceToCenter: 27, radius: 6, speed: 4, phi0: 10,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/4tususHNaR68xdgLstlGBA?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'emmure', distanceToCenter: 27, radius: 4, speed: 3, phi0: 150,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/1C62FV9Cltn9L4c9jAwCyk?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
    ],
    description:
      'zur geschgichte des metalcores\n' +
      'gehören viele subgenre entwicklun-\n' +
      'gen, welche die metalcore szene\n' +
      'vervollständigt. nu metal wird eben-\n' +
      'falls thematisiert. nu metal ist ein\n' +
      'genre aus den späten 1990er jahren\n' +
      'mit »korn« und »limp bizkit« und\n' +
      'mehr. 2010 kam es zu einem neu\n' +
      'aufleben des nu metals und da kam\n' +
      'der metalcore und deathcore mit\n' +
      'ins spiel. bands aus dem vergange-\n' +
      'nen nu metal zeitalter sprangen\n' +
      'auf der neuen nu metalcore welle\n' +
      'auf und erfanden das genre neu.\n' +
      '»of mice&men« und »emmure«\n' +
      'sind in der metalcore und der\n' +
      'nu metalcore szene damit sehr er-\n' +
      'folgreich.'
  },
  {
    chapterName: 'chapter-12',
    title: '12 metalcore als mainstream?',
    distanceToCenter: 170,
    radius: 7,
    speed: 5,
    phi0: 145,
    bands: [
      {
        bandName: 'spirit box', distanceToCenter: 20, radius: 5, speed: 8, phi0: 150,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/4MzJMcHQBl9SIYSjwWn8QW?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
    ],
    description:
      '»architects« [kapitel 09], »parkway\n' +
      'drive« und »bring me the horizon«\n' +
      '[kapitel 6] wurden nicht nur die\n' +
      'spitze des genres, sie schafften es\n' +
      'in mainstream radios und haben\n' +
      'sich genre übergreifend etabliert.\n' +
      '»spiritbox« ist eine newcomer\n' +
      'band mit ihrem debütalbum aus\n' +
      '2021 und zeigt, wie innovativ\n' +
      'metalcore sein kann.\n' +
      '»eskimo callboy« [kapitel 08] schafft\n' +
      'aus metalcore partytaugliche hits\n' +
      'zu schaffen. die möglichkeiten von\n' +
      'metalcore als genre sind noch\n' +
      'lange nicht ausgeschöpft und wer-\n' +
      'den zukünftig mehr einfluss in der\n' +
      'musikwelt schaffen.\n' +
      'es gibt unendlich möglichkeiten me-\n' +
      'talcore zu kombinieren, aber auch\n' +
      'back-to-the-roots zu kehren. wir\n' +
      'bleiben gespannt, was der moderne\n' +
      'metalcore für facetten mit sich\n' +
      'bringt.'
  },
  {
    chapterName: 'chapter-13',
    title: '13 metalcore all over the world',
    distanceToCenter: 100,
    radius: 7,
    speed: 2,
    phi0: 145,
    bands: [
      {
        bandName: 'babymetal', distanceToCenter: 15, radius: 3, speed: 2, phi0: 280,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/630wzNP2OL7fl4Xl0GnMWq?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'crystal lake', distanceToCenter: 25, radius: 2, speed: 7, phi0: 50,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/0A7d0PJxaLO7CGI94ht6PX?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'the devil wears prada', distanceToCenter: 25, radius: 5, speed: 2, phi0: 111,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/0NbQe5CNgh4YApOCDuHSjb?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      },
      {
        bandName: 'rise of the northstar', distanceToCenter: 35, radius: 3, speed: 5, phi0: 201,
        embeddedSpotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/5vDfbSPkurKQxpVVXALJ4K?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
      }
    ],
    description: 'japanisch »kawaii« trifft\n' +
      'auf metalcore\n' +
      '[kawaii übersetzt in dt. ein\n' +
      'ausdruck für »süß«, »niedlich«] die\n' +
      'band »babymetal« zeigt der welt\n' +
      'was kawaii metal [auch kawaiicore]\n' +
      'kann und hat weltweit erfolg damit.\n' +
      '\n' +
      'japanischer metalcore\n' +
      '»crystal lake« aus tokio, schaffte es\n' +
      'als exportschlager vor allem in\n' +
      'deutschland an große beliebtheit\n' +
      'zu gewinnen. sie vermischen viele\n' +
      'subgenres miteinander im bereich\n' +
      'des metalcores zwischen metal-\n' +
      'core, deathcore und nu metal bis\n' +
      'hin zu elektronischen einflüssen.\n' +
      '\n' +
      'kaum zu glauben\n' +
      '»the devil wears prada« aus ohio,\n' +
      'USA ist nach dem gleichnamigen\n' +
      'buch benannt und thematisiert\n' +
      'soziales und ethisches verständnis\n' +
      'der heutigen menschen. sie zählen\n' +
      'als christliche metalcore band.\n' +
      '\n' +
      'multi-kulti aus frankreichs\n' +
      'romantischster stadt\n' +
      '»rise of the north star« ist eine band\n' +
      'aus dem herzen frankreichs, paris,\n' +
      'und zeigt wie harmonisch rap-metal\n' +
      'zusammenpasst. dabei bleibt es\n' +
      'nicht bei einer kultur in ihrer musik,\n' +
      'sie kombinieren new york hardcore\n' +
      'der 90er mit thrash metal und me-\n' +
      'talcore. ihre texte thematisieren die\n' +
      'japanische kultur.'
  }
];

