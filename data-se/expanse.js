window.TimelineRegistry.registerDataset({
  id: 'expanse',
  label: 'The Expanse (sci-fi)',
    category: 'Annat',
  enabledByDefault: false,
  eras: [
    {
      id: 'ex-early-expansion',
      start: 2100,
      end: 2230,
      title: 'Early expansion',
      order: 0,
      revealZoom: 0.42,
      rowHeight: 24,
      labelMinWidth: 78,
      info: 'Humanity expands out from Earth into the inner planets and the Belt. Mars begins its long civilizational project, while Belters become essential to the economy but remain politically and socially subordinate.'
    },
    {
      id: 'ex-three-power-system',
      start: 2230,
      end: 2350,
      title: 'Earth, Mars & Belt',
      order: 0,
      revealZoom: 0.42,
      rowHeight: 24,
      labelMinWidth: 84,
      info: 'The Solar System settles into a tense three-way balance between Earth, Mars and the Belt. The OPA grows out of exploitation and resentment, and the whole system becomes increasingly unstable.'
    },
    {
      id: 'ex-protomolecule-crisis',
      start: 2350,
      end: 2352,
      title: 'Protomolecule crisis',
      order: 0,
      revealZoom: 0.42,
      rowHeight: 24,
      labelMinWidth: 92,
      info: 'The disappearance of Julie Mao, the destruction of the Canterbury, and the Eros disaster pull hidden protomolecule experiments into the open. What begins as political tension becomes a civilization-changing discovery.'
    },
    {
      id: 'ex-ring-era',
      start: 2352,
      end: 2353,
      title: 'Ring era begins',
      order: 0,
      revealZoom: 0.5,
      rowHeight: 24,
      labelMinWidth: 82,
      info: 'The protomolecule transforms Venus and creates the first ring gate in Sol. Humanity suddenly confronts ancient alien technology and the possibility of access to many other star systems.'
    },
    {
      id: 'ex-colony-rush',
      start: 2353,
      end: 2355,
      title: 'Colony rush',
      order: 0,
      revealZoom: 0.42,
      rowHeight: 24,
      labelMinWidth: 70,
      info: 'With access to the ring network, the struggle shifts from control of the Solar System to control of thousands of possible new worlds. Ilus becomes an early symbol of the dangers of expansion into alien territory.'
    },
    {
      id: 'ex-free-navy-war',
      start: 2355,
      end: 2356,
      title: 'Free Navy war',
      order: 0,
      revealZoom: 0.5,
      rowHeight: 24,
      labelMinWidth: 74,
      info: 'Marco Inaros turns Belt grievance into a system-wide war. Earth is struck, old political assumptions collapse, and the future of the Belt, Mars and Earth has to be rebuilt under catastrophic pressure.'
    },
    {
      id: 'ex-transport-union',
      start: 2356,
      end: 2360,
      title: 'Transport Union era',
      order: 0,
      revealZoom: 0.42,
      rowHeight: 24,
      labelMinWidth: 88,
      info: 'A new interstellar order emerges around the ring network and Medina Station. Humanity is no longer merely a Solar System civilization, even if old inequalities and rivalries remain.'
    }
  ],
  facts: [
    {
      year: 2100,
      text: 'Human expansion beyond Earth accelerates, laying the groundwork for Martian and Belt societies.',
      level: 0,
      eraIds: ['ex-early-expansion']
    },
    {
      year: 2230,
      text: 'The mature three-power system of Earth, Mars and the Belt begins to define politics in the Solar System.',
      level: 0,
      eraIds: ['ex-three-power-system']
    },
    {
      year: 2336,
      text: 'The Anderson Station massacre becomes a defining trauma in Belt memory.',
      level: 2,
      eraIds: ['ex-three-power-system']
    },
    {
      year: 2350,
      text: 'The Canterbury is destroyed and the main story begins.',
      level: 0,
      eraIds: ['ex-protomolecule-crisis']
    },
    {
      year: 2350,
      text: 'Julie Mao and the Scopuli become central to the emerging protomolecule conspiracy.',
      level: 1,
      eraIds: ['ex-protomolecule-crisis']
    },
    {
      year: 2351,
      text: 'Eros becomes the site of the first great protomolecule catastrophe.',
      level: 0,
      eraIds: ['ex-protomolecule-crisis']
    },
    {
      year: 2352,
      text: 'The protomolecule reshapes Venus and begins constructing the Sol ring.',
      level: 1,
      eraIds: ['ex-protomolecule-crisis', 'ex-ring-era']
    },
    {
      year: 2353,
      text: 'The ring gate activates, opening the way to the larger ring network.',
      level: 0,
      eraIds: ['ex-ring-era']
    },
    {
      year: 2353,
      text: 'Humanity learns that the ring network connects around 1,373 systems.',
      level: 1,
      eraIds: ['ex-ring-era', 'ex-colony-rush']
    },
    {
      year: 2354,
      text: 'Ilus becomes one of the first major flashpoints of extrasolar colonization.',
      level: 1,
      eraIds: ['ex-colony-rush']
    },
    {
      year: 2355,
      text: 'Marco Inaros and the Free Navy launch devastating attacks on Earth.',
      level: 0,
      eraIds: ['ex-free-navy-war']
    },
    {
      year: 2355,
      text: 'Mars fragments politically as military assets and people drift toward new futures beyond the old republic.',
      level: 2,
      eraIds: ['ex-free-navy-war']
    },
    {
      year: 2356,
      text: 'The Free Navy war ends and a new interstellar political order begins to form.',
      level: 0,
      eraIds: ['ex-free-navy-war', 'ex-transport-union']
    },
    {
      year: 2356,
      text: 'The Transport Union emerges to manage traffic and power around the ring network.',
      level: 1,
      eraIds: ['ex-transport-union']
    },
    {
      year: 2360,
      text: 'A breakaway Laconian future begins to take shape beyond the gates.',
      level: 2,
      eraIds: ['ex-transport-union']
    }
  ]
});