export type SeriesPost = {
  slug: string
  part: number
  title: string
  subtitle: string
  date: string
  readTime: string
  tag: string
  content: string[]
  published: boolean
}

export type Series = {
  slug: string
  title: string
  tagline: string
  description: string
  pillar: string
  coverTag: string
  posts: SeriesPost[]
}

export const allSeries: Series[] = [
  {
    slug: 'joint-opmed-ontology',
    title: 'The Joint OPMED Ontology Framework',
    tagline: 'One framework. One picture. Every warfighter.',
    description:
      'A deep-dive series into what it would take to build a joint operational medical data ontology for the US Military Health System — the architecture, the governance, the stakeholders, and the actual path forward.',
    pillar: 'The Broken System',
    coverTag: '// Series — The Broken System',
    posts: [
      {
        slug: 'part-1-problem-and-path',
        part: 1,
        title: 'The Problem and the Path',
        subtitle: 'We have the data. We have the platforms. What we are missing is the will to connect them.',
        date: 'April 1, 2026',
        readTime: '8 min read',
        tag: '// Series Part 1 — The Broken System',
        published: true,
        content: [
          'Most people are still asleep.',
          'I tried to explain to my 12-year-old son that even in today\'s wars, we still scribble critical casualty information on paper triage cards. Same process as World War II. He stared at me like I told him we fight with bows and arrows on horseback.',
          'He is right to be confused.',
          'We are the most technologically advanced military force in the history of human civilization. We have AI targeting weapons, satellite communications, autonomous vehicles, and precision medicine. And when a warfighter bleeds out in a forward position, the first thing that happens is someone grabs a paper card and a pen.',
          'That is not a resource problem. That is a will problem.',
          '// THE ACTUAL PROBLEM',
          'The problem in military operational medical data is not one thing. It is three.',
          'Cultural. Data-Input. Data-Use.',
          'Culturally, we have not decided that operational medical data matters the same way targeting data matters. If a weapons system goes offline, someone calls a general. If BATDOK goes offline, the medic grabs a notepad and keeps moving. That asymmetry is not an accident. It reflects institutional priorities that have never been formally challenged at the joint level.',
          'On the data-input side, the systems exist but they do not talk. BATDOK and BATTAK capture point-of-injury data. TMDS and OMDS handle theater medical tracking. DOEHRS owns occupational health. TRA2CES manages patient movement. CDP and MHS GENESIS hold the clinical record. The Military Intelligence Program feeds strategic health data. These are not bad systems. They are disconnected systems operating as if the others do not exist.',
          'On the data-use side, even when data is captured, nobody is fusing it in real time. The battalion surgeon is on the phone trying to piece together a picture that three different systems already have the answer to. Patient status in one silo. Platform availability in another. Facility capacity somewhere else.',
          'People die in that gap.',
          '// THE FRAMEWORK',
          'What the Military Health System actually needs is a Joint OPMED Data Ontology. One single source of truth for the entire joint force. Not another system. Not another contract. A framework that makes what already exists visible, linked, and actionable at the speed of combat.',
          'I wrote this argument in a paper at National Defense University. The architecture is not complicated.',
          'Palantir\'s Maven Smart System as the operational host. It is already a DoD program of record. It already crosses classification enclaves. It can hold the fused OPMED picture while Advana handles the fixed-facility, business-level data. The two systems feed each other bidirectionally. The Office of the Joint Staff Surgeon owns it because they already own joint medical software solutions. The governance chain already exists.',
          'None of this requires inventing something new. It requires the will to connect what we already have.',
          '// WHAT MOMENTUM LOOKS LIKE',
          'Maven is already operational. The JOMIS PMO has been watching this problem up close for years. DHA has invested in data infrastructure. The CDAIO has a mandate. The T2COM organizations understand the operational requirement. The pieces are on the board.',
          'What this framework does is give those pieces a forcing function. When OJSS owns the ontology and Maven holds the fused picture, the conversation stops being "we should coordinate" and starts being "here is the briefing." The urgency shifts from institutional to operational.',
          '// NEAR-TERM AND LONG-TERM',
          'The near-term outcome is practical. Commanders get automated situational awareness on patient status and evacuation resources. Clinicians stop making decisions blind. The MEDEVAC decision that currently takes 60 seconds of phone calls and whiteboard math starts taking seconds because the data is already fused and ranked.',
          'The long-term outcome is the one that matters most. By the time the Army transitions to Next Generation C2, the MHS is already data-centric. The thread from point of injury to definitive care to VA integration is continuous. No data loss. No analog gaps. No 12-year-old staring at you in disbelief.',
          '// WHAT IS ACTUALLY STOPPING THIS',
          'The implementation cost I estimated is $25 to $50 million. That is a rounding error in a defense budget that spends that on a handful of Javelins.',
          'The stakeholders know this needs to happen. OJSS knows it. DHA knows it. CDAIO knows it. T2COM knows it. JOMIS PMO knows it better than anyone.',
          'We fund studies about interoperability. We convene working groups about data standards. We publish strategies about digital transformation and then let the implementation timeline slip to 2030 while warfighters in the next conflict are still writing on paper cards.',
          'The knowledge is not the gap. The urgency is.',
          'My son should not have to be shocked by this in ten years. His generation should grow up in a world where that problem is solved. Where the military takes care of its warfighters with the same technological seriousness it applies to killing the enemy.',
          'We have the platforms. We have the governance chain. We have the data.',
          'Get the data agreements drafted. Get the APIs connected. Sign me up to support.',
          'What is the actual reason this is not done yet?',
        ],
      },
      {
        slug: 'part-2-architecture-deep-dive',
        part: 2,
        title: 'Architecture Deep Dive',
        subtitle: 'Maven, Advana, JOMIS — how the pieces actually connect.',
        date: 'Coming Soon',
        readTime: '10 min read',
        tag: '// Series Part 2 — The Broken System',
        published: false,
        content: [],
      },
      {
        slug: 'part-3-governance-and-ownership',
        part: 3,
        title: 'Governance and Ownership',
        subtitle: 'Why OJSS is the right owner and how the chain of command makes this real.',
        date: 'Coming Soon',
        readTime: '9 min read',
        tag: '// Series Part 3 — The Broken System',
        published: false,
        content: [],
      },
      {
        slug: 'part-4-path-to-implementation',
        part: 4,
        title: 'The Path to Implementation',
        subtitle: 'Concrete steps, stakeholder map, and why $25M is a rounding error.',
        date: 'Coming Soon',
        readTime: '7 min read',
        tag: '// Series Part 4 — The Broken System',
        published: false,
        content: [],
      },
    ],
  },
]

export const getSeriesBySlug = (slug: string) => allSeries.find((s) => s.slug === slug)

export const getPostBySlug = (seriesSlug: string, postSlug: string) => {
  const series = getSeriesBySlug(seriesSlug)
  return series?.posts.find((p) => p.slug === postSlug)
}
