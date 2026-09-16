import Link from "next/link";
import ProjectVisual from "./ProjectVisual";

type Project = {
  number: string;
  name: string;
  role: string;
  intro: string;
  overview: string;
  contributions: string[];
  stack: string[];
  highlights: { title: string; text: string }[];
  note?: string;
  architecture?: { label: string; items: string[] }[];
  decisions?: { problem: string; approach: string; result: string }[];
};

export const projects: Record<string, Project> = {
  "evolo-ai": {
    number: "01",
    name: "Evolo AI",
    role: "Full-Stack / React Native Engineer",
    intro: "A production product where I worked across mobile, web, backend APIs, authentication, messaging, integrations, and data architecture.",
    overview: "I worked on both the Evolo Student and Evolo Instructor products as part of a five-developer team. My work covered React Native, React web, Node.js, Express, TypeScript, Redux Toolkit, API work, Firebase, authentication, messaging, and third-party integrations.",
    contributions: [
      "Built and maintained production interfaces with React and React Native.",
      "Developed and integrated APIs using Node.js, Express, and TypeScript.",
      "Worked with JWT authentication, messaging, push notifications, and Firebase services.",
      "Designed MongoDB data structures and personally wrote the migration code from Firebase to MongoDB.",
      "Worked across both student and instructor experiences and collaborated through GitHub."
    ],
    stack: ["React Native", "React", "Node.js", "Express", "TypeScript", "Redux Toolkit", "MongoDB", "Firebase", "REST APIs", "JWT"],
    highlights: [
      { title: "Firebase → MongoDB", text: "A major technical contribution was planning the MongoDB structure and writing the migration code to move existing application data out of Firebase." },
      { title: "Full-stack ownership", text: "The role was not limited to UI. I worked across frontend, backend APIs, authentication, data, integrations, and mobile application flows." },
      { title: "Two product experiences", text: "I contributed to both the Evolo Student and Evolo Instructor applications, giving me experience working with different product workflows in the same ecosystem." }
    ],
    architecture: [
      { label: "Client", items: ["React Native", "React Web", "Redux Toolkit"] },
      { label: "Application", items: ["Node.js", "Express", "TypeScript", "REST APIs"] },
      { label: "Data & Services", items: ["MongoDB", "Firebase", "JWT", "Push / Messaging"] }
    ],
    decisions: [
      { problem: "The application data needed to move from Firebase to MongoDB.", approach: "I first worked through the target MongoDB structure, then wrote migration code to transform and transfer the existing data into the new model.", result: "The migration became a controlled engineering task instead of manually rebuilding application data." },
      { problem: "Student and instructor workflows lived in the same product ecosystem but had different UI and data requirements.", approach: "I worked across both applications while keeping API contracts, state management, and reusable frontend patterns in mind.", result: "I gained practical experience maintaining multiple product experiences without treating them as isolated apps." }
    ]
  },
  "powerhouse": {
    number: "02", name: "Powerhouse.so", role: "Frontend Engineer",
    intro: "Production frontend engineering focused on React, Next.js, responsive UI, landing pages, and API integrations.",
    overview: "I worked primarily on the frontend side of the product as part of a larger development team. The work involved turning product requirements and designs into responsive interfaces and connecting those interfaces to APIs.",
    contributions: ["Built and refined production UI with React and Next.js.", "Implemented responsive layouts and reusable frontend patterns.", "Integrated frontend screens with backend APIs.", "Worked on landing pages and product-facing web experiences.", "Collaborated with a larger engineering team and maintained existing production code."],
    stack: ["React", "Next.js", "TypeScript", "REST APIs", "Responsive UI"],
    highlights: [
      { title: "Frontend focus", text: "The strongest part of my contribution here was production frontend implementation rather than backend ownership." },
      { title: "Production constraints", text: "The work involved adapting to an existing product, codebase, design direction, and team workflow rather than building an isolated demo." },
      { title: "API-driven UI", text: "I regularly connected frontend experiences to APIs and handled the UI states needed around those integrations." }
    ]
  },
  "hammer": {
    number: "03", name: "Hammer.work", role: "Frontend Engineer",
    intro: "Production web frontend work across React, Next.js, responsive interfaces, landing pages, and API integrations.",
    overview: "My contribution was primarily frontend engineering within a larger team. I worked on web interfaces, responsive layouts, landing pages, and API-connected experiences while working inside an existing production codebase.",
    contributions: ["Implemented frontend UI using React and Next.js.", "Built responsive page layouts and reusable interface pieces.", "Connected UI flows with APIs and handled frontend data states.", "Worked on landing pages and product-facing experiences.", "Collaborated with a larger development team on production work."],
    stack: ["React", "Next.js", "TypeScript", "REST APIs", "Responsive UI"],
    highlights: [
      { title: "UI engineering", text: "The role centered on translating requirements and designs into polished, maintainable frontend experiences." },
      { title: "Existing codebase", text: "I worked within a real product environment, balancing new UI work with the patterns and constraints already present in the application." },
      { title: "API integration", text: "Frontend screens were connected to application APIs rather than existing as static pages." }
    ]
  },
  "sara": {
    number: "04", name: "SARA Patient App", role: "React Native / BLE Engineer",
    intro: "A React Native health application connecting Bluetooth-enabled devices and turning device measurements into a usable patient experience.",
    overview: "I worked on the React Native application and its device-integration layer, including Bluetooth-connected health devices, measurement screens, device selection flows, history views, and metric presentation.",
    contributions: ["Built React Native screens for blood pressure, sleep, scale, and oximeter experiences.", "Integrated Bluetooth devices using react-native-ble-plx where applicable.", "Worked with device-specific modules and event-driven measurement flows.", "Implemented device selection, connection, measurement, and history UI patterns.", "Built metric presentation and calculated health values such as pulse pressure and MAP from available readings."],
    stack: ["React Native", "TypeScript", "BLE", "react-native-ble-plx", "Native Modules", "Health Devices"],
    highlights: [
      { title: "Device connectivity", text: "The application connects to multiple health devices over Bluetooth and presents their measurements inside a unified mobile experience." },
      { title: "Real-time data", text: "Device integrations require event-driven flows for connection state, measurement updates, and user feedback." },
      { title: "Technical depth", text: "This project demonstrates mobile engineering beyond ordinary UI work, including BLE workflows and integration with device-specific modules." }
    ],
    note: "This case study intentionally focuses on the React Native and integration work I can explain confidently, without overstating platform-native implementation details."
  }
};

