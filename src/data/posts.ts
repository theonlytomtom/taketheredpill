export type Post = {
  slug: string
  tag: string
  title: string
  excerpt: string
  date: string
  readTime: string
  featured?: boolean
}

export const posts: Post[] = [
  {
    slug: 'pentagon-palantir-ai-backbone',
    tag: '// Featured — The Broken System',
    title: "The Pentagon Just Made Palantir Its Official AI Backbone. Here's What the Coverage Is Missing.",
    excerpt:
      "Maven is a Program of Record now. Everyone's covering the weapons-targeting angle. Nobody's talking about what this means for operational medical data — and the lives that hang on it. Let's fix that.",
    date: 'Mar 25, 2026',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'what-batdok-actually-does',
    tag: "// Operator's Edge",
    title: "What BATDOK Actually Does (And Why Nobody Explains It Right)",
    excerpt:
      "An insider breakdown of the Army's operational medical data platform — what it captures, what it misses, and what happens when commanders actually use it.",
    date: 'Mar 18, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'building-business-in-uniform',
    tag: '// Transition Blueprint',
    title: 'Building a Business While Inside the Machine: Month One',
    excerpt:
      "What it looks like to start an entrepreneurial journey while working inside a large institution — and why waiting for the perfect exit is the wrong play.",
    date: 'Mar 11, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'ai-sepsis-prediction-army',
    tag: "// Operator's Edge",
    title: "AI Predicted Sepsis Before the Lab Did. The Army Wasn't Ready.",
    excerpt:
      "Palantir's sepsis algorithm flagged the patient 6 hours before conventional screening. Here's what happened next — and what it says about how we integrate clinical AI.",
    date: 'Mar 4, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'class-viii-data-problem',
    tag: '// The Broken System',
    title: "The Class VIII Data Problem Nobody Talks About",
    excerpt:
      "Blood products, MEDLOG, and the supply chain that decides who lives in a forward operating environment. The data exists. It's just in five different systems that don't talk to each other.",
    date: 'Feb 25, 2026',
    readTime: '9 min read',
  },
  {
    slug: 'red-pill-philosophy-truth',
    tag: '// Red Pill Philosophy',
    title: "The Truth Doesn't Need Your Permission to Be True",
    excerpt:
      "Most people wait until the institution validates what they already know. Here's why that's the single most expensive habit in government tech.",
    date: 'Feb 18, 2026',
    readTime: '4 min read',
  },
]

export const featuredPost = posts.find((p) => p.featured) ?? posts[0]
export const standardPosts = posts.filter((p) => !p.featured).slice(0, 2)
