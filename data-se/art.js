window.TimelineRegistry.registerDataset({
  id: 'art-design',
  label: 'Konst & Design',
  enabledByDefault: false,
  eras: [
    {
      start: -3000, end: 500, title: 'Antiken', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 66,
      info: '🏛️ Antikens konst och arkitektur präglades av tempel, kolonner, skulpturer och ideal om proportion, balans och harmoni. Möbler var ofta relativt enkla men kunde också visa status och hantverksskicklighet.'
    },
    {
      start: 500, end: 1150, title: 'Romansk stil', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 76,
      info: '⛪ Den romanska stilen kännetecknas av tjocka murar, rundbågar och tunga kyrkobyggnader. Konsten var ofta religiös och möblerna robusta, massiva och funktionella.'
    },
    {
      start: 1150, end: 1500, title: 'Gotik', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 60,
      info: '🕍 Gotiken strävade uppåt med spetsbågar, höga fönster och ljusare kyrkorum. Konsten blev mer detaljerad och uttrycksfull, och möbler kunde få rik dekor och snidade ornament.'
    },
    {
      start: 1400, end: 1600, title: 'Renässans', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 74,
      info: '🎨 Renässansen återupptäckte antikens ideal och betonade perspektiv, realism och människan i centrum. Inom möbler och arkitektur syns symmetri, tydliga proportioner och klassiska former.'
    },
    {
      start: 1600, end: 1750, title: 'Barock', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 60,
      info: '👑 Barocken var dramatisk, pampig och rik på rörelse, kontraster och dekoration. Arkitektur, konst och möbler användes ofta för att visa makt, rikedom och känslomässig styrka.'
    },
    {
      start: 1720, end: 1780, title: 'Rokoko', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 60,
      info: '🌸 Rokokon var lättare, lekfullare och mer elegant än barocken. Mjukare former, asymmetri, ljusa färger och dekorativa detaljer blev vanliga i både interiörer och möbler.'
    },
    {
      start: 1750, end: 1830, title: 'Nyklassicism', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 82,
      info: '🏺 Nyklassicismen sökte tillbaka till antikens rena linjer och ordnade former. Arkitektur, konst och möbler blev stramare, mer symmetriska och mindre överlastade.'
    },
    {
      start: 1800, end: 1900, title: '1800-talets stilar', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 92,
      info: '🪑 Under 1800-talet blandades många historiska stilar, som nygotik och nyrenässans. Industrialismen påverkade både byggande och möbeltillverkning, samtidigt som gamla ideal återanvändes.'
    },
    {
      start: 1890, end: 1915, title: 'Jugend / Art Nouveau', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 104,
      info: '🌿 Jugendstilen kännetecknas av organiska linjer, naturformer och dekor som flyter över ytor och föremål. Konst, möbler och arkitektur knöts ofta samman till en helhet.'
    },
    {
      start: 1910, end: 1930, title: 'Art Deco', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 66,
      info: '✨ Art Deco kombinerade elegans med modernitet genom geometriska former, starka kontraster och exklusiva material. Stilen syns i byggnader, interiörer, möbler och grafisk design.'
    },
    {
      start: 1920, end: 1970, title: 'Modernism / Funktionalism', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 118,
      info: '🏢 Modernismen och funktionalismen betonade enkelhet, funktion och nya material. Ornament tonades ned, och arkitektur och möbler skulle vara rationella, ljusa och anpassade till det moderna livet.'
    },
    {
      start: 1950, end: 1975, title: 'Skandinavisk design', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 102,
      info: '🪵 Skandinavisk design lyfte fram ljus, enkelhet, naturmaterial och funktion. Möbler och interiörer skulle vara vackra men också vardagliga, användbara och tillgängliga.'
    },
    {
      start: 1970, end: 2000, title: 'Postmodernism', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 84,
      info: '🌀 Postmodernismen reagerade mot modernismens stränghet och blandade gärna stilar, färger och historiska referenser. Lekfullhet, ironi och uttryck blev viktigare igen.'
    },
    {
      start: 2000, end: 2026, title: 'Samtida design', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 86,
      info: '💡 Samtida konst, design och arkitektur präglas av hållbarhet, digital teknik, globala influenser och blandade uttryck. Återbruk, minimalism och experiment lever ofta sida vid sida.'
    }
  ],
  facts: [
    { year: -447, text: '🏛️ Parthenon i Aten blir ett klassiskt exempel på antik arkitektur.', level: 0 },
    { year: 1140, text: '🕍 Tidiga gotiska kyrkor börjar byggas i Frankrike.', level: 1 },
    { year: 1434, text: '🎨 Renässansens perspektivmåleri får stort genomslag i Italien.', level: 0 },
    { year: 1504, text: '🗿 Michelangelos David blir ett berömt renässansverk.', level: 2 },
    { year: 1661, text: '👑 Versailles börjar utvecklas till ett huvudverk inom barockens arkitektur och interiör.', level: 1 },
    { year: 1760, text: '🏺 Nyklassicismen växer sig stark i Europa.', level: 1 },
    { year: 1851, text: '🏗️ Crystal Palace visar nya möjligheter med järn och glas i arkitekturen.', level: 1 },
    { year: 1895, text: '🌿 Jugendstilen får starkt genomslag i konst, arkitektur och formgivning.', level: 1 },
    { year: 1919, text: '📐 Bauhaus grundas i Tyskland och blir mycket viktigt för modern design och arkitektur.', level: 0 },
    { year: 1925, text: '✨ Art Deco får internationellt genomslag genom utställningen i Paris.', level: 1 },
    { year: 1930, text: '🏠 Stockholmsutställningen gör funktionalismen mycket viktig i Sverige.', level: 0 },
    { year: 1956, text: '🪑 Skandinavisk design får stort internationellt rykte genom enkelhet och funktion.', level: 1 },
    { year: 1978, text: '🌀 Postmodern design börjar tydligt utmana modernismens stränga ideal.', level: 1 },
    { year: 2000, text: '♻️ Hållbarhet och återbruk blir allt viktigare inom samtida design och arkitektur.', level: 1 }
  ]
});
