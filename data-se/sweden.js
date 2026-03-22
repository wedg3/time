window.TimelineRegistry.registerDataset({
  id: 'sweden',
  label: 'Svenska epoker',
  enabledByDefault: false,
  eras: [
    {
      start: -115000, end: -13000, title: 'Senaste nedisningen', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 86,
      info: '🧊 Under den senaste delen av istiden låg nästan hela Sverige under inlandsis. När klimatet blev varmare drog sig isen långsamt tillbaka, landet reste sig och de första människorna kunde så småningom följa efter.'
    },
	
	{
  start: -13000, end: -9700, title: 'Avsmältningstiden', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 84,
  info: '🧊 Under avsmältningstiden drog sig inlandsisen tillbaka från stora delar av Sverige. Landskapet förändrades snabbt genom smältvatten, landhöjning och nya sjöar, vattendrag och kuster.'
},
    {
      start: -9700, end: -4000, title: 'Jägarstenålder', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 84,
      info: '🏹 Jägarstenåldern var den tid då människor i Sverige levde av jakt, fiske och insamling. Små grupper rörde sig mellan olika platser, ofta nära kuster, sjöar och älvar.'
    },
    {
      start: -4000, end: -1700, title: 'Bondestenålder', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 86,
      info: '🌾 Under bondestenåldern började jordbruk och boskapsskötsel få stor betydelse, särskilt i södra Sverige. Samtidigt fortsatte jakt, fiske och insamling att vara viktiga i många områden.'
    },
    {
      start: -1700, end: -500, title: 'Bronsålder', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 72,
      info: '🥉 Bronsåldern präglades av långväga kontakter, metallföremål, högar, hällristningar och tydliga sociala skillnader. Eliter visade makt genom gravar, smycken och vapen.'
    },
    {
      start: -500, end: 550, title: 'Järnålder', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 70,
      info: '🗡️ Under järnåldern blev järn viktigare i vardag och krig. Samhället blev mer stratifierat, bygder växte fram och kontakter med Romarriket och andra områden påverkade utvecklingen.'
    },
    {
      start: 550, end: 793, title: 'Vendeltid', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 68,
      info: '⛵ Vendeltiden var en rik och dynamisk period före vikingatiden. Båtgravar, hövdingamiljöer och vida kontakter visar att samhällen i det som senare blev Sverige redan var väl organiserade.'
    },
    {
      start: 793, end: 1066, title: 'Vikingatid', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 66,
      info: '🛶 Vikingatiden kännetecknas av sjöfart, handel, plundring och kontakter över stora delar av Europa. Samhället var ännu inte ett enat Sverige, men många strukturer som senare blev viktiga började ta form.'
    },
    {
      start: 1050, end: 1520, title: 'Svensk medeltid', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 70,
      info: '⛪ Under den svenska medeltiden stärktes kungamakt, kyrka och lagar steg för steg. Riket knöts tätare till det kristna Europa samtidigt som maktkamper och unioner präglade perioden.'
    },
    {
      start: 1520, end: 1611, title: 'Vasatiden', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 66,
      info: '👑 Vasatiden inleddes när Gustav Vasa tog makten och den svenska staten centraliserades. Reformationen förändrade kyrkan och kungamakten blev starkare.'
    },
    {
      start: 1611, end: 1718, title: 'Stormaktstiden', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 70,
      info: '⚔️ Stormaktstiden var en period då Sverige blev en militär och politisk stormakt runt Östersjön. Krig, expansion och stark kungamakt präglade samhället.'
    },
    {
      start: 1718, end: 1772, title: 'Frihetstiden', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 66,
      info: '📜 Efter Karl XII:s död minskade kungens makt och riksdagen fick större betydelse. Frihetstiden präglades av partipolitik, reformer och ett livligare offentligt samtal.'
    },
    {
      start: 1772, end: 1809, title: 'Gustavianska tiden', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 70,
      info: '🎭 Den gustavianska tiden innebar en förstärkt kungamakt under Gustav III och ett starkt kulturliv. Perioden slutade i kris, statskupp och förlusten av Finland.'
    },
    {
      start: 1814, end: 1905, title: 'Unionstiden', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 66,
      info: '🤝 Unionstiden syftar på personalunionen mellan Sverige och Norge. Samtidigt industrialiserades Sverige och stora sociala och politiska förändringar tog fart.'
    },
    {
      start: 1932, end: 1976, title: 'Folkhemstiden', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 66,
      info: '🏡 Folkhemstiden förknippas med välfärdsstatens utbyggnad, stark ekonomisk tillväxt och idén om social trygghet för alla. Staten fick en större roll i människors vardag.'
    },
    {
      start: 1976, end: 2026, title: 'Det moderna Sverige', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 80,
      info: '💻 Det moderna Sverige präglas av globalisering, tjänstesamhälle, digitalisering och politisk omvandling. Landet har samtidigt blivit mer internationellt sammanlänkat och mer socialt komplext.'
    }
  ],
  facts: [
    { year: -10000, text: '🧊 Inlandsisen har dragit sig tillbaka från stora delar av Sverige, men landet formas fortfarande starkt av isens spår.', level: 0 },
    { year: -9500, text: '👣 De första människorna kommer till området som senare blir Sverige efter att isen dragit sig undan.', level: 0 },
    { year: -9000, text: '🏹 Människor lever som jägare, fiskare och samlare i små grupper.', level: 1 },
    { year: -4000, text: '🌾 Jordbruk och boskapsskötsel börjar få större betydelse i södra Sverige.', level: 0 },
    { year: -1800, text: '🥉 Bronsföremål och långväga handel blir viktiga i Skandinavien.', level: 1 },
    { year: -1000, text: '🪨 Hällristningar vittnar om religion, makt och vardagsliv under bronsåldern.', level: 2 },
    { year: -500, text: '🗡️ Järnåldern inleds och järn får stor betydelse i jordbruk, hantverk och krig.', level: 0 },
    { year: 200, text: '🪙 Kontakter med Romarriket påverkar samhälle och statusföremål i Norden.', level: 1 },
    { year: 550, text: '⛵ Vendeltiden inleds med rika hövdingamiljöer och praktfulla båtgravar.', level: 1 },
    { year: 793, text: '🛶 Vikingatiden brukar räknas börja omkring tiden för räden mot Lindisfarne.', level: 0 },
    { year: 1000, text: '✝️ Kristendomen får allt starkare fäste i de svenska områdena.', level: 1 },
    { year: 1164, text: '⛪ Uppsala blir ärkebiskopssäte, vilket stärker kyrkans ställning i Sverige.', level: 1 },
    { year: 1350, text: '⚖️ Magnus Erikssons landslag blir viktig för rikets rättsordning.', level: 2 },
    { year: 1397, text: '👑 Kalmarunionen förenar de nordiska rikena under en gemensam monark.', level: 1 },
    { year: 1523, text: '👑 Gustav Vasa blir kung och Sverige lämnar Kalmarunionen.', level: 0 },
    { year: 1630, text: '⚔️ Sverige går in i trettioåriga kriget.', level: 1 },
    { year: 1632, text: '🪖 Gustav II Adolf dör vid Lützen.', level: 2 },
    { year: 1718, text: '💀 Karl XII dör och stormaktstiden går mot sitt slut.', level: 1 },
    { year: 1809, text: '📜 Sverige får en ny regeringsform efter statskuppen.', level: 1 },
    { year: 1905, text: '🤝 Unionen med Norge upplöses.', level: 1 },
    { year: 1932, text: '🏡 Socialdemokraterna inleder en lång period av regeringsmakt.', level: 1 },
    { year: 1945, text: '🔨 Efterkrigstiden formar välfärdsstatens utbyggnad.', level: 2 },
    { year: 1995, text: '🇪🇺 Sverige går med i EU.', level: 1 }
  ]
});