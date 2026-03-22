window.TimelineRegistry.registerDataset({
  id: 'sub',
  label: 'Under-epoker (västfokus)',
  enabledByDefault: false,
  eras: [
    {
      start: -10000, end: -4000, title: 'Neolitikum', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 72,
      info: '🌾 Neolitikum är den senare delen av förhistorien då jordbruk, domesticering av djur och bofast liv sprids i många regioner. Byar växer och samhällen blir gradvis mer komplexa.'
    },
    {
      start: -4000, end: -1200, title: 'Bronsåldern', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 72,
      info: '🥉 Bronsåldern präglas av tidiga städer, stater, skriftsystem, handelsnätverk och metallarbetande samhällen i delar av Afrika, Asien och Europa. I flera områden blir kungamakt, krigföring och monumentala byggnader viktigare.'
    },
    {
      start: -1200, end: -500, title: 'Järnåldern', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 72,
      info: '🗡️ Järnåldern för med sig en bredare användning av järnverktyg och järnvapen, tillsammans med nya kungadömen, imperier och sociala förändringar. Det var en tid av både sammanbrott och förnyelse före den klassiska världen.'
    },
    {
      start: -500, end: 500, title: 'Klassisk antik', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 72,
      info: '🏛️ Den klassiska antiken kretsar kring det antika Grekland och Rom, men var samtidigt knuten till större medelhavs- och eurasiska sammanhang. Den kom att påverka politik, filosofi, konst, lag och utbildning under mycket lång tid.'
    },
    {
      start: 500, end: 1000, title: 'Tidig medeltid', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 72,
      info: '⛪ Den tidiga medeltiden präglas av att de romerska strukturerna i väst bryts upp och att nya riken växer fram. Kristendomen sprids vidare och regionala politiska system börjar ta form.'
    },
    {
      start: 1000, end: 1300, title: 'Högmedeltid', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 72,
      info: '🏰 Högmedeltiden är en period av befolkningstillväxt, ökande handel, starkare kungamakter och stort kyrkligt inflytande. Städer, universitet och stora byggnadsprojekt blomstrar.'
    },
    {
      start: 1300, end: 1500, title: 'Senmedeltid', order: 0, revealZoom: 0, rowHeight: 26, labelMinWidth: 72,
      info: '☠️ Senmedeltiden för med sig både kris och förändring genom svält, pest, krig och social oro. Samtidigt lägger perioden grunden för renässansen och den tidigmoderna världen.'
    },
    {
      start: 1500, end: 1700, title: 'Upptäcktsresornas tid', order: 0, revealZoom: 0, rowHeight: 26,
      info: '⛵ Europeiska sjöresor knyter samman kontinenter tätare än tidigare genom handel, erövring, migration och sjukdomar. Perioden lägger grunden för koloniala imperier och globalt utbyte.'
    },
    {
      start: 1700, end: 1800, title: 'Upplysningen', order: 0, revealZoom: 0, rowHeight: 26,
      info: '💡 Upplysningen betonar förnuft, kritik, vetenskap och diskussion om rättigheter och styrelseskick. Dess idéer påverkar revolutioner, reformer och modern politisk teori.'
    },
    {
      start: 1760, end: 1914, title: 'Industriella revolutionen', order: 0, revealZoom: 0, rowHeight: 26,
      info: '🏭 Den industriella revolutionen omvandlar ekonomier genom maskiner, fabriker och nya energikällor. Den förändrar hur människor arbetar, var de bor och hur samhällen organiseras.'
    },
    {
      start: 1914, end: 1918, title: 'Första världskriget', order: 0, revealZoom: 0, rowHeight: 26,
      info: '💣 Första världskriget är ett storskaligt industriellt krig med imperier, allianser och massmobilisering. Förstörelsen påverkar politik, gränser och minnet av 1900-talet djupt.'
    },
    {
      start: 1918, end: 1939, title: 'Mellankrigstiden', order: 0, revealZoom: 0, rowHeight: 26,
      info: '⚖️ Mellankrigsåren präglas av instabil fred, ekonomiska svårigheter och hårda ideologiska konflikter. Nya stater uppstår samtidigt som demokratin försvagas på många håll.'
    },
    {
      start: 1939, end: 1945, title: 'Andra världskriget', order: 0, revealZoom: 0, rowHeight: 26,
      info: '🔥 Andra världskriget är en global konflikt präglad av totalt krig, ockupation, folkmord och enormt civilt lidande. Det slutar med Nazitysklands och Japans nederlag och förändrar världsordningen.'
    },
    {
      start: 1945, end: 1950, title: 'Den tidiga efterkrigsordningen', order: 0, revealZoom: 0, rowHeight: 26,
      info: '🕊️ De tidiga efterkrigsåren handlar om återuppbyggnad, nya institutioner och början på kalla krigets rivalitet. Fredsplaner samexisterar med växande spänningar mellan öst och väst.'
    },
	
	    {
      start: 1945, end: 1950, title: 'Den tidiga efterkrigsordningen', order: 0, revealZoom: 0, rowHeight: 26,
      info: '🕊️ De tidiga efterkrigsåren handlar om återuppbyggnad, nya internationella institutioner och början på motsättningen mellan öst och väst. Fredshopp blandas med växande politiska spänningar.'
    },
    {
      start: 1950, end: 1973, title: 'Kalla krigets höjdpunkt', order: 0, revealZoom: 0, rowHeight: 26,
      info: '☢️ Rivaliteten mellan USA och Sovjetunionen präglar världen genom kärnvapenhot, militärallianser, rymdkapplöpning och konflikter via andra länder. Samtidigt växer tron på teknik, tillväxt och modernisering.'
    },
    {
      start: 1973, end: 1989, title: 'Kris och senkallt krig', order: 0, revealZoom: 0, rowHeight: 26,
      info: '📉 Oljekriser, ekonomiska problem och fortsatt stormaktsrivalitet präglar perioden. Samtidigt utmanas gamla system av protester, reformkrav och växande missnöje i flera delar av världen.'
    },
    {
      start: 1989, end: 1991, title: 'Östblockets fall', order: 0, revealZoom: 0, rowHeight: 26,
      info: '🧱 Under några få år faller kommunistregimerna i Östeuropa, Berlinmuren rivs och Sovjetunionen går mot upplösning. Det markerar slutet på kalla kriget och början på en ny världsordning.'
    },
    {
      start: 1991, end: 2001, title: 'Globaliseringens genombrott', order: 0, revealZoom: 0, rowHeight: 26,
      info: '🌐 1990-talet präglas av ökad global handel, snabb teknisk utveckling och stark tro på internationell integration. Internet, marknadsekonomi och kulturell sammankoppling förändrar vardagsliv och politik.'
    }
	
  ],
  facts: [
    { year: -9500, text: '🌾 Jordbruk börjar utvecklas i flera delar av världen.', level: 0 },
    { year: -3500, text: '🏙️ De första städerna växer fram i Mesopotamien och andra tidiga kärnområden.', level: 0 },
    { year: -3200, text: '✍️ Skriften uppstår i Mesopotamien.', level: 0 },
    { year: -2600, text: '🪨 Stora monument byggs i Egypten under de tidiga faraonerna.', level: 1 },
    { year: -1750, text: '⚖️ Hammurabis lagar visar hur tidiga stater försöker styra med nedskrivna regler.', level: 1 },
    { year: -1200, text: '🔥 Sammanbrott drabbar flera bronsåldersriken kring östra Medelhavet.', level: 0 },
    { year: -800, text: '🏛️ Grekiska stadsstater växer fram och kolonisation sprider kultur runt Medelhavet.', level: 1 },
    { year: -753, text: '🐺 Rom grundas enligt traditionen.', level: 2 },
    { year: -550, text: '👑 Perserriket växer fram som ett av den gamla världens största imperier.', level: 0 },
    { year: -500, text: '🧠 Filosofi, politik och konst utvecklas starkt i den grekiska världen.', level: 1 },
    { year: -221, text: '🐉 Kina enas under Qindynastin.', level: 0 },
    { year: -27, text: '🦅 Romarriket tar form under Augustus.', level: 0 },
    { year: 220, text: '🧭 Handeln längs sidenvägarna binder samman stora delar av Eurasien.', level: 1 },
    { year: 476, text: '🏚️ Västrom brukar sägas falla, även om många romerska strukturer lever vidare.', level: 0 },
    { year: 622, text: '☪️ Islams historia tar sin början med hijra.', level: 0 },
    { year: 732, text: '⚔️ Slaget vid Poitiers blir en symboliskt viktig händelse i Europas tidiga medeltid.', level: 2 },
    { year: 800, text: '👑 Karl den store kröns till kejsare.', level: 1 },
    { year: 900, text: '⛵ Vikingatidens resor binder samman Nordeuropa med stora delar av Europa och vidare österut.', level: 1 },
    { year: 1066, text: '🛡️ Normandernas erövring förändrar Englands historia.', level: 0 },
    { year: 1096, text: '✝️ Korstågen inleds.', level: 1 },
    { year: 1206, text: '🐎 Mongolriket börjar växa fram under Djingis khan.', level: 0 },
    { year: 1271, text: '🧳 Marco Polos resor blir senare en symbol för kontakterna mellan Europa och Asien.', level: 2 },
    { year: 1347, text: '☠️ Digerdöden sprids i Europa och orsakar enorm dödlighet.', level: 0 },

    { year: 1453, text: '🕌 Konstantinopel faller för osmanerna.', level: 0 },
    { year: 1492, text: '🌎 Columbus når Amerika på en resa finansierad av Spanien.', level: 1 },
    { year: 1517, text: '📜 Reformationen inleds och splittrar Västeuropas kristenhet.', level: 0 },
    { year: 1526, text: '🔫 Stormogulriket etableras i Indien.', level: 1 },
    { year: 1600, text: '🚢 Europeiska handelskompanier knyter samman världsdelar i växande globala nätverk.', level: 1 },
    { year: 1644, text: '🐉 Qingdynastin tar makten i Kina.', level: 1 },
    { year: 1688, text: '👑 Den ärorika revolutionen i England stärker parlamentets ställning.', level: 1 },
    { year: 1776, text: '🗽 USA förklarar sig självständigt.', level: 0 },
    { year: 1789, text: '🇫🇷 Franska revolutionen bryter ut och förändrar politiken i Europa och världen.', level: 0 },
    { year: 1804, text: '👑 Napoleon kröner sig själv till kejsare.', level: 1 },
    { year: 1830, text: '🚂 Industrialiseringen förändrar transporter, arbete och städer i allt snabbare takt.', level: 0 },
    { year: 1861, text: '🗺️ Italiens enande visar nationalismens växande kraft i Europa.', level: 1 },
    { year: 1868, text: '🌸 Meijirestaurationen inleder Japans snabba modernisering.', level: 0 },
    { year: 1884, text: '🗺️ Europeiska makter delar upp stora delar av Afrika under imperialismens höjdpunkt.', level: 0 },
    { year: 1914, text: '💣 Första världskriget börjar.', level: 1 },
    { year: 1916, text: '🪖 Verdun och Somme visar det industrialiserade massdödandet.', level: 2 },
    { year: 1917, text: '⚒️ Revolution i Ryssland störtar den gamla ordningen.', level: 0 },
    { year: 1918, text: '🕊️ Första världskriget slutar; gamla imperier faller samman.', level: 1 },
    { year: 1919, text: '✒️ Versaillesfreden ritar om Europas karta och lämnar bitterhet efter sig.', level: 2 },
    { year: 1920, text: '🌍 Nationernas förbund bildas.', level: 2 },
    { year: 1922, text: '🟥 Sovjetunionen grundas.', level: 1 },
    { year: 1929, text: '📉 Den stora depressionen börjar och skakar världsekonomin.', level: 0 },
    { year: 1931, text: '🪖 Japan invaderar Manchuriet och visar svagheten i kollektiv säkerhet.', level: 2 },
    { year: 1933, text: '🚩 Hitler tar makten i Tyskland.', level: 0 },
    { year: 1939, text: '💥 Tyskland invaderar Polen; andra världskriget börjar.', level: 1 },
    { year: 1940, text: '🪖 Stora delar av Västeuropa hamnar under nazistisk kontroll.', level: 2 },
    { year: 1941, text: '🌍 Operation Barbarossa och Pearl Harbor gör kriget ännu mer globalt.', level: 2 },
    { year: 1944, text: '🚢 D-dagen öppnar en stor västfront i Europa.', level: 2 },
    { year: 1945, text: '🕊️ Förenta nationerna grundas.', level: 1 },
    { year: 1947, text: '🇮🇳 Indien blir självständigt och avkoloniseringen tar fart.', level: 1 },
    { year: 1950, text: '☢️ Kalla kriget präglar allt mer världspolitiken.', level: 1 },
    { year: 1957, text: '🚀 Rymdkapplöpningen tar fart med Sputnik.', level: 1 },
    { year: 1960, text: '🌍 Många afrikanska länder blir självständiga under avkoloniseringen.', level: 1 },
    { year: 1969, text: '🌕 Människor landar på månen.', level: 1 },
    { year: 1973, text: '🛢️ Oljekrisen visar hur sårbar världsekonomin är.', level: 1 },
    { year: 1989, text: '🧱 Berlinmuren faller.', level: 0 },
    { year: 1991, text: '🟥 Sovjetunionen kollapsar.', level: 1 },
    { year: 1994, text: '🌐 Internet börjar få stort genomslag i vardagsliv och ekonomi.', level: 1 },
    { year: 2001, text: '✈️ Terrorattackerna den 11 september förändrar världspolitiken.', level: 1 },
    { year: 2008, text: '🏦 En global finanskris sprider sig över världen.', level: 1 },
    { year: 2020, text: '🦠 Covid-19-pandemin förändrar vardagsliv, ekonomi och politik världen över.', level: 1 }
  ]
});