import Link from "next/link";

const projects = [
  {
    number: "01",
    name: "Evolo AI",
    role: "Full-Stack / React Native",
    description:
      "Production education and career platform work across React Native, React web, Node.js, Express, TypeScript, APIs, authentication, messaging, and a Firebase-to-MongoDB migration.",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    number: "02",
    name: "Powerhouse.so",
    role: "Frontend Engineer",
    description:
      "Production frontend work focused on React, Next.js, responsive UI, landing pages, and API integrations within a larger product team.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    number: "03",
    name: "Hammer.work",
    role: "Frontend Engineer",
    description:
      "Production web frontend work spanning React, Next.js, responsive interfaces, landing pages, and API integrations.",
    tags: ["React", "Next.js", "APIs"],
  },
  {
    number: "04",
    name: "SARA Patient App",
    role: "React Native / BLE",
    description:
      "Health-device application integrating Bluetooth-connected devices and presenting real-time measurements through a React Native experience.",
    tags: ["React Native", "BLE", "Health Devices"],
  },
];

const stack = [
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Express",
  "MongoDB",
  "REST APIs",
];

export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <Link className="brand" href="/">
          <span className="brand-mark">J</span>
          <span>Jawad</span>
        </Link>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-cta" href="#contact">
          Let&apos;s talk <span>↗</span>
        </a>
      </nav>

      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Available for opportunities
          </div>

          <h1>
            I build
            <br />
            <em>real products.</em>
          </h1>

          <p className="hero-text">
            Full-Stack &amp; React Native Engineer building production web and
            mobile applications with React, Next.js, Node.js, TypeScript, and
            real-world integrations.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View my work <span>↓</span>
            </a>
            <a className="button button-secondary" href="#contact">
              Get in touch <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="orbit-core">
            <span>JS</span>
          </div>
          <div className="orbit-label label-react">React</div>
          <div className="orbit-label label-node">Node</div>
          <div className="orbit-label label-native">RN</div>
          <div className="orbit-label label-ts">TS</div>
        </div>
      </section>

      <section className="ticker" aria-label="Technology stack">
        <div className="ticker-track">
          {[...stack, ...stack].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item} <b>✦</b>
            </span>
          ))}
        </div>
      </section>

      <section id="work" className="section container">
        <div className="section-heading">
          <div>
            <span className="section-number">01 / SELECTED WORK</span>
            <h2>Production work,<br /><em>not just demos.</em></h2>
          </div>
          <p>
            A selection of products I&apos;ve contributed to across full-stack
            development, frontend engineering, React Native, and device
            integrations.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <Link href={`/work/${project.name === "Evolo AI" ? "evolo-ai" : project.name === "Powerhouse.so" ? "powerhouse" : project.name === "Hammer.work" ? "hammer" : "sara"}`} className="project-card" key={project.number}>
              <div className="project-top">
                <span>{project.number}</span>
                <span>↗</span>
              </div>
              <div className="project-body">
                <span className="project-role">{project.role}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container about-grid">
          <div>
            <span className="section-number">02 / ABOUT</span>
            <h2>Curious about<br /><em>how things work.</em></h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m a software engineer focused on turning product
              requirements into reliable, polished applications.
            </p>
            <p>
              My experience spans frontend and full-stack web development,
              React Native applications, backend APIs, databases, third-party
              integrations, and Bluetooth-connected health devices.
            </p>
            <p>
              I care about clean architecture, practical solutions, and
              building software that works beyond the demo.
            </p>
          </div>
        </div>
      </section>

      
      <section className="scan-section container">
        <div className="section-kicker">RECRUITER SCAN</div>
        <div className="scan-grid">
          <div>
            <span className="scan-label">01</span>
            <h3>Full-stack delivery</h3>
            <p>React, React Native, Node.js, Express, TypeScript, APIs and data architecture.</p>
          </div>
          <div>
            <span className="scan-label">02</span>
            <h3>Production experience</h3>
            <p>Case studies are based on real product work rather than invented demo projects.</p>
          </div>
          <div>
            <span className="scan-label">03</span>
            <h3>Technical ownership</h3>
            <p>Strongest example: designing and writing the Firebase → MongoDB migration for Evolo AI.</p>
          </div>
        </div>
      </section>

<section id="contact" className="contact-section container">
        <span className="section-number">03 / CONTACT</span>
        <h2>Have a product<br /><em>worth building?</em></h2>
        <p>Let&apos;s talk about what you&apos;re working on.</p>
        <div className="contact-links">
          <a href="mailto:jawadulhassan18@gmail.com">Email ↗</a>
          <a href="https://www.linkedin.com/in/jawad-ul-hassan-9061441a2" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/Jawad207" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>

      <footer className="footer container">
        <span>© 2026 Jawad</span>
        <span>Built with Next.js</span>
      </footer>
    </main>
  );
}
