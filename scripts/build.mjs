import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const contact = {
  email: "charsasha10@gmail.com",
  linkedin: "https://www.linkedin.com/in/aleksandra-chargeishvili",
};

const projects = [
  {
    slug: "glina",
    title: "GLINA³",
    homeImage: "glina-objects.webp",
    homeVideo: "glina-preview.mp4",
    kicker: "Brand, content & market development",
    intro: "GLINA³ is an Amsterdam studio producing ceramic objects through clay 3D printing. My role covers its brand, visual identity, content and market development.",
    year: "2025–2026",
    role: "Brand strategy, visual identity, content and marketing operations",
    client: "GLINA³, Amsterdam",
    story: [
      "My role has been to build the visual identity and apply it across the website, social channels, presentations, packaging, photography, video and event communication. A weekly content calendar and Instagram, TikTok and Pinterest analytics guide what the studio produces and publishes next.",
      "Alongside the visual work, I qualify incoming enquiries and pass commercial opportunities to sales with the relevant context. In one year, around 30 qualified enquiries led to five realised projects and two digital-content commissions.",
    ],
    deliverables: ["Brand strategy and visual identity", "Website structure and content", "Organic social strategy and production", "Photography, video and campaign assets", "Content calendar and channel analytics", "Lead qualification and sales handover", "Partner decks, packaging and event materials"],
    metrics: [["0 → 7.2K", "Instagram followers, mainly organic"], ["2.6M", "views on the strongest Reel"], ["150–300K", "typical monthly organic reach"], ["~30", "qualified enquiries in one year"]],
    media: [
      ["glina-preview.mp4", "GLINA³ studio and ceramic 3D-printing work in motion", "A moving view of the studio's material and digital practice.", "video"],
      ["glina-objects.webp", "Ceramic objects developed and communicated through the GLINA³ brand", "Selected ceramic 3D-printed objects."],
      ["glina-team.webp", "GLINA³ studio team and production context", "Studio and production context."],
      ["glina-identity.webp", "GLINA³ visual identity applications", "Identity across physical and digital touchpoints."],
      ["glina-analytics.webp", "GLINA³ social media analytics and content results", "Content performance used to guide production."],
    ],
    links: [["Visit GLINA³ on Instagram", "https://www.instagram.com/glina__3/"]],
  },
  {
    slug: "made-after-demand",
    title: "Made After Demand",
    kicker: "Interactive website & public installation",
    intro: "A public-facing digital experience that made an on-demand production process understandable, usable and tangible for visitors.",
    year: "2026",
    role: "Creative producer, interaction and visual designer",
    client: "Public event at Nieuwe Instituut",
    story: [
      "As an external creative contractor, my role was to translate an on-demand manufacturing concept into a clear customer journey: upload, customise, order and produce. The work included interface states and reusable visual components, developed with a web developer into a functioning website.",
      "For the public presentation, the same logic became an interactive installation. My responsibilities covered technical preparation, visitor flow and institutional delivery.",
    ],
    deliverables: ["User journey and interaction flow", "Website interface and reusable components", "Developer guidance and testing", "Physical installation design", "Visitor flow and public presentation", "Institutional coordination and reporting"],
    media: [
      ["made-interface.webp", "Made After Demand digital interface", "Interface for a made-to-demand order journey."],
      ["made-flow.webp", "Made After Demand customer flow", "Upload, customisation and order flow."],
      ["made-event.webp", "Made After Demand public installation", "Public installation and event context."],
      ["made-demo.mp4", "Made After Demand interface demonstration", "A short demonstration of the interaction.", "video"],
    ],
    links: [["Visit Nieuwe Instituut", "https://nieuweinstituut.nl/en"]],
  },
  {
    slug: "dante6-glue",
    title: "DANTE6 × GLUE Amsterdam",
    kicker: "Three-day brand activation",
    intro: "A three-day fashion and design activation connecting the brand, the physical space, invited creatives and a live public programme.",
    year: "17–19 September 2026",
    role: "Creative producer and event coordinator",
    client: "DANTE6 during GLUE Amsterdam",
    story: [
      "My role covered the activation from concept through scheduling, suppliers, contributors and on-site production. The programme combined a window installation, custom lighting, printed graphics, a DJ, performers and invited creators.",
      "The same visual language continued through invitations, social content, photography direction and the in-store experience, while I managed a project budget of approximately €20K.",
    ],
    deliverables: ["Event concept and three-day programme", "Budget, schedule and supplier coordination", "Window graphics and printed materials", "Lighting and spatial presentation", "Creator, performer and DJ coordination", "Invitations, social content and photography direction", "On-site delivery"],
    metrics: [["3 days", "retail and cultural programme"], ["€20K", "approximate project budget"]],
    media: [
      ["dante-lamp.webp", "Custom lighting at the DANTE6 GLUE Amsterdam activation", "Custom lighting created for the activation."],
      ["dante-event.webp", "Guests during the DANTE6 GLUE Amsterdam programme", "The live programme in the store."],
      ["dante-window.webp", "DANTE6 window installation during GLUE Amsterdam", "Window communication and street presence."],
      ["dante-motion.mp4", "DANTE6 lighting detail in motion", "Lighting detail during the event.", "video"],
    ],
    links: [["Visit GLUE Amsterdam", "https://www.glue.amsterdam/"], ["Visit DANTE6", "https://www.dante6.com/"]],
  },
  {
    slug: "maryna-krylova",
    title: "Maryna Krylova",
    homeImage: "marynka-poster.webp",
    kicker: "Audience, tickets & digital communication",
    intro: "Ongoing content and campaign support for an independent pianist and composer, connecting social media, ticket sales, email and website communication.",
    year: "2026–present",
    role: "Content, campaign and event producer",
    client: "Maryna Krylova / Marynka Piano Music",
    story: [
      "My role combines Instagram, LinkedIn and Meta Business Suite; content strategy; photo-shoot production; Eventbrite listings and ticket communication; and newsletter and email-database management, including open-rate checks and follow-up segments.",
      "Together with Maryna and stannet.it, I shape the website structure and content, coordinate concert promotion and connect each channel to the same audience journey.",
    ],
    deliverables: ["Instagram, LinkedIn and Meta Business Suite", "Content strategy and production calendar", "Eventbrite listings and ticket campaigns", "Newsletter, email data and open-rate review", "Photo-shoot planning and production", "Website content guidance for stannet.it", "Concert partnerships and follow-up"],
    metrics: [["5.3K", "Instagram views in 30 days"], ["4,209", "views on a selected Reel"], ["1,842", "accounts reached by that Reel"], ["6", "follows from that Reel"]],
    media: [
      ["marynka-performance.webp", "Maryna Krylova performing live", "Performance image used in campaign communication."],
      ["marynka-poster.webp", "Concert poster for Maryna Krylova", "Concert campaign asset."],
      ["marynka-metrics.webp", "Maryna Krylova Instagram campaign metrics", "Selected campaign performance."],
      ["marynka-campaign.webp", "Maryna Krylova social and event campaign", "Content and ticket communication across channels."],
    ],
    links: [["Visit Maryna Krylova’s website", "https://marynakrylova.com/"], ["View the Eventbrite concert page", "https://www.eventbrite.ie/e/van-bach-tot-the-cure-nihad-hrustanbegovic-en-maryna-krylova-tickets-2002552260719"]],
  },
  {
    slug: "weaving-narratives",
    title: "Weaving Narratives of Hope",
    homeImage: "weaving-fieldwork.webp",
    kicker: "Research, documentary film & publication",
    intro: "MA research bringing women’s industrial knowledge into view through interviews, a documentary film, a publication and material experiments.",
    year: "2023–2024",
    role: "Researcher, director, editor and publication designer",
    client: "MA thesis, KABK / Leiden University",
    story: [
      "The project grew from research into the decline of a regional hemp industry and the knowledge held by former factory workers. My particular role included 12 qualitative interviews, coordination of an interdisciplinary film team, direction and the full edit of the 23-minute documentary.",
      "The research then became a publication and a series of material experiments, allowing the project to move across academic, public and visual formats without losing the voices at its centre.",
    ],
    deliverables: ["Qualitative field research", "Interview planning and 12 interviews", "Film direction and team coordination", "Full edit of a 23-minute documentary", "Archival research and rights coordination", "Publication design and material experiments", "Public and festival presentation"],
    metrics: [["12", "qualitative interviews"], ["23 min", "documentary directed and edited"], ["1", "festival selection"]],
    media: [
      ["weaving-interview.webp", "Interview for Weaving Narratives of Hope", "Field interview with a former factory worker."],
      ["weaving-factory.webp", "Industrial research context for Weaving Narratives of Hope", "Industrial and archival context."],
      ["weaving-textile.webp", "Material experiments from Weaving Narratives of Hope", "Material research developed from the fieldwork."],
      ["weaving-poster.webp", "Weaving Narratives of Hope documentary poster", "Documentary and public presentation."],
    ],
    links: [["View the project archive", "https://redesigning-industry.org/Weaving-Narratives-of-Hope-Aleksandra-Chargeshvili"], ["View the KABK graduation page", "https://graduation.kabk.nl/2024/aleksandra-chargeishvili"]],
  },
  {
    slug: "ornament-as-operator",
    title: "Ornament as Operator",
    kicker: "Dutch Design Week / Fashion Tech Farm",
    intro: "A selected three-screen installation that connects archival embroidery, code and responsive moving images.",
    year: "Selected for 2026",
    role: "Concept, research, interaction and visual system",
    client: "Fashion Tech Farm during Dutch Design Week",
    story: [
      "The installation follows how ornament moves between handwork, industrial production and computation. Archival embroidery patterns become coded visual systems that change across three screens.",
      "My role covers the research concept, screen behaviour, visual language and interaction logic, translating a layered design history into a public installation that can be understood without specialist knowledge.",
    ],
    deliverables: ["Research concept and narrative", "Three-screen installation structure", "Responsive visual system", "Interaction logic and screen behaviour", "Public-facing communication", "Technical collaboration and production preparation"],
    media: [
      ["ddw-installation.webp", "Ornament as Operator three-screen installation", "Three-screen installation study."],
      ["ddw-lightbox.webp", "Ornament as Operator lightbox detail", "Physical presentation and material detail."],
      ["ddw-pattern.webp", "Coded pattern for Ornament as Operator", "Archival ornament translated into a digital visual system."],
    ],
    links: [["View the Dutch Design Week programme", "https://site.ddw.nl/nl/programma/17606/ornament-as-operator-machine-genealogies-through"]],
  },
  {
    slug: "industriemuseum-gent",
    title: "Industriemuseum Gent",
    homeImage: "gent-installation.webp",
    kicker: "Textile research on the TC2 jacquard loom",
    intro: "A museum residency moving from archival letters and digital composition to dyed yarn and two woven tapestries.",
    year: "27 November–14 December 2025",
    role: "Designer and researcher in residence",
    client: "Industriemuseum Gent — Makers aan de TC2",
    story: [
      "The residency produced two tapestries on the museum’s digitally programmable TC2 jacquard loom. My role covered archive-led pattern development, digital composition, jacquard-file preparation and weaving; together with Emile Lupatini, the yarns were dyed in the museum’s dye workshop.",
      "The process moved from digital composition to technically prepared loom files, material and colour tests, and independent production inside a specialist museum environment.",
    ],
    deliverables: ["Archive-led pattern research", "Digital composition and TC2 file preparation", "Jacquard loom setup and weaving", "Material and colour tests", "Yarn dyeing with Emile Lupatini", "Two finished tapestries"],
    media: [
      ["gent-installation.webp", "Textile installation developed through the TC2 residency at Industriemuseum Gent", "The finished textile shown in an exhibition setting."],
      ["gent-loom-detail.webp", "TC2 jacquard loom weaving detail at Industriemuseum Gent", "The digital composition becoming cloth on the loom."],
      ["gent-software-new.webp", "Digital jacquard composition prepared for the TC2 loom", "Digital preparation before weaving."],
      ["gent-textile-detail.webp", "Detail of the finished jacquard textile", "Material, colour and woven structure."],
    ],
    links: [["View Makers aan de TC2", "https://www.industriemuseum.be/nl/makers-aan-de-tc2"]],
  },
  {
    slug: "design-biennale-rotterdam",
    title: "Gtree",
    kicker: "Design Biennale Rotterdam",
    intro: "A selected presentation exploring how nature can be interpreted through code, a pen plotter and digitally generated graphic processes.",
    year: "20 February–2 March 2025",
    role: "Concept, visual research and presentation",
    client: "Design Biennale Rotterdam at Katoenhuis",
    story: [
      "Developed with Timo Bega, Gtree examined the relationship between materiality, technology and production. Coded interpretations of natural forms moved through pen-plotter drawings and digitally generated patterns into an installation.",
      "My role centred on concept, visual research and public presentation, making the process legible from computational source to physical result.",
    ],
    deliverables: ["Concept and visual research", "Code-led graphic experimentation", "Pen-plotter process", "Exhibition selection and installation", "Public presentation at Katoenhuis"],
    media: [
      ["biennale-installation.webp", "Gtree installation at Design Biennale Rotterdam", "Installation at Katoenhuis."],
      ["biennale-plotter.webp", "Pen plotter producing a Gtree drawing", "Pen-plotter process."],
      ["biennale-print.webp", "Gtree final graphic result", "Final graphic result."],
    ],
    links: [["View the Design Biennale programme", "https://designbiennalerotterdam.com/katoenhuis"]],
  },
  {
    slug: "dutch-design-week-class-2024",
    title: "Class of 2024",
    homeImage: "ddw-class-2024.webp",
    kicker: "Dutch Design Week · Klokgebouw, Eindhoven",
    intro: "A public presentation of Weaving Narratives of Hope during Dutch Design Week, bringing the film, publication and woven research into one installation.",
    year: "19–27 October 2024",
    role: "Artist, researcher and exhibition designer",
    client: "Class of 2024 at Dutch Design Week, Eindhoven",
    story: [
      "Weaving Narratives of Hope was translated into an exhibition format for the Class of 2024 presentation at Klokgebouw during Dutch Design Week. The installation brought together the documentary, publication and woven material so visitors could enter the project through several forms.",
      "My role covered the spatial presentation, material selection and public hosting during the programme.",
    ],
    deliverables: ["Exhibition concept and spatial presentation", "Film, publication and textile selection", "Installation and on-site production", "Public hosting and project communication"],
    media: [["ddw-class-2024.webp", "Aleksandra Chargeishvili with Weaving Narratives of Hope at Dutch Design Week Class of 2024", "Class of 2024 at Klokgebouw, Eindhoven, during Dutch Design Week 2024."]],
    links: [["View the original Dutch Design Week post", "https://www.instagram.com/p/DBbSnPAormC/"]],
  },
  {
    slug: "digital-ornament",
    title: "Digital Ornament",
    kicker: "Editorial research with Critical Playground",
    intro: "An editorial project about surface, technology and visual culture, developed with clear image rights and reusable collaboration terms.",
    year: "2024",
    role: "Researcher, editor and image-rights coordinator",
    client: "Critical Playground",
    story: [
      "My role combined editorial research and rights coordination: researching and verifying archival and contemporary images, contacting contributors and rightsholders, and coordinating captions and credits.",
      "The Free Art License 1.3 established clear terms for attribution, reuse and transformation in collaborations with artists, supporting the project as both an editorial publication and a community resource.",
    ],
    deliverables: ["Editorial and visual research", "Contributor and rightsholder contact", "Image verification, captions and credits", "Free Art License collaboration terms", "Publication and community communication"],
    media: [
      ["digital-ornament-1.webp", "Digital Ornament editorial design", "Editorial image and layout."],
      ["digital-ornament-2.webp", "Digital Ornament publication detail", "Publication detail."],
    ],
    links: [["Read Digital Ornament", "https://criticalplayground.org/digital-ornament/"]],
  },
  {
    slug: "packaging",
    title: "Packaging design",
    kicker: "Brand systems made physical",
    intro: "Selected packaging work combining brand application, illustration, production thinking and clear consumer information.",
    year: "Selected work",
    role: "Graphic and packaging designer",
    client: "Independent work and commissioned proposals",
    story: [
      "The selection includes Matcha Glow packaging and a commissioned baking-mix packaging proposal for the Van Gogh Museum. My role covered visual systems, hierarchy, illustration and practical information for physical formats.",
      "The Van Gogh Museum proposal works within an established institutional brand language while developing an illustrated object that could communicate clearly on shelf and remain useful after purchase.",
    ],
    deliverables: ["Packaging concepts and visual systems", "Typography and information hierarchy", "Illustration and image preparation", "Brand-guideline application", "Print-ready layout development"],
    media: [
      ["packaging-matcha.webp", "Matcha Glow packaging design", "Matcha Glow packaging design."],
      ["packaging-matcha-square.webp", "Matcha Glow packaging system", "Packaging system detail."],
      ["packaging-vangogh.webp", "Van Gogh Museum baking mix packaging proposal", "Commissioned packaging proposal for the Van Gogh Museum."],
    ],
    links: [["Visit the Van Gogh Museum", "https://www.vangoghmuseum.nl/en"]],
  },
  {
    slug: "publications",
    title: "Publications",
    kicker: "Editorial design, image research & production",
    intro: "Publication work that brings research, images, credits and print production into a clear visual structure.",
    year: "Selected work",
    role: "Editorial and graphic designer",
    client: "Academic, cultural and independent projects",
    story: [
      "My editorial practice includes InDesign systems for print and digital use, long-form structure, image research, caption and credit systems, production files and hands-on print methods such as silkscreen.",
      "The projects shown here include my MA thesis publication and selected independent editorial work.",
    ],
    deliverables: ["InDesign editorial systems", "Long-form hierarchy and typography", "Image research and rights tracking", "Captions, credits and reference systems", "Print preparation and production", "Silkscreen and material tests"],
    media: [
      ["publication-thesis.webp", "MA thesis publication design", "MA thesis publication."],
      ["publication-silkscreen.webp", "Silkscreen publication production", "Hands-on print production."],
      ["publication-weaving.webp", "Weaving Narratives of Hope editorial spread", "Selected editorial spread."],
    ],
    links: [["Read Weaving Narratives of Hope", "https://heyzine.com/flip-book/069d257613.html"], ["Read Let the Fungus Talk!", "https://heyzine.com/flip-book/bb66b53ac1.html"]],
  },
  {
    slug: "workshops",
    title: "Workshops & educational formats",
    kicker: "Participation with a clear point of entry",
    intro: "Workshops that turn archives, AI and digital fabrication into practical ways of making and thinking together.",
    year: "2026",
    role: "Workshop designer, facilitator and producer",
    client: "Nieuwe Instituut, KABK and public design programmes",
    story: [
      "The selection includes an Archive Day format for Nieuwe Instituut, Trace from Screen to Clay and Reclaiming Imagination: Restoring Missing Knowledge Through Material and Digital Practice at KABK.",
      "For the three-day KABK workshop, hosted with Timo Bega, students collected small archives, located gaps in the available knowledge and made speculative physical objects using research, mapping, material work, TouchDesigner, 3D scanning and Blender. My role across the formats covered the learning structure, materials and technology, adapted instructions and live facilitation.",
    ],
    deliverables: ["Workshop concept and learning structure", "Participant instructions and visual materials", "Technical and material preparation", "Live facilitation", "Audience adaptation and reporting"],
    media: [
      ["workshop-archive-day.webp", "Archive Day workshop at Nieuwe Instituut", "Archive Day at Nieuwe Instituut."],
      ["workshop-ai.webp", "AI workshop at KABK", "AI workshop at KABK."],
      ["workshop-screen-clay.webp", "Trace from Screen to Clay workshop", "Independent Trace from Screen to Clay workshop."],
    ],
    links: [["View the KABK MAFAD workshop announcement", "https://www.instagram.com/reel/DSSRrdNDHYL/"], ["Visit Nieuwe Instituut", "https://nieuweinstituut.nl/en"]],
  },
  {
    slug: "column",
    title: "Column",
    homeImage: "column-studio.webp",
    homeVideo: "column-preview.mp4",
    kicker: "Modular light object",
    intro: "A modular aluminium structure that combines LED light, optical surfaces and a changing visual presence.",
    year: "2026",
    role: "Concept, visual behaviour and presentation",
    client: "GLINA³, developed with Timo Bega",
    story: [
      "Column explores how a simple vertical structure can change through programmed light and optical material. The object brings an architectural scale into a compact, movable form.",
      "My role centred on concept, visual behaviour and presentation; technical development and the physical build were collaborative.",
    ],
    deliverables: ["Concept and visual direction", "Light behaviour and optical studies", "Presentation and communication", "Collaborative prototyping"],
    media: [
      ["column-preview.mp4", "Column modular light object in motion", "Column changing through light and optical movement.", "video"],
      ["column-studio.webp", "Column modular light object in the GLINA³ studio", "The aluminium structure during development in Amsterdam."],
      ["kolonna-structure.webp", "Full modular Column light structure", "The complete modular light object."],
      ["kolonna-detail.webp", "Column light and optical surface detail", "Light and optical-surface detail."],
    ],
    links: [["View MADART Foundation Season 03: INLINE", "https://madartfoundation.com/season-03-inline.html"], ["View the opening programme", "https://www.eventbrite.nl/e/opening-night-madart-foundation-season-03-inline-during-ade-tickets-2003179592084"]],
  },
];

const principal = projects.slice(0, 6);
const notes = projects.slice(6);

const esc = (s) => String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const asset = (path, depth = 1) => `${depth ? "../" : ""}assets/media/${path}`;

function head({ title, description, depth = 0, image = "glina-objects.webp", keywords = "" }) {
  const prefix = depth ? "../" : "";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <meta name="theme-color" content="#f7f6f2">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="keywords" content="Aleksandra Chargeishvili, Amsterdam artist, Amsterdam designer, creative producer, industrial design, ${esc(keywords)}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${prefix}assets/media/${esc(image)}">
  <link rel="icon" href="${prefix}favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="${prefix}styles-corporate.css">
</head>`;
}

function nav(depth = 0) {
  const home = depth ? "../index.html" : "index.html";
  return `<header class="site-header">
    <nav class="shell nav" aria-label="Primary navigation">
      <a class="brand" href="${home}">Aleksandra Chargeishvili</a>
      <div class="nav-links"><a href="${home}#work">work</a><a href="${home}#notes">notes</a><a href="${home}#about">about</a><a href="${home}#contact">contact</a></div>
    </nav>
  </header>`;
}

function footer(depth = 0) {
  const prefix = depth ? "../" : "";
  return `<footer class="site-footer"><div class="shell">Aleksandra Chargeishvili · Amsterdam · <span data-year>2026</span></div></footer>
  <script src="${prefix}script.js"></script>`;
}

function mediaMarkup(item) {
  const [file, alt, caption, kind] = item;
  if (kind === "video") {
    return `<figure class="media wide"><video controls muted loop playsinline preload="metadata" aria-label="${esc(alt)}"><source src="${asset(file)}" type="video/mp4"></video><figcaption>${esc(caption)}</figcaption></figure>`;
  }
  return `<figure class="media"><img src="${asset(file)}" alt="${esc(alt)}" loading="lazy" decoding="async"><figcaption>${esc(caption)}</figcaption></figure>`;
}

function projectPage(project, index) {
  const next = projects[(index + 1) % projects.length];
  const metrics = project.metrics?.length ? `<div class="metric-grid">${project.metrics.map(([value, label]) => `<div class="metric"><strong>${esc(value)}</strong><span>${esc(label)}</span></div>`).join("")}</div>` : "";
  const links = project.links?.length ? `<div class="external-links"><strong>Elsewhere:</strong> ${project.links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`).join(" · ")}</div>` : "";
  const projectImage = project.homeImage ?? project.media.find((item) => item[3] !== "video")?.[0] ?? "glina-objects.webp";
  const structuredData = { "@context": "https://schema.org", "@type": "CreativeWork", name: project.title, description: project.intro, creator: { "@type": "Person", name: "Aleksandra Chargeishvili" }, dateCreated: project.year, locationCreated: project.client, keywords: `${project.kicker}, ${project.role}` };
  return `${head({ title: `${project.title} — Aleksandra Chargeishvili`, description: project.intro, depth: 1, image: projectImage, keywords: `${project.title}, ${project.kicker}, ${project.client}` })}
<body>
  ${nav(1)}
  <main>
    <section class="project-hero"><div class="shell">
      <a class="back" href="../index.html#work">← all work</a>
      <div class="project-hero-grid">
        <div><p class="eyebrow">${esc(project.kicker)}</p><h1>${esc(project.title)}</h1><p class="project-intro">${esc(project.intro)}</p></div>
        <ul class="facts"><li><strong>Year</strong><span>${esc(project.year)}</span></li><li><strong>Role</strong><span>${esc(project.role)}</span></li><li><strong>For</strong><span>${esc(project.client)}</span></li></ul>
      </div>
    </div></section>
    <section class="project-body"><div class="shell">
      <div class="story-grid"><h2>What was done</h2><div class="story">${project.story.map((p) => `<p>${esc(p)}</p>`).join("")}<h2>Delivered</h2><ul class="deliverables">${project.deliverables.map((d) => `<li>${esc(d)};</li>`).join("")}</ul></div></div>
      ${metrics}
      <div class="gallery">${project.media.map(mediaMarkup).join("")}</div>
      ${links}
      <div class="next-project"><a href="../index.html#work">← selected work</a><a href="${next.slug}.html">next: ${esc(next.title)} →</a></div>
    </div></section>
  </main>
  ${footer(1)}
  <script type="application/ld+json">${JSON.stringify(structuredData)}</script>
</body>
</html>`;
}

function homePage() {
  const homeDescriptions = {
    glina: "Ceramic 3D printing, identity, packaging, content and the audience around a small studio.",
    "made-after-demand": "An order interface that became a public installation.",
    "dante6-glue": "Light, graphics, people and three days inside a fashion store.",
    "maryna-krylova": "A pianist’s visual world across concerts, images, tickets and email.",
    "weaving-narratives": "Twelve interviews, a 23-minute film and a publication about women’s industrial knowledge.",
    "ornament-as-operator": "Archival embroidery translated through code across three screens.",
    "industriemuseum-gent": "Letters, dyed yarn and two tapestries made on a programmable jacquard loom.",
    "design-biennale-rotterdam": "Nature interpreted through code, pen plotter and installation.",
    "dutch-design-week-class-2024": "Film, publication and woven research shown together at Klokgebouw in Eindhoven.",
    "digital-ornament": "An editorial investigation of surface, technology and visual culture.",
    packaging: "Boxes, labels and visual systems made physical.",
    publications: "Research, images and type assembled for print.",
    workshops: "Archives, AI and clay as ways to enter an idea together.",
    column: "A modular aluminium light object with a changing optical surface.",
  };
  const homeRow = (p, index) => {
    const image = p.homeImage ?? p.media[0][0];
    const preview = p.homeVideo ?? image;
    const previewType = p.homeVideo ? "video" : "image";
    return `<article class="work-item" data-preview="assets/media/${preview}" data-preview-type="${previewType}" data-caption="${esc(p.title)}"><span class="work-number">${String(index + 1).padStart(2, "0")}</span><a class="work-title" href="projects/${p.slug}.html">${esc(p.title)}</a><span class="work-description">${esc(homeDescriptions[p.slug] ?? p.kicker)}</span><span class="work-year">${esc(p.year)}</span><img class="mobile-thumb" src="assets/media/${image}" alt="" loading="lazy" decoding="async"></article>`;
  };
  const principalRows = principal.map(homeRow).join("");
  const noteRows = notes.map((p, index) => homeRow(p, index + principal.length)).join("");
  return `${head({ title: "Aleksandra Chargeishvili — artist, designer & creative producer", description: "Portfolio of Amsterdam-based artist, designer and creative producer Aleksandra Chargeishvili: films, objects, installations, websites, publications and public work." })}
<body>
  ${nav(0)}
  <main>
    <section class="shell hero">
      <div><p class="eyebrow">designer · creative producer · Amsterdam</p><h1>Aleksandra Chargeishvili</h1><p class="lead">Amsterdam-based designer and creative producer.</p><p class="hero-note">I work between emerging technologies and visual communication, finding clear visual forms for complex ideas and creating experiences people can enter, use and remember.</p><p class="availability">currently available for a new role · Amsterdam · no sponsorship needed</p></div>
      <figure class="hero-portrait"><img src="assets/media/aleksandra-profile.webp" alt="Portrait of Aleksandra Chargeishvili"><figcaption class="caption">hello, I’m Aleksandra ♡</figcaption></figure>
    </section>

    <section class="section"><div class="shell"><div class="section-head"><h2>now / soon ✶</h2><p class="tiny">October 2026</p></div>
      <div class="current"><img src="assets/media/column-studio.webp" alt="Column modular light object"><div><h3>MADART Foundation — Season 03: INLINE</h3><p>Showing Column at NIO House Amsterdam · 21 October 2026–17 January 2027. Opening night: 21 October, 18:00–21:00.</p></div><a class="date-stamp" href="https://madartfoundation.com/season-03-inline.html" target="_blank" rel="noopener noreferrer">programme ↗</a></div>
    </div></section>

    <section class="section" id="work"><div class="shell"><div class="section-head"><h2>selected work — hover / click around</h2><p class="tiny">six longer stories</p></div><div class="work-index">${principalRows}</div></div></section>

    <section class="section" id="notes"><div class="shell"><div class="section-head"><h2>more things I have made</h2><p class="tiny">shorter notes</p></div><div class="work-index">${noteRows}</div></div></section>

    <section class="section"><div class="shell"><div class="section-head"><h2>some numbers, because projects also live in the real world :)</h2></div><ul class="facts-line"><li><strong>7.2K</strong> audience built from zero</li><li><strong>2.6M</strong> views on one Reel</li><li><strong>150–300K</strong> monthly reach</li><li><strong>~30</strong> qualified enquiries</li><li><strong>€20K</strong> event budget</li><li><strong>12 / 23 min</strong> interviews / film</li></ul></div></section>

    <section class="section" id="about"><div class="shell about-grid"><div><p class="eyebrow">about</p><h2>I am an Amsterdam-based designer and creative producer making digital content, visual identities, websites, publications, objects and installations.</h2><p>I work between emerging technologies and visual communication, finding clear visual forms for complex ideas and creating experiences people can enter, use and remember.</p></div><ul class="skills"><li>moving image, editing & visual storytelling;</li><li>art direction, identity & graphic design;</li><li>websites, interfaces & interactive work;</li><li>objects, materials, clay & textile;</li><li>exhibitions, events & workshops;</li><li>content, audience & analytics;</li><li>Figma, AI tools, Adobe CC, Meta, Eventbrite & Notion;</li></ul></div></section>

    <section class="section" id="contact"><div class="shell contact-block"><h2>say hello ♡</h2><div class="contact-links"><p><a href="mailto:${contact.email}">${contact.email}</a></p><p><a href="${contact.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></p></div></div></section>
  </main>
  <figure class="hover-preview" aria-hidden="true"><img src="assets/media/glina-objects.webp" alt=""><video muted loop playsinline preload="metadata"></video><figcaption></figcaption></figure>
  ${footer(0)}
  <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: "Aleksandra Chargeishvili", jobTitle: "Artist, Designer and Creative Producer", address: { "@type": "PostalAddress", addressLocality: "Amsterdam", addressCountry: "NL" }, email: `mailto:${contact.email}`, sameAs: [contact.linkedin] })}</script>
</body>
</html>`;
}

await rm(join(root, "projects"), { recursive: true, force: true });
await mkdir(join(root, "projects"), { recursive: true });
await writeFile(join(root, "index.html"), homePage());
for (const [index, project] of projects.entries()) {
  await writeFile(join(root, "projects", `${project.slug}.html`), projectPage(project, index));
}

await writeFile(join(root, "robots.txt"), "User-agent: *\nAllow: /\n");
await writeFile(join(root, "llms.txt"), `# Aleksandra Chargeishvili\n\nAmsterdam-based artist, designer and creative producer. Portfolio covering films, objects, installations, websites, publications, workshops, exhibitions, visual identity and audience work.\n\nContact: ${contact.email}\nLinkedIn: ${contact.linkedin}\n`);
const siteBase = "https://YOUR-GITHUB-USERNAME.github.io/aleksandra-chargeishvili-portfolio";
const sitemapPaths = ["", ...projects.map((project) => `projects/${project.slug}.html`)];
await writeFile(join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapPaths.map((path) => `  <url><loc>${siteBase}/${path}</loc><lastmod>2026-10-16</lastmod></url>`).join("\n")}\n</urlset>\n`);
await writeFile(join(root, "404.html"), `${head({ title: "Page not found — Aleksandra Chargeishvili", description: "Return to Aleksandra Chargeishvili’s portfolio." })}<body>${nav(0)}<main><section class="shell hero"><div><p class="eyebrow">404</p><h1>This page wandered off.</h1><p class="lead">The portfolio is still here.</p><p><a href="index.html">← return home</a></p></div></section></main>${footer(0)}</body></html>`);

console.log(`Built homepage and ${projects.length} project pages.`);
