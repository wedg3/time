window.TimelineRegistry.registerDataset({
  id: 'physics-tech',
  label: 'Fysik & teknik',
    category: 'Vetenskap & Filosofi',
  enabledByDefault: false,
  eras: [
 {
    id: 'pt-early-tools-fire',
    start: -3500000,
    end: -10000,
    title: 'Tidiga redskap & eld',
    order: 0,
    revealZoom: 0,
    rowHeight: 24,
    labelMinWidth: 92,
    info: '🪨🔥 Under denna mycket långa period utvecklas de första stenverktygen, kontrollerad eld och enkla sätt att bearbeta naturmaterial. Människan börjar steg för steg använda teknik för att överleva, skydda sig och förändra sin omgivning.'
  },
  {
    id: 'pt-agriculture-early-tech',
    start: -10000,
    end: -3000,
    title: 'Jordbruk & tidig teknik',
    order: 0,
    revealZoom: 0,
    rowHeight: 24,
    labelMinWidth: 92,
    info: '🌾🛞 När jordbruket växer fram ökar behovet av lagring, byggande och redskap. Keramik, vävning, båtar, tidig metallteknik och så småningom hjulet lägger grunden för de första högkulturerna.'
  },
    {
      id: 'pt-ancient-engineering',
      start: -3000,
      end: 500,
      title: 'Antik teknik',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 72,
      info: '🏛️ I de tidiga civilisationerna utvecklas byggteknik, metallbearbetning, bevattning, geometri, astronomi och mekaniska lösningar. Teknik blir allt mer organiserad och kopplas till städer, handel och stater.'
    },
    {
      id: 'pt-medieval-craft',
      start: 500,
      end: 1450,
      title: 'Medeltida hantverk & mekanik',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 84,
      info: '⚙️ Medeltiden för vidare och förbättrar många äldre tekniker. Vattenhjul, väderkvarnar, glas, urverk och bättre metallhantverk får stor betydelse för jordbruk, byggande och produktion.'
    },
    {
      id: 'pt-scientific-revolution',
      start: 1450,
      end: 1750,
      title: 'Vetenskapliga revolutionen',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 84,
      info: '🔭 Under denna period förändras synen på naturen. Observationer, experiment och matematik blir viktigare. Fysiken tar form som modern vetenskap med nya lagar för rörelse, gravitation och ljus.'
    },
    {
      id: 'pt-industrial-age',
      start: 1750,
      end: 1900,
      title: 'Industri & energi',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 76,
      info: '🚂 Ångmaskinen, fabriker, järnvägar och elektrifiering förändrar samhällen i grunden. Tekniken går från hantverk till storskalig industri, och fysik används allt mer direkt i uppfinningar.'
    },
    {
      id: 'pt-modern-physics',
      start: 1900,
      end: 1945,
      title: 'Modern fysik',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 70,
      info: '⚛️ Under 1900-talets första hälft revolutioneras fysiken. Relativitetsteori, kvantfysik, atommodeller och kärnfysik förändrar förståelsen av materia, energi, rum och tid.'
    },
    {
      id: 'pt-atomic-digital',
      start: 1945,
      end: 2000,
      title: 'Atomålder & digital teknik',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 88,
      info: '💻 Efter andra världskriget växer elektronik, datorer, rymdteknik och kärnkraft snabbt. Tekniken blir allt mer global, digital och sammanflätad med vardagslivet.'
    },
    {
      id: 'pt-quantum-information',
      start: 2000,
      end: 2026,
      title: 'Informations- & kvanteran',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 94,
      info: '🧠 I vår tid utvecklas avancerad beräkning, AI, nanoteknik, kvantteknik och nya energisystem. Kvantdatorer är ännu i tidigt skede men visar hur fysik och teknik fortsätter att smälta samman.'
    }
  ],
  facts: [
    { year: -400000, text: '🔥 Människor lär sig kontrollera eld, vilket ger värme, skydd, matlagning och nya möjligheter att förändra material.', level: 0, eraIds: ['pt-early-tools'] },
    { year: -3500000, text: '🪨 De första enkla stenverktygen används av tidiga människosläktingar.', level: 0, eraIds: ['pt-early-tools'] },
    { year: -10000, text: '🌾 Jordbruket växer fram i flera områden och skapar behov av redskap, lagring och mer avancerad teknik.', level: 0, eraIds: ['pt-early-tools'] },
    { year: -3500, text: '🛞 Hjulet börjar användas, först i enkla former, och blir en avgörande uppfinning för transporter och maskiner.', level: 0, eraIds: ['pt-early-tools', 'pt-ancient-engineering'] },

    { year: -3000, text: '🔩 Bronsålderns metallteknik gör verktyg och vapen starkare och mer specialiserade.', level: 0, eraIds: ['pt-ancient-engineering'] },
    { year: -2600, text: '🏗️ Monumentala byggnadsverk som pyramiderna visar avancerad geometri, planering och enkel maskinteknik.', level: 0, eraIds: ['pt-ancient-engineering'] },
    { year: -250, text: '⚖️ Archimedes beskriver hävstångens principer och utvecklar idéer om block, taljor och flytkraft.', level: 0, eraIds: ['pt-ancient-engineering'] },

    { year: 850, text: '🌬️ Väderkvarnar och vattenhjul används allt mer för att driva arbete med naturens energi.', level: 0, eraIds: ['pt-medieval-craft'] },
    { year: 1280, text: '🕰️ Mekaniska urverk börjar förändra hur människor mäter tid.', level: 1, eraIds: ['pt-medieval-craft'] },
    { year: 1400, text: '🔧 Förbättrade metalltekniker och hantverksmetoder gör verktyg och maskindelar mer precisa.', level: 0, eraIds: ['pt-medieval-craft'] },

    { year: 1543, text: '🌍 Kopernikus publicerar en modell där jorden kretsar kring solen.', level: 1, eraIds: ['pt-scientific-revolution'] },
    { year: 1609, text: '🔭 Galileo använder teleskopet för att studera himlen och stärker den nya naturvetenskapen.', level: 1, eraIds: ['pt-scientific-revolution'] },
    { year: 1687, text: '🍎 Newton publicerar Principia och formulerar rörelselagarna och gravitationslagen.', level: 0, eraIds: ['pt-scientific-revolution'] },
    { year: 1704, text: '🌈 Newton publicerar arbete om ljus och färger.', level: 2, eraIds: ['pt-scientific-revolution'] },

    { year: 1712, text: '♨️ Tidiga ångmaskiner börjar användas för att pumpa vatten ur gruvor.', level: 0, eraIds: ['pt-industrial-age'] },
    { year: 1769, text: '🚂 James Watt förbättrar ångmaskinen och banar väg för industrialiseringen.', level: 0, eraIds: ['pt-industrial-age'] },
    { year: 1800, text: '🔋 Alessandro Volta konstruerar ett tidigt batteri som kan ge jämn elektrisk ström.', level: 1, eraIds: ['pt-industrial-age'] },
    { year: 1831, text: '🧲 Michael Faraday upptäcker elektromagnetisk induktion, en grund för generatorer och elmotorer.', level: 1, eraIds: ['pt-industrial-age'] },
    { year: 1879, text: '💡 Elektriskt ljus får sitt genombrott i praktiskt bruk.', level: 1, eraIds: ['pt-industrial-age'] },

    { year: 1895, text: '🩻 Röntgen upptäcker röntgenstrålning.', level: 1, eraIds: ['pt-modern-physics'] },
    { year: 1897, text: '⚛️ J.J. Thomson upptäcker elektronen.', level: 1, eraIds: ['pt-modern-physics'] },
    { year: 1905, text: '⏱️ Einstein publicerar flera banbrytande arbeten, bland annat om relativitet och ljuskvanta.', level: 0, eraIds: ['pt-modern-physics'] },
    { year: 1911, text: '🎯 Rutherford visar att atomen har en liten, tät kärna.', level: 1, eraIds: ['pt-modern-physics'] },
    { year: 1913, text: '🌀 Bohr presenterar en ny atommodell med elektroner i bestämda energinivåer.', level: 1, eraIds: ['pt-modern-physics'] },
    { year: 1925, text: '🎲 Kvantfysiken får sin moderna form genom nya modeller för atomers och partiklars beteende.', level: 0, eraIds: ['pt-modern-physics'] },
    { year: 1938, text: '☢️ Kärnklyvning upptäcks, vilket öppnar vägen för både kärnkraft och kärnvapen.', level: 1, eraIds: ['pt-modern-physics'] },
    { year: 1945, text: '💥 Atombomberna över Hiroshima och Nagasaki visar den fruktansvärda kraften i kärnfysiken.', level: 0, eraIds: ['pt-modern-physics', 'pt-atomic-digital'] },

    { year: 1947, text: '🔌 Transistorn uppfinns och blir grunden för modern elektronik.', level: 0, eraIds: ['pt-atomic-digital'] },
    { year: 1954, text: '⚡ De första kärnkraftverken börjar leverera el.', level: 1, eraIds: ['pt-atomic-digital'] },
    { year: 1957, text: '🛰️ Rymdåldern inleds när Sputnik skjuts upp.', level: 0, eraIds: ['pt-atomic-digital'] },
    { year: 1969, text: '🌕 Människan landar på månen med hjälp av avancerad raketteknik, elektronik och fysik.', level: 1, eraIds: ['pt-atomic-digital'] },
    { year: 1971, text: '🧠 Mikroprocessorn gör datorer mindre och mer tillgängliga.', level: 1, eraIds: ['pt-atomic-digital'] },
    { year: 1989, text: '🌐 World Wide Web börjar ta form och förändrar informationsspridning globalt.', level: 1, eraIds: ['pt-atomic-digital'] },

    { year: 1998, text: '⚙️ Tidiga experiment visar att kvantdatorer är möjliga i praktiken.', level: 0, eraIds: ['pt-quantum-information'] },
    { year: 2011, text: '💻 Kvantdatorer börjar utvecklas snabbare i forskningslaboratorier och teknikföretag.', level: 1, eraIds: ['pt-quantum-information'] },
    { year: 2019, text: '🧪 Ett uppmärksammat experiment visar hur en kvantdator kan lösa vissa speciella problem mycket snabbt.', level: 1, eraIds: ['pt-quantum-information'] },
    { year: 2023, text: '🤖 AI, avancerade chip och kvantteknik pekar mot en ny fas där fysik, information och teknik binds allt tätare samman.', level: 1, eraIds: ['pt-quantum-information'] }
  ]
});
