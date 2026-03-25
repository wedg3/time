window.TimelineRegistry.registerDataset({
  id: 'antikens-grekland',
  label: 'Antikens Grekland',
    category: 'Civilisationer',
  enabledByDefault: false,
  eras: [
    {
      start: -2000, end: -1100, title: 'Mykensk tid', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 74,
      info: '🏺 Under den mykenska tiden växer palatskulturer fram i Grekland med kungadömen, handel och tidig skrift. Perioden knyts ofta till sagor som senare berättas i grekisk myt och epik.'
    },
    {
      start: -1100, end: -800, title: 'Greklands mörka århundraden', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 118,
      info: '🌑 Efter de mykenska palatsens fall minskar handel, skrift och central makt. Samtidigt lever samhällen vidare och lägger så småningom grunden för nya grekiska stadsstater.'
    },
    {
      start: -800, end: -500, title: 'Arkaisk tid', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 70,
      info: '🛶 Under arkaisk tid växer stadsstater som Aten och Sparta fram. Grekerna grundar kolonier, utvecklar konst och politik, och de första dragen i den klassiska grekiska världen tar form.'
    },
    {
      start: -500, end: -323, title: 'Klassisk tid', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 70,
      info: '🏛️ Klassisk tid är höjdpunkten för många av de idéer och institutioner som förknippas med antikens Grekland. Filosofi, dramatik, historia, konst och olika former av styre får stor betydelse.'
    },
    {
      start: -323, end: -31, title: 'Hellenistisk tid', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 82,
      info: '🌍 Efter Alexander den stores erövringar sprids grekiskt språk, kultur och idéer över stora delar av östra Medelhavet och Mellanöstern. Grekisk kultur blandas med andra traditioner i en ny, vidare värld.'
    }
  ],
  facts: [
    { year: -1600, text: '🏺 Mykenska palatskulturer växer fram i Grekland.', level: 1 },
    { year: -1200, text: '🔥 Många mykenska palats förstörs och den äldre ordningen bryts sönder.', level: 1 },
    { year: -776, text: '🏃 De första olympiska spelen brukar traditionellt dateras till denna tid.', level: 1 },
    { year: -750, text: '✍️ Grekerna börjar använda ett alfabet som gör skrift mer spridd.', level: 2 },
    { year: -508, text: '🗳️ Reformarbetet i Aten lägger grunden för den atenska demokratin.', level: 1 },
    { year: -490, text: '🛡️ Grekerna besegrar perserna vid Marathon.', level: 1 },
    { year: -480, text: '⚔️ Slagen vid Thermopyle och Salamis blir avgörande i krigen mot Persien.', level: 1 },
    { year: -447, text: '🏛️ Bygget av Parthenon inleds i Aten.', level: 2 },
    { year: -431, text: '🔥 Peloponnesiska kriget bryter ut mellan Aten och Sparta.', level: 1 },
    { year: -399, text: '⚖️ Sokrates döms till döden i Aten.', level: 2 },
    { year: -336, text: '👑 Alexander den store blir kung av Makedonien.', level: 1 },
    { year: -323, text: '🌍 Alexander dör och den hellenistiska tiden tar form.', level: 1 },
    { year: -280, text: '📚 Alexandria blir ett centrum för lärdom och vetenskap i den hellenistiska världen.', level: 2 },
    { year: -146, text: '🦅 Romarna besegrar Korinth och grekiska områden hamnar under romerskt herravälde.', level: 1 }
  ]
});