function Architecture({ project }: { project: Project }) {
  if (!project.architecture) return null;
  return <section className="case-section architecture-section"><div className="container"><span className="section-number">05 / ARCHITECTURE</span><div className="architecture-intro"><h2>How the pieces <em>fit together.</em></h2><p>At a high level, this is how I think about the product layers and the responsibilities between them.</p></div><div className="architecture-flow">{project.architecture.map((layer, index) => <div className="architecture-layer" key={layer.label}><div className="architecture-label">0{index + 1}<span>{layer.label}</span></div><div className="architecture-items">{layer.items.map(item => <span key={item}>{item}</span>)}</div>{index < project.architecture!.length - 1 && <div className="architecture-arrow">↓</div>}</div>)}</div></div></section>;
}

function Decisions({ project }: { project: Project }) {
  if (!project.decisions) return null;
  return <section className="case-section container decisions-section"><span className="section-number">06 / ENGINEERING THINKING</span><h2>Problems I <em>solved.</em></h2><div className="decision-list">{project.decisions.map((d, i) => <article key={d.problem}><div className="decision-number">0{i + 1}</div><div><span>PROBLEM</span><p>{d.problem}</p></div><div><span>APPROACH</span><p>{d.approach}</p></div><div><span>RESULT</span><p>{d.result}</p></div></article>)}</div></section>;
}

export default function ProjectPage({ project, slug }: { project: Project; slug: string }) {
  const next = slug === "evolo-ai" ? ["/work/powerhouse", "Powerhouse.so"] : slug === "powerhouse" ? ["/work/hammer", "Hammer.work"] : slug === "hammer" ? ["/work/sara", "SARA Patient App"] : ["/work/evolo-ai", "Evolo AI"];
  return <main>
    <nav className="nav container"><Link className="brand" href="/"><span className="brand-mark">J</span><span>Jawad</span></Link><Link className="back-link" href="/#work">← Back to work</Link><a className="nav-cta" href="/#contact">Let&apos;s talk <span>↗</span></a></nav>
    <section className="case-hero container"><div className="case-hero-copy"><span className="section-number">{project.number} / CASE STUDY</span><span className="case-role">{project.role}</span><h1>{project.name}</h1><p>{project.intro}</p><div className="case-tags">{project.stack.slice(0, 6).map(item => <span key={item}>{item}</span>)}</div></div><ProjectVisual slug={slug} /></section>
    <section className="case-section container case-overview"><div><span className="section-number">01 / OVERVIEW</span><h2>What I <em>worked on.</em></h2></div><p>{project.overview}</p></section>
    <section className="case-section case-dark"><div className="container case-two-col"><div><span className="section-number">02 / CONTRIBUTION</span><h2>My role<br /><em>in the product.</em></h2></div><ul className="contribution-list">{project.contributions.map(item => <li key={item}><span>+</span>{item}</li>)}</ul></div></section>
    <section className="case-section container"><div className="section-number">03 / TECHNICAL HIGHLIGHTS</div><div className="highlight-grid">{project.highlights.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
    <section className="case-section container stack-section"><div><span className="section-number">04 / STACK</span><h2>Tools I <em>used.</em></h2></div><div className="stack-list">{project.stack.map(item => <span key={item}>{item}</span>)}</div></section>
    <Architecture project={project} />
    <Decisions project={project} />
    {project.note && <section className="case-note container"><strong>Scope note</strong><p>{project.note}</p></section>}
    <section className="next-project container"><span className="section-number">NEXT</span><Link href={next[0]}><span>Explore another project</span><strong>{next[1]} ↗</strong></Link></section>
    <footer className="footer container"><span>© 2026 Jawad</span><span>Built with Next.js</span></footer>
  </main>;
}
