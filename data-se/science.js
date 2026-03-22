window.TimelineRegistry.registerDataset({
  id: 'science',
  label: 'Vetenskap',
  enabledByDefault: false,
eras: [
  {
    start: -10000, end: -3500, title: 'Jordbruksrevolutionen', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 84,
    info: '🌾 Jordbruksrevolutionen förändrar människans liv i grunden när odling, djurhållning och bofast liv blir vanligare. Det skapar överskott, större samhällen och nya förutsättningar för teknik och organiserad kunskap.'
  },
  {
    start: -3500, end: -500, title: 'Skriftens och de första vetandena', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 90,
    info: '✍️ Med skrift, matematik, kalendrar och tidiga observationer av naturen växer de första mer systematiska kunskaperna fram. Präster, skrivare och lärda börjar samla, bevara och utveckla vetande.'
  },
  {
    start: -600, end: 500, title: 'Antikens naturfilosofi', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 88,
    info: '🏛️ I den antika världen formuleras viktiga idéer om materia, kosmos, matematik, logik och medicin. Kunskap söks inte bara genom tradition utan också genom resonemang, observation och diskussion.'
  },
  {
    start: 500, end: 1450, title: 'Lärdomens bevarande och utveckling', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 96,
    info: '📚 Under medeltiden bevaras och utvecklas kunskap i kloster, universitet och lärda miljöer i Europa, Mellanöstern och Asien. Matematik, astronomi, medicin och teknik förs vidare och byggs på.'
  },
  {
    start: 1450, end: 1600, title: 'Tryckpressens och upptäckternas tid', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 98,
    info: '🖨️ Tryckpressen gör kunskap lättare att sprida och jämföra. Samtidigt förändrar resor, kartor och nya möten med världen människors bild av naturen, jorden och universum.'
  },
  {
    start: 1540, end: 1700, title: 'Den vetenskapliga revolutionen', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 96,
    info: '🔭 Under den vetenskapliga revolutionen växer ett nytt sätt att förstå världen fram genom experiment, mätning och matematiska modeller. Gamla föreställningar utmanas inom fysik, astronomi och naturvetenskap.'
  },
  {
    start: 1700, end: 1830, title: 'Systematik och upplysningens vetenskap', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 106,
    info: '💡 Vetenskapen blir mer organiserad genom akademier, klassifikationer och internationellt kunskapsutbyte. Naturen kartläggs, sorteras och beskrivs på nya sätt, samtidigt som förnuft och kritik betonas.'
  },
  {
    start: 1760, end: 1914, title: 'Industrins och ingenjörernas århundrade', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 108,
    info: '⚙️ Teknik, maskiner och ingenjörskonst omformar samhället genom fabriker, järnvägar, ångkraft och senare elektricitet. Vetenskap och teknik knyts allt tätare till produktion, transport och vardagsliv.'
  },
  {
    start: 1850, end: 1950, title: 'Det moderna genombrottet i vetenskapen', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 112,
    info: '🧪 Under denna period utvecklas modern kemi, bakteriologi, evolutionsteori, genetik och ny fysik. Vetenskapen får enorm betydelse för medicin, industri, jordbruk och förståelsen av livet och materien.'
  },
  {
    start: 1900, end: 1945, title: 'Den nya fysikens tid', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 88,
    info: '⚛️ Relativitetsteori, kvantfysik och atomforskning förändrar synen på rum, tid och materia. Vetenskapen blir både djupare och mer abstrakt, men också allt mer kopplad till stat och militär makt.'
  },
  {
    start: 1945, end: 1991, title: 'Rymdåldern och kärnåldern', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 94,
    info: '🚀 Efter andra världskriget präglas vetenskapen av rymdkapplöpning, kärnteknik, elektronik och stora forskningsprogram. Vetenskap blir en central del av geopolitik, prestige och framtidstro.'
  },
  {
    start: 1970, end: 2005, title: 'Datoråldern', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 74,
    info: '💻 Datorer går från stora specialmaskiner till något som påverkar nästan hela samhället. Informationshantering, kommunikation, forskning och arbete förändras snabbt när digital teknik sprids.'
  },
  {
    start: 1990, end: 2020, title: 'Genetikens och internetets epok', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 104,
    info: '🧬 Genforskning, internet och global datakommunikation öppnar nya möjligheter inom medicin, forskning och vardagsliv. Samtidigt växer frågor om integritet, makt och teknikens konsekvenser.'
  },
  {
    start: 2020, end: 2100, title: 'AI och den datadrivna vetenskapens tid', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 110,
    info: '🤖 Artificiell intelligens, stora datamängder och automatiserad analys börjar förändra hur forskning bedrivs och hur beslut fattas. Perioden präglas både av tekniska genombrott och av nya etiska frågor.'
    }
  ],
  facts: [
    { year: -447, text: '🏛️ Parthenon i Aten blir ett klassiskt exempel på antik arkitektur.', level: 0 },
    { year: 1140, text: '🕍 Tidiga gotiska kyrkor börjar byggas i Frankrike.', level: 1 },
    { year: 1434, text: '🎨 Renässansens perspektivmåleri får stort genomslag i Italien.', level: 1 },
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