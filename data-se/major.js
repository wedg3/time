window.TimelineRegistry.registerDataset({
  id: 'major',
  label: 'Stora epoker (västfokus)',
  enabledByDefault: false,
  eras: [
    {
      start: -4600000000, end: -3000000, title: 'Geologisk tid', order: 0, revealZoom: 0,
      info: '🌍 Tiden före de förhistoriska människornas framträdande. Aktivera Geologiska eror för mer detaljrik information.'
    },
    {
      start: -3000000, end: -3000, title: 'Förhistoria', order: 0, revealZoom: 0,
      info: '🪵 Förhistorien omfattar människans mycket långa tid före skriftspråkets uppkomst. Under större delen levde människor som jägare och samlare, och under de senare delarna började jordbruk, byar och mer komplexa samhällen växa fram.'
    },
    {
      start: -3000, end: 500, title: 'Antiken', order: 0, revealZoom: 0,
      info: '🏛️ Antiken såg framväxten av städer, stater, imperier och skriftspråk i delar av Afrika, Asien, Europa och Amerika. Här ingår stora civilisationer som Egypten, Mesopotamien, Grekland, Rom, Persien, Indien och Handynastins Kina.'
    },
    {
      start: 500, end: 1500, title: 'Medeltiden', order: 0, revealZoom: 0,
      info: '⛪ Medeltiden följde efter Västroms fall och präglades av kungadömen, kristendom, islam och feodala strukturer. Det var också en tid av handel, lärande, statsbildning och kulturell förändring, inte bara av nedgång.'
    },
    {
      start: 1500, end: 1800, title: 'Renässansen och tidigmodern tid', order: 0, revealZoom: 0,
      info: '📚 Denna epok förde med sig ett förnyat intresse för antikens lärdomar, global upptäcktsfärd, religiösa omvälvningar och starkare stater. Tryckkonst, vetenskap och växande handelsnätverk förändrade människors syn på världen.'
    },
    {
      start: 1800, end: 1914, title: 'Industrialismen', order: 0, revealZoom: 0,
      info: '🏭 Industrialiseringen förändrade produktion, transporter och vardagsliv genom fabriker, ångkraft och växande städer. Den förde också med sig klasskonflikter, imperialistisk expansion och nya politiska rörelser.'
    },
    {
      start: 1914, end: 1950, title: 'Världskrigens tid', order: 0, revealZoom: 0,
      info: '💣 Denna period präglades av två förödande världskrig, revolutioner, ekonomisk kris, folkmord och gamla imperiers sammanbrott. Den ritade om gränser, ideologier och den globala maktbalansen.'
    },
    {
      start: 1950, end: 1991, title: 'Kalla krigets era', order: 0, revealZoom: 0,
      info: '☢️ Kalla krigets era präglades av spänningen mellan USA och Sovjetunionen, även om de sällan stred direkt mot varandra. Avkolonisering, proxykrig, kärnvapenrädsla och snabb teknisk utveckling formade perioden.'
    },
    {
      start: 1991, end: 2026, title: 'Samtiden', order: 0, revealZoom: 0,
      info: '💻 Samtiden börjar efter kalla kriget och präglas av globalisering, digital teknik och nya geopolitiska spänningar. Den rymmer både växande internationella kontakter och förnyade konflikter, kriser och splittring.'
    }
  ],
  facts: [
    { year: -13800000000, text: '💥 Big Bang. Så vitt vi vet är detta början på rum och tid. Så vitt vi känner till finns ingenting före detta, inte ens tiden själv.', level: 0 },
    { year: -4540000000, text: '🌍 Jorden bildas när stoft, sten och annat material klumpar ihop sig i det tidiga solsystemet.', level: 0 },
    { year: -2800000, text: '🦴 De äldsta kända fossilen av släktet Homo uppträder i Afrika.', level: 0 },

    { year: -9500, text: '🌾 Jordbruk börjar utvecklas i vissa regioner.', level: 0 },
    { year: -3200, text: '✍️ Skrift uppstår i Mesopotamien.', level: 0 },
	{ year: 1450, text: '🖨️ Boktryckarkonsten hjälper idéer att spridas mycket snabbare.', level: 0 },
    { year: 1760, text: '🏭 Industrialiseringen förändrar arbete och städer.', level: 1 },
    { year: 1917, text: '⚒️ De ryska revolutionerna störtar den gamla ordningen.', level: 1 },
    { year: 1929, text: '📉 Den stora depressionen börjar.', level: 1 },
    { year: 1933, text: '🪖 Hitler tar makten i Tyskland.', level: 1 },
    { year: 1945, text: '☢️ Tyskland kapitulerar; atombomberna avslutar kriget mot Japan.', level: 1 },
    { year: 1947, text: '🇮🇳 Indien blir självständigt; kalla krigets block börjar hårdna.', level: 1 },
    { year: 1969, text: '🌕 Människor landar på månen.', level: 1 },
    { year: 1989, text: '🧱 Berlinmuren faller.', level: 1 },
    { year: 1991, text: '🟥 Sovjetunionen kollapsar.', level: 1 },
    { year: 2020, text: '🦠 Covid-19-pandemin förändrar vardagslivet världen över.', level: 2 }
  ]
});