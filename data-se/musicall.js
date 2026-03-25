window.TimelineRegistry.registerDataset({
  id: 'western-music',
  label: 'Västerländsk musik',
  enabledByDefault: false,
  eras: [
    {
      id: 'wm-medieval',
      start: 800,
      end: 1400,
      title: 'Medeltida musik',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 86,
      info: '⛪ Medeltidens västerländska musik domineras av kyrkosång, tidig notskrift och gradvis växande flerstämmighet. Musikens centrum ligger ofta i kyrkan och klostren.'
    },
    {
      id: 'wm-renaissance',
      start: 1400,
      end: 1600,
      title: 'Renässansmusik',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 88,
      info: '🎼 Renässansmusiken präglas av polyfoni, vokal balans och tydligare klangideal. Musiktryck och hovkultur bidrar till att sprida musiken bredare i Europa.'
    },
    {
      id: 'wm-baroque',
      start: 1600,
      end: 1750,
      title: 'Barockmusik',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 78,
      info: '🎻 Barockmusiken kännetecknas av dramatik, ornament, kontraster och stark rörelse. Opera, oratorium, konsert och avancerad instrumentalmusik utvecklas kraftigt.'
    },
    {
      id: 'wm-classical',
      start: 1750,
      end: 1820,
      title: 'Klassicism',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 74,
      info: '🎹 Klassicismen söker balans, tydlighet och formell klarhet. Symfonin, sonatformen och stråkkvartetten blir centrala uttryck i en stil där struktur och proportion är viktiga.'
    },
    {
      id: 'wm-romantic',
      start: 1820,
      end: 1910,
      title: 'Romantiken',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 72,
      info: '🌙 Romantikens musik lyfter fram känsla, individualitet, dramatik och nationell färg. Orkestern växer, uttrycken blir större och tonsättarnas personliga röst blir viktigare.'
    },
    {
      id: 'wm-modernism',
      start: 1910,
      end: 1970,
      title: 'Modernism',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 70,
      info: '🌀 Modernismen bryter med äldre tonspråk genom nya harmonier, rytmer, klanger och former. Tonsättare experimenterar med musikens byggstenar på ett mer radikalt sätt.'
    },
    {
      id: 'wm-postmodern',
      start: 1970,
      end: 2026,
      title: 'Senmodern / postmodern',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 104,
      info: '🪞 Under senmodern och postmodern tid blandas äldre och nya uttryck friare. Gränserna mellan stilar blir mindre tydliga, och tonsättare rör sig ofta mellan tradition, experiment och återbruk.'
    },

{
  id: 'wm-blues-jazz',
  start: 1915,
  end: 1945,
  title: 'Blues & jazz',
  order: 0,
  revealZoom: 0,
  rowHeight: 24,
  labelMinWidth: 78,
  info: '🎺 Blues och jazz får sitt stora genombrott under första halvan av 1900-talet. Här formas många av populärmusikens viktigaste uttryck: swing, improvisation, blue notes och stark rytmisk drivkraft.'
},
{
  id: 'wm-rocknroll',
  start: 1954,
  end: 1963,
  title: 'Rock’n’roll',
  order: 0,
  revealZoom: 0,
  rowHeight: 24,
  labelMinWidth: 74,
  info: '🎸 Rock’n’rollens peak ligger främst under 1950-talet och det tidiga 60-talet. Musikstilen blandar rhythm & blues, country och ungdomskultur till ett nytt, mer explosivt populärmusikaliskt uttryck.'
},
{
  id: 'wm-sixties-pop',
  start: 1963,
  end: 1970,
  title: '60-talspop',
  order: 0,
  revealZoom: 0,
  rowHeight: 24,
  labelMinWidth: 66,
  info: '🌈 Under 1960-talet blir popmusiken en global ungdomskraft. Brittisk pop, psykedelisk rock och studioproduktion förändrar både musikens sound och artistrollen.'
},
{
  id: 'wm-classic-rock',
  start: 1968,
  end: 1979,
  title: 'Klassisk rock',
  order: 0,
  revealZoom: 0,
  rowHeight: 24,
  labelMinWidth: 76,
  info: '🤘 Den klassiska rockens storhetstid präglas av albumformatet, elgitarrer, stora arenaband och tydliga rockidentiteter. Hårdrock, bluesrock och progressiv rock får stort genomslag.'
},
{
  id: 'wm-disco-punk',
  start: 1976,
  end: 1982,
  title: 'Disco & punk',
  order: 0,
  revealZoom: 0,
  rowHeight: 24,
  labelMinWidth: 78,
  info: '🪩 Disco och punk representerar två olika men samtida reaktioner i slutet av 70-talet: den ena dansant, glittrig och producerad, den andra rå, snabb och anti-etablissemang.'
},
{
  id: 'wm-synth-newwave',
  start: 1978,
  end: 1988,
  title: 'Synth & new wave',
  order: 0,
  revealZoom: 0,
  rowHeight: 24,
  labelMinWidth: 88,
  info: '🎛️ Synthpop och new wave får sitt starkaste genomslag under 80-talet. Elektroniska klanger, trummaskiner och stilmedveten produktion ger popmusiken ett nytt uttryck.'
},
{
  id: 'wm-hiphop-rise',
  start: 1982,
  end: 1996,
  title: 'Hiphopens genombrott',
  order: 0,
  revealZoom: 0,
  rowHeight: 24,
  labelMinWidth: 102,
  info: '🎤 Hiphop går från lokal scen till global huvudström under 80- och 90-talet. Rap, sampling, DJ-kultur och beatproduktion förändrar populärmusiken i grunden.'
},
{
  id: 'wm-grunge-alt',
  start: 1991,
  end: 1997,
  title: 'Grunge & alternativ rock',
  order: 0,
  revealZoom: 0,
  rowHeight: 24,
  labelMinWidth: 112,
  info: '🖤 I början av 90-talet får grunge och alternativ rock sitt starkaste genomslag. Soundet är råare, tyngre och mer desillusionerat än 80-talets stora arenapop.'
},
{
  id: 'wm-electronic-90s',
  start: 1989,
  end: 2001,
  title: 'Elektroniskt 90-tal',
  order: 0,
  revealZoom: 0,
  rowHeight: 24,
  labelMinWidth: 104,
  info: '💿 House, techno, rave, trance och annan elektronisk musik växer kraftigt från sent 80-tal och når bred peak under 90-talet. DJ:n och producenten blir allt viktigare musikaliska centrumfigurer.'
},
{
  id: 'wm-teen-pop-rnb',
  start: 1997,
  end: 2005,
  title: 'Teen pop & modern R&B',
  order: 0,
  revealZoom: 0,
  rowHeight: 24,
  labelMinWidth: 110,
  info: '✨ Runt millennieskiftet domineras topplistorna av producerad pop, boybands, starka soloartister och modern R&B. Musikvideo, radio och tidig internetkultur förstärker genomslaget.'
},
{
  id: 'wm-digital-pop',
  start: 2005,
  end: 2015,
  title: 'Digital popera',
  order: 0,
  revealZoom: 0,
  rowHeight: 24,
  labelMinWidth: 84,
  info: '📱 Under 2000-talets senare del formas popmusiken av digital produktion, sociala medier, autotune och global nätkultur. Gränsen mellan genrer blir allt mer flytande.'
},
{
  id: 'wm-streaming-era',
  start: 2015,
  end: 2026,
  title: 'Streaming-eran',
  order: 0,
  revealZoom: 0,
  rowHeight: 24,
  labelMinWidth: 86,
  info: '🌐 I streaming-eran formas musiklivet av plattformar, algoritmer, spellistor och snabb global spridning. Genrer blandas fritt och låtformatet påverkas av digitala lyssningsvanor.'
}

  ],
  facts: [
    { year: 800, text: '⛪ Gregoriansk sång blir central i den medeltida kyrkomusiken.', level: 0, eraIds: ['wm-medieval'] },
    { year: 900, text: '📝 Tidig notskrift gör det lättare att bevara och sprida musik.', level: 1, eraIds: ['wm-medieval'] },
    { year: 1200, text: '🎶 Flerstämmigheten utvecklas allt mer i den västerländska musiken.', level: 0, eraIds: ['wm-medieval'] },

    { year: 1501, text: '🖨️ Musiktryck hjälper noter att spridas snabbare i Europa.', level: 0, eraIds: ['wm-renaissance'] },
    { year: 1520, text: '🎼 Renässansens polyfona vokalmusik når stor konstnärlig höjd.', level: 1, eraIds: ['wm-renaissance'] },
    { year: 1562, text: '🎵 Palestrina blir en symbol för renässansens balanserade kyrkomusik.', level: 1, eraIds: ['wm-renaissance'] },

    { year: 1600, text: '🎭 Operan växer fram i början av barocken.', level: 0, eraIds: ['wm-baroque'] },
    { year: 1678, text: '🎻 Vivaldi och andra tonsättare utvecklar barockens livfulla instrumentalmusik.', level: 1, eraIds: ['wm-baroque'] },
    { year: 1721, text: '🎼 Bachs Brandenburgkonserter visar barockens komplexitet och energi.', level: 1, eraIds: ['wm-baroque'] },
    { year: 1741, text: '✨ Händels Messias blir ett av barockens mest kända verk.', level: 0, eraIds: ['wm-baroque'] },

    { year: 1760, text: '🎹 Haydn hjälper till att forma symfonin och stråkkvartetten.', level: 1, eraIds: ['wm-classical'] },
    { year: 1786, text: '🎭 Mozarts Figaros bröllop visar klassicismens balans och livfullhet.', level: 1, eraIds: ['wm-classical'] },
    { year: 1808, text: '🌟 Beethovens femte symfoni blir ett av musikens mest kända verk.', level: 0, eraIds: ['wm-classical'] },

    { year: 1830, text: '🌙 Romantikens musik får starkare känslouttryck och större orkestrar.', level: 0, eraIds: ['wm-romantic'] },
    { year: 1845, text: '🎹 Chopin och Liszt gör pianot till ett centralt romantiskt instrument.', level: 1, eraIds: ['wm-romantic'] },
    { year: 1876, text: '🎼 Wagners Ring-cykel visar romantikens storstilade ambitioner.', level: 1, eraIds: ['wm-romantic'] },
    { year: 1890, text: '🎨 Senromantiken präglas av rik orkesterklang och starkt personligt uttryck.', level: 1, eraIds: ['wm-romantic'] },

    { year: 1913, text: '🥁 Stravinskijs Våroffer markerar ett genombrott för musikalisk modernism.', level: 0, eraIds: ['wm-modernism'] },
    { year: 1923, text: '🎼 Schönberg och andra tonsättare bryter med traditionell tonartsmusik.', level: 1, eraIds: ['wm-modernism'] },
    { year: 1948, text: '🎛️ Elektronisk konstmusik börjar få större betydelse.', level: 1, eraIds: ['wm-modernism'] },
    { year: 1952, text: '🎲 John Cage utmanar gränserna för vad musik kan vara.', level: 1, eraIds: ['wm-modernism'] },

    { year: 1976, text: '🪞 Minimalism och postmodernism gör att äldre och nya uttryck blandas friare.', level: 0, eraIds: ['wm-postmodern'] },
    { year: 1985, text: '🎼 Många tonsättare rör sig friare mellan tonalitet, modernism och äldre stilar.', level: 1, eraIds: ['wm-postmodern'] },
    { year: 2000, text: '🌐 Samtida västerländsk konstmusik präglas av stor stilblandning och global påverkan.', level: 1, eraIds: ['wm-postmodern'] }
  ]
});
