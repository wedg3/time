window.TimelineRegistry.registerDataset({
  id: 'star-trek',
  label: 'Star Trek (sci-fi)',
  category: 'Annat',
  enabledByDefault: false,
  eras: [
    {
      id: 'st-post-atomic-horror',
      start: 2026,
      end: 2063,
      title: 'Post-Atomic Horror / Eugenics aftermath',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 92,
      info: 'A dark pre-Federation stretch of Earth history marked by war, instability and recovery. In Star Trek lore, humanity is not on a straight upward path: catastrophe comes before first contact and interstellar optimism.'
    },
    {
      id: 'st-first-contact-recovery',
      start: 2063,
      end: 2151,
      title: 'First Contact & early warp age',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 88,
      info: 'After Zefram Cochrane’s warp flight in 2063, Vulcans make first contact with Earth. Humanity slowly rebuilds, develops interstellar travel, and takes its first uneven steps toward the larger galactic community.'
    },
    {
      id: 'st-enterprise-era',
      start: 2151,
      end: 2161,
      title: 'Enterprise era',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 78,
      info: 'The NX-01 era follows Captain Jonathan Archer and Earth’s first deep-space Starfleet missions. This period helps lay the political and diplomatic foundations for the future Federation.'
    },
    {
      id: 'st-federation-founding',
      start: 2161,
      end: 2233,
      title: 'Early Federation',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 76,
      info: 'The United Federation of Planets is founded in 2161. This era is about institution-building, expanding cooperation between worlds, and the growth of Starfleet as an exploratory and diplomatic force.'
    },
    {
      id: 'st-discovery-snw',
      start: 2233,
      end: 2265,
      title: 'Discovery / Strange New Worlds era',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 100,
      info: 'This is the pre-Kirk 23rd century of Pike, early Spock, and the USS Discovery period. Federation-Klingon tensions flare, exploration continues, and the tone shifts toward the classic Star Trek frontier.'
    },
    {
      id: 'st-tos-era',
      start: 2265,
      end: 2293,
      title: 'Kirk / TOS film era',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 80,
      info: 'The age of Kirk, Spock and the original Enterprise. The era begins with episodic exploration and first contacts, then matures into the film period with major crises involving Genesis, whales, and the Klingon peace process.'
    },
    {
      id: 'st-lost-era',
      start: 2293,
      end: 2364,
      title: 'The Lost Era',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 72,
      info: 'A quieter but intriguing stretch between the original-cast films and The Next Generation. Much of it is only lightly shown on screen, but it bridges the old movie era and the late-24th-century Federation.'
    },
    {
      id: 'st-tng-era',
      start: 2364,
      end: 2371,
      title: 'The Next Generation era',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 90,
      info: 'The Enterprise-D era marks a confident, mature Federation. Exploration is paired with diplomacy and recurring tensions with the Romulans, Cardassians and the newly revealed Borg.'
    },
    {
      id: 'st-ds9-voy-dominion',
      start: 2371,
      end: 2378,
      title: 'DS9 / Voyager / Dominion War',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 96,
      info: 'A more turbulent phase of the franchise. Voyager is stranded in the Delta Quadrant while Deep Space Nine becomes the center of the Dominion War, one of the Federation’s greatest military crises.'
    },
    {
      id: 'st-lower-decks',
      start: 2380,
      end: 2382,
      title: 'Lower Decks era',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 76,
      info: 'A post-war, lower-stakes but still canonically rich period. Starfleet is rebuilding, exploring, and dealing with the weird leftovers of a very crowded late-24th-century galaxy.'
    },
    {
      id: 'st-romulan-crisis',
      start: 2385,
      end: 2399,
      title: 'Romulan crisis',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 76,
      info: 'The rescue effort surrounding the Romulan supernova and the political fallout that follows reshape the late Federation. This period becomes key background for Star Trek: Picard.'
    },
    {
      id: 'st-picard-era',
      start: 2399,
      end: 2402,
      title: 'Picard era',
      order: 0,
      revealZoom: 0,
      rowHeight: 24,
      labelMinWidth: 66,
      info: 'The late-24th / early-25th-century setting of Star Trek: Picard. Old wounds, synthetic life, the Borg, and unresolved Romulan and Changeling tensions all return in a more reflective era.'
    }
  ],
  facts: [
    {
      year: 2063,
      text: 'Zefram Cochrane makes Earth’s first warp flight, leading to first contact with the Vulcans.',
      level: 0,
      eraIds: ['st-first-contact-recovery']
    },
    {
      year: 2151,
      text: 'Enterprise NX-01 launches under Captain Jonathan Archer.',
      level: 1,
      eraIds: ['st-enterprise-era']
    },
    {
      year: 2156,
      text: 'The Earth-Romulan War begins.',
      level: 2,
      eraIds: ['st-enterprise-era']
    },
    {
      year: 2161,
      text: 'The United Federation of Planets is founded.',
      level: 0,
      eraIds: ['st-federation-founding']
    },
    {
      year: 2233,
      text: 'James T. Kirk is born; this is also the year where the Kelvin timeline diverges in the films.',
      level: 2,
      eraIds: ['st-discovery-snw']
    },
    {
      year: 2245,
      text: 'The USS Enterprise (NCC-1701) is launched.',
      level: 1,
      eraIds: ['st-discovery-snw']
    },
    {
      year: 2256,
      text: 'Federation-Klingon War erupts in the Discovery era.',
      level: 1,
      eraIds: ['st-discovery-snw']
    },
    {
      year: 2265,
      text: 'Kirk’s five-year mission aboard the Enterprise begins.',
      level: 0,
      eraIds: ['st-tos-era']
    },
    {
      year: 2285,
      text: 'The Genesis crisis and the death of Spock take place.',
      level: 2,
      eraIds: ['st-tos-era']
    },
    {
      year: 2286,
      text: 'The whale probe crisis brings Kirk’s crew back from the past with humpback whales.',
      level: 2,
      eraIds: ['st-tos-era']
    },
    {
      year: 2293,
      text: 'The Khitomer Accords mark a major step toward peace with the Klingon Empire.',
      level: 1,
      eraIds: ['st-tos-era', 'st-lost-era']
    },
    {
      year: 2364,
      text: 'The Next Generation begins aboard the Enterprise-D under Jean-Luc Picard.',
      level: 0,
      eraIds: ['st-tng-era']
    },
    {
      year: 2365,
      text: 'The Borg are encountered by the Enterprise-D in “Q Who”.',
      level: 1,
      eraIds: ['st-tng-era']
    },
    {
      year: 2367,
      text: 'The Battle of Wolf 359 devastates Starfleet after Picard is assimilated as Locutus.',
      level: 2,
      eraIds: ['st-tng-era']
    },
    {
      year: 2369,
      text: 'Deep Space 9 opens near the Bajoran wormhole.',
      level: 1,
      eraIds: ['st-tng-era']
    },
    {
      year: 2371,
      text: 'Voyager is stranded in the Delta Quadrant; the Enterprise-D is destroyed.',
      level: 1,
      eraIds: ['st-tng-era', 'st-ds9-voy-dominion']
    },
    {
      year: 2373,
      text: 'Open war with the Dominion begins.',
      level: 1,
      eraIds: ['st-ds9-voy-dominion']
    },
    {
      year: 2375,
      text: 'The Dominion War ends after a massive Alpha Quadrant conflict.',
      level: 0,
      eraIds: ['st-ds9-voy-dominion']
    },
    {
      year: 2378,
      text: 'USS Voyager returns to Earth after its long journey home.',
      level: 1,
      eraIds: ['st-ds9-voy-dominion']
    },
    {
      year: 2380,
      text: 'The Lower Decks era begins in a recovering post-war Federation.',
      level: 2,
      eraIds: ['st-lower-decks']
    },
    {
      year: 2385,
      text: 'The attack on Mars helps derail the planned Romulan rescue effort.',
      level: 1,
      eraIds: ['st-romulan-crisis']
    },
    {
      year: 2387,
      text: 'The Romulan sun goes supernova, shattering Romulan political stability.',
      level: 1,
      eraIds: ['st-romulan-crisis']
    },
    {
      year: 2399,
      text: 'Star Trek: Picard begins.',
      level: 0,
      eraIds: ['st-picard-era']
    },
    {
      year: 2401,
      text: 'The Frontier Day crisis threatens Starfleet from within.',
      level: 2,
      eraIds: ['st-picard-era']
    }
  ]
});