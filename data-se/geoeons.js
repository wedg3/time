window.TimelineRegistry.registerDataset({
  id: 'geologic-eons',
  label: 'Geologska eoner',
  enabledByDefault: false,
  eras: [
    {
      start: -4600000000, end: -4000000000, title: 'Hadean', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 66,
      info: 'Hadean var den tidigaste perioden i jordens historia, när planeten just hade bildats. Jorden var mycket het, utsattes för kraftiga nedslag och de första hav och fasta jordskorpsdelar började så småningom ta form.'
    },
    {
      start: -4000000000, end: -2500000000, title: 'Arkeikum', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 66,
      info: 'Under Arkeikum stabiliserades jordskorpan mer och de första säkra spåren av liv uppträder. Enkla mikroorganismer dominerade och atmosfären innehöll fortfarande mycket lite syre.'
    },
    {
      start: -2500000000, end: -538000000, title: 'Proterozoikum', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 74,
      info: 'Proterozoikum präglades av att syrehalten i atmosfären steg och att mer komplexa celler utvecklades. Mot slutet uppträder de första större flercelliga organismerna.'
    },
    {
      start: -538000000, end: 2026, title: 'Fanerozoikum', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 74,
      info: 'Fanerozoikum är den geologiska eon då livet blivit mycket synligt i fossilmaterialet. Här utvecklas djur, växter, dinosaurier, däggdjur och till sist människor.'
    }
  ],
  facts: [
    { year: -4540000000, text: 'Jorden bildas ur material kring den unga solen.', level: 0 },
    { year: -4400000000, text: 'De första tecknen på skorpa och kanske flytande vatten uppträder.', level: 0 },
    { year: -3500000000, text: 'Några av de tidigaste tydliga spåren av liv finns från denna tid.', level: 0 },
    { year: -2400000000, text: 'Den stora syresättningen förändrar atmosfären.', level: 0 },
    { year: -1800000000, text: 'Mer komplexa eukaryota celler etableras.', level: 0 },
    { year: -720000000, text: 'Jorden genomgår mycket kraftiga nedisningar under kryogenium.', level: 0 },
    { year: -538000000, text: 'Fanerozoikum börjar och djurlivet blir rikt i fossilregistret.', level: 0 },
    { year: -252000000, text: 'Perm–trias-utdöendet blir den största kända massutrotningen.', level: 0 },
    { year: -3000000, text: 'Människan blir mycket sent en avgörande kraft i jordens historia.', level: 0 }
  ]
});