window.TimelineRegistry.registerDataset({
  id: 'romarriket',
  label: 'Romarriket',
    category: 'Civilisationer',
  enabledByDefault: false,
  eras: [
    {
      start: -753, end: -509, title: 'Kungatiden', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 68,
      info: '🐺 Enligt romersk tradition grundas Rom år 753 f.Kr. Under kungatiden växer staden fram som ett tidigt samhälle med kungamakt, religion och påverkan från grannfolk som etruskerna.'
    },
    {
      start: -509, end: -27, title: 'Republiken', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 68,
      info: '🏛️ Under republiken styrs Rom utan kung och utvecklar institutioner som senat, folkförsamlingar och valda ämbeten. Samtidigt växer Rom från stadsstat till stormakt genom krig, allianser och erövringar.'
    },
    {
      start: -27, end: 284, title: 'Kejsartidens början', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 92,
      info: '🦅 När Augustus blir den förste kejsaren inleds en ny epok där republiken formellt finns kvar men den verkliga makten samlas hos kejsaren. Romarriket expanderar, stabiliseras och når sin största glans.'
    },
    {
      start: 284, end: 395, title: 'Senkejsartiden', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 86,
      info: '⚔️ Under senkejsartiden försöker kejsarna stärka och omorganisera riket i en tid av yttre hot, ekonomiska problem och inre förändring. Kristendomen får också allt större betydelse.'
    },
    {
      start: 395, end: 476, title: 'Västroms sista tid', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 92,
      info: '🏚️ Efter rikets delning försvagas Västrom allt mer genom maktkamp, invasioner och sönderfallande centralmakt. År 476 brukar ofta ses som slutpunkten för Västromerska riket.'
    }
  ],
  facts: [
    { year: -753, text: '🐺 Enligt traditionen grundas Rom av Romulus.', level: 0 },
    { year: -509, text: '🏛️ Kungamakten avskaffas och republiken inleds.', level: 1 },
    { year: -264, text: '⚓ Det första puniska kriget mellan Rom och Karthago bryter ut.', level: 1 },
    { year: -146, text: '🔥 Karthago förstörs och Rom blir den ledande makten i västra Medelhavet.', level: 1 },
    { year: -44, text: '🗡️ Julius Caesar mördas efter att ha samlat stor makt.', level: 0 },
    { year: -27, text: '🦅 Augustus blir den förste romerske kejsaren.', level: 1 },
    { year: 117, text: '🗺️ Romarriket når sin största utbredning under Trajanus.', level: 1 },
    { year: 313, text: '✝️ Kristendomen tillåts i riket genom Milanoediktet.', level: 2 },
    { year: 330, text: '🏙️ Konstantinopel blir ett nytt maktcentrum i öst.', level: 2 },
    { year: 395, text: '⚖️ Romarriket delas permanent i en västlig och en östlig del.', level: 1 },
    { year: 410, text: '🔥 Rom plundras av visigoterna.', level: 1 },
    { year: 476, text: '🏚️ Den siste västromerske kejsaren avsätts.', level: 0 }
  ]
});
