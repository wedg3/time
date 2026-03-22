window.TimelineRegistry.registerDataset({
  id: 'literature',
  label: 'Litterära epoker',
  enabledByDefault: false,
  eras: [
    {
      start: -700, end: 500, title: 'Antik litteratur', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 70,
      info: '🏛️ Antik litteratur omfattar episk poesi, dramatik, historieskrivning och filosofi från den antika medelhavsvärlden. Många senare litterära former och ideal har hämtat inspiration från dessa verk.'
    },
    {
      start: 500, end: 1500, title: 'Medeltida litteratur', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 70,
      info: '⛪ Medeltida litteratur rymmer religiösa texter, sagor, riddarromaner, krönikor och muntliga traditioner. Den speglar en värld präglad av tro, hierarkier, resor och heroiska ideal.'
    },
    {
      start: 1500, end: 1660, title: 'Renässanslitteratur', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 70,
      info: '🎭 Renässanslitteraturen påverkades av antika förebilder, humanism och den växande tryckkulturen. Författare utforskade språk, identitet, politik och mänskliga erfarenheter på nya sätt.'
    },
    {
      start: 1660, end: 1800, title: 'Upplysningens litteratur', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 70,
      info: '💡 Upplysningens litteratur betonade ofta förnuft, satir, kritik och diskussion om samhället. Den växte fram parallellt med vetenskapligt tänkande och nya offentliga samtal.'
    },
    {
      start: 1790, end: 1850, title: 'Romantiken', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 70,
      info: '🌙 Romantiken lyfte fram känsla, fantasi, natur och individen. Den var delvis en reaktion mot sträng rationalism och hyllade det subjektiva och innerliga.'
    },
    {
      start: 1830, end: 1900, title: 'Realism / naturalism', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 72,
      info: '📖 Realismen och naturalismen fokuserade på vardagsliv, samhälle och de krafter som formar människors beteende. Författare försökte ofta skildra världen med skarpare social iakttagelse.'
    },
    {
      start: 1890, end: 1945, title: 'Modernismen', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 70,
      info: '🌀 Modernismen bröt med många äldre former genom experiment, fragmentering och nya berättartekniker. Den speglar en värld skakad av stadsliv, krig och snabb förändring.'
    },
    {
      start: 1945, end: 2000, title: 'Postmodernismen', order: 0, revealZoom: 0, rowHeight: 24, labelMinWidth: 70,
      info: '🪞 Postmodernismen leker ofta med ironi, metafiktion, blandade stilar och tvivel på en enda sanning. Den ifrågasätter auktoriteter, genregränser och stabil mening.'
    }
  ],
  facts: [
    { year: -700, text: '🪶 Homeros epos Iliaden och Odysséen blir grundläggande verk i den västerländska litteraturen.', level: 0 },
    { year: -440, text: '🎭 Grekisk dramatik blomstrar med författare som Sofokles och Euripides.', level: 1 },
    { year: -19, text: '🛡️ Vergilius skriver Aeneiden, som blir ett centralt romerskt nationalepos.', level: 1 },

    { year: 800, text: '🐉 Beowulf och andra heroiska berättelser speglar den tidiga medeltidens muntliga och skriftliga traditioner.', level: 1 },
    { year: 1320, text: '🌌 Dante skriver Den gudomliga komedin, ett av medeltidens mest inflytelserika verk.', level: 0 },
    { year: 1387, text: '🧳 Geoffrey Chaucer börjar skriva Canterbury Tales.', level: 1 },

    { year: 1450, text: '🖨️ Boktryckarkonsten hjälper litteratur att spridas snabbare och bredare.', level: 0 },
    { year: 1590, text: '🎭 William Shakespeare inleder en rad pjäser som får enorm betydelse för dramatik och språk.', level: 0 },
    { year: 1596, text: '💘 Romeo och Julia blir ett av världens mest kända kärleksdramer.', level: 1 },
    { year: 1603, text: '👑 Hamlet tillhör Shakespeares mest berömda tragedier och formar senare litteratur och teater.', level: 1 },
    { year: 1605, text: '🐴 Don Quijote ges ut och ses ofta som ett viktigt steg mot den moderna romanen.', level: 0 },

    { year: 1667, text: '😈 John Milton publicerar Det förlorade paradiset.', level: 1 },
    { year: 1726, text: '🧭 Jonathan Swift ger ut Gullivers resor, en klassisk satir från upplysningstiden.', level: 1 },
    { year: 1759, text: '🙂 Candide av Voltaire blir ett känt exempel på upplysningens kritiska ironi.', level: 1 },

    { year: 1774, text: '💔 Den unge Werthers lidanden blir ett tidigt nyckelverk inom romantiken.', level: 1 },
    { year: 1798, text: '🌿 Wordsworth och Coleridge publicerar Lyrical Ballads, ofta kopplad till romantikens genombrott i England.', level: 0 },
    { year: 1813, text: '💍 Stolthet och fördom förenar kärlek, ironi och samhällsskildring.', level: 1 },
    { year: 1818, text: '⚡ Frankenstein visar romantikens fascination för vetenskap, skapelse och mörker.', level: 1 },

    { year: 1830, text: '🇫🇷 Författare som Balzac och senare Dickens stärker realismens samhällsskildring.', level: 1 },
    { year: 1857, text: '🪞 Madame Bovary blir ett nyckelverk inom realismen.', level: 0 },
    { year: 1866, text: '🎲 Brott och straff fördjupar romanens psykologiska skildring.', level: 1 },
    { year: 1879, text: '🏠 Ibsens Ett dockhem utmanar samtidens syn på könsroller och familj.', level: 1 },
    { year: 1881, text: '🧪 Naturalismen får starkt genomslag genom Émile Zola och andra författare.', level: 2 },

    { year: 1913, text: '🔍 På spaning efter den tid som flytt inleder modernismens nya sätt att skildra medvetandet.', level: 1 },
    { year: 1922, text: '🌀 Ulysses och Det öde landet blir två av modernismens mest berömda verk.', level: 0 },
    { year: 1925, text: '🌊 Virginia Woolf utvecklar nya berättarsätt i romaner som Mrs Dalloway.', level: 1 },
    { year: 1949, text: '👁️ 1984 utkommer i gränslandet mellan modernism och efterkrigslitteratur.', level: 1 },

    { year: 1953, text: '🎭 I väntan på Godot blir ett centralt verk inom absurdismen.', level: 1 },
    { year: 1967, text: '✨ Hundra år av ensamhet bidrar till att göra magisk realism världsberömd.', level: 0 },
    { year: 1979, text: '📚 Postmodernismen märks i allt tydligare lek med berättelser, identiteter och perspektiv.', level: 2 },
    { year: 1980, text: '🌹 Rosens namn blandar historia, filosofi och postmodern lekfullhet.', level: 1 },
    { year: 1997, text: '🧙 Harry Potter och De vises sten inleder en av världens mest spridda moderna bokserier.', level: 1 }
  ]
});