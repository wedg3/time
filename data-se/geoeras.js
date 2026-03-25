window.TimelineRegistry.registerDataset({
  id: 'geologic-eras',
  label: 'Geologiska eror',
    category: 'Djuptid',
  enabledByDefault: false,
  eras: [
    {
      start: -4000000000, end: -3600000000, title: 'Eoarkeikum', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 70,
      info: '🌍 Eoarkeikum är den äldsta delen av Arkeikum. Jorden kyls vidare ned, tidig skorpa finns och de första möjliga livsspåren kan ha sitt ursprung här.'
    },
    {
      start: -3600000000, end: -3200000000, title: 'Paleoarkeikum', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 76,
      info: '🦠 Under paleoarkeikum finns tydligare tecken på tidigt liv. Mikroorganismer lever i haven och jordens kontinenter är fortfarande små och unga.'
    },
    {
      start: -3200000000, end: -2800000000, title: 'Mesoarkeikum', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 76,
      info: '🪨 Mesoarkeikum präglas av fortsatt utveckling av jordskorpa och tidiga kontinenter. Livet är fortfarande enkelt men blir mer utbrett i marina miljöer.'
    },
    {
      start: -2800000000, end: -2500000000, title: 'Neoarkeikum', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 72,
      info: '☀️ I neoarkeikum blir fotosyntetiserande mikroorganismer allt viktigare. De lägger grunden för den syresättning som senare förändrar hela planeten.'
    },
    {
      start: -2500000000, end: -1600000000, title: 'Paleoproterozoikum', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 90,
      info: '🌬️ Paleoproterozoikum inleds med att syrehalten i atmosfären stiger kraftigt. Detta förändrar hav, luft och livets utvecklingsmöjligheter i grunden.'
    },
    {
      start: -1600000000, end: -1000000000, title: 'Mesoproterozoikum', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 90,
      info: '🌊 Mesoproterozoikum var en lång period av relativ geologisk stabilitet. Kontinenterna omformas och mer avancerade celltyper blir viktiga i haven.'
    },
    {
      start: -1000000000, end: -538000000, title: 'Neoproterozoikum', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 88,
      info: '❄️ Neoproterozoikum präglas av stora nedisningar och av att de första större flercelliga organismerna uppträder mot slutet av perioden.'
    },
    {
      start: -538000000, end: -252000000, title: 'Paleozoikum', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 72,
      info: '🐚 Paleozoikum inleds med den kambriska explosionen då många djurgrupper utvecklas snabbt. Livet sprider sig senare också upp på land med växter, insekter och tidiga ryggradsdjur.'
    },
    {
      start: -252000000, end: -66000000, title: 'Mesozoikum', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 72,
      info: '🦖 Mesozoikum är dinosauriernas stora tidsålder. Samtidigt utvecklas de första däggdjuren och fåglarna, och periodens slut markeras av en stor massutrotning.'
    },
    {
      start: -66000000, end: 2026, title: 'Kenozoikum', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 72,
      info: '🦣 Kenozoikum är däggdjurens och fåglarnas stora era efter dinosauriernas fall. Klimatet förändras flera gånger, grässlätter breder ut sig och människan uppträder mycket sent.'
    }
  ],
  facts: [
    { year: -3800000000, text: '🌊 Tidiga hav och skorpa finns sannolikt redan under den äldsta delen av Arkeikum.', level: 0 },
    { year: -3500000000, text: '🦠 Tidiga spår av mikrobiellt liv finns från paleoarkeikum.', level: 0 },
    { year: -2700000000, text: '☀️ Fotosyntetiserande mikroorganismer får större betydelse under neoarkeikum.', level: 2 },
    { year: -2400000000, text: '🌬️ Den stora syresättningen inleds under paleoproterozoikum.', level: 1 },
    { year: -1200000000, text: '🧫 Mer komplexa eukaryota organismer blir viktiga i haven under mesoproterozoikum.', level: 0 },
    { year: -720000000, text: '❄️ Kraftiga globala nedisningar sker under neoproterozoikum.', level: 1 },
    { year: -600000000, text: '🪼 De första större flercelliga organismerna uppträder mot slutet av neoproterozoikum.', level: 2 },
    { year: -538000000, text: '🐚 Den kambriska explosionen markerar början av paleozoikum.', level: 0 },
    { year: -470000000, text: '🌿 Växter börjar etablera sig på land under paleozoikum.', level: 2 },
    { year: -230000000, text: '🦖 Dinosaurierna blir dominerande under mesozoikum.', level: 1 },
    { year: -150000000, text: '🐦 De första fåglarna utvecklas under mesozoikum.', level: 2 },
    { year: -66000000, text: '☄️ Dinosaurierna massutrotas genom asteroid.', level: 0 },
    { year: -7000000, text: '🧍 Tidiga människolinjer utvecklas under kenozoikum.', level: 2 },
    { year: -300000, text: '🧠 Homo sapiens uppträder mycket sent i kenozoikum.', level: 1 }
  ]
});
