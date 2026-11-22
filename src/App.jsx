import React, { useState } from "react";
import {
  ArrowUpRight, Mail, Download, Menu, X,
  Code2, Database, BrainCircuit, Layers3, ExternalLink, MapPin,
  GraduationCap, BriefcaseBusiness, Award, FileText, ChevronRight
} from "lucide-react";

const profile = {
  name: "Alluri Roshitha",
  email: "roshitha.alluri9@gmail.com",
  phone: "+91 8106646227",
  linkedin: "https://linkedin.com/in/RoshithaAlluri",
  github: "https://github.com/RoshithaAlluri"
};

const skills = [
  { title: "Programming", items: ["Java", "SQL", "JavaScript"], icon: Code2 },
  { title: "Web & Java", items: ["React.js", "HTML", "CSS", "JDBC", "Servlets"], icon: Layers3 },
  { title: "Databases", items: ["MySQL", "MongoDB"], icon: Database },
  { title: "Core Concepts & Tools", items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "GitHub", "VS Code", "n8n"], icon: BrainCircuit }
];

const projects = [
  {
    number: "01",
    title: "AI-Powered Healthcare Prediction",
    description: "A symptom-based disease prediction and recommendation application combining machine learning with expert-system logic for severity assessment and automated medication reminders.",
    tags: ["Python", "Machine Learning", "React", "Healthcare"],
    link: "https://github.com/RoshithaAlluri/Capstone_Healthcare_Project",
    linkText: "Explore on GitHub"
  },
  {
    number: "02",
    title: "Candidate Management System",
    description: "A full-stack candidate management application with CRUD operations, built using Java Servlets, JDBC and MySQL, with integrated frontend, backend and database layers.",
    tags: ["Java", "Servlets", "JDBC", "MySQL"],
    link: "https://github.com/RoshithaAlluri/Candidate_Management_Wipro",
    linkText: "Explore on GitHub"
  },
  {
    number: "03",
    title: "Online Quiz Management System",
    description: "A web-based quiz application featuring dynamic question retrieval, automatic score evaluation and database-driven quiz management.",
    tags: ["Java", "HTML", "CSS", "MySQL"],
    link: "https://github.com/RoshithaAlluri/Online_Quiz_Management_System",
    linkText: "Explore on GitHub"
  }
];

const certifications = [
  ["Oracle Java Explorer Badge", "Oracle", "August 2026"],
  ["AI Fluency: Framework and Foundations", "Anthropic Academy", "June 2026"],
  ["Database Management Systems", "NPTEL", "September 2025"],
  ["Programming in Java", "NPTEL", "May 2025"],
  ["Problem Solving", "HackerRank", "February 2025"]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navItems = ["About", "Skills", "Projects", "Experience", "Achievements", "Contact"];

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">R.</span><span>roshitha<span className="brand-dot">.</span></span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21}/> : <Menu size={21}/>}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-contact" href={`mailto:${profile.email}`} onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> COMPUTER SCIENCE UNDERGRADUATE <span className="eyebrow-line"/></div>
            <h1>Hi, I'm<br/><span className="gradient-text">Roshitha.</span></h1>
            <h3 className="hero-role">Problem Solving · AI/ML Enthusiast · Java Full Stack</h3>
            <p className="hero-description">I'm a Computer Science undergraduate at the Institute of Aeronautical Engineering, Hyderabad, with a CGPA of 9.02. I enjoy building practical applications using Java, web technologies and databases, and exploring how AI can solve real-world problems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-secondary" href="/Roshitha_Resume.pdf" target="_blank" rel="noreferrer"><Download size={16}/> Download resume</a>
            </div>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={17}/> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={17}/> LinkedIn</a>
              <a href={`mailto:${profile.email}`}><Mail size={17}/> Email</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-glow"/>
            <div className="profile-card">
              <div className="card-top"><span>DEVELOPER PROFILE</span><span className="live-dot"/></div>
              <div className="avatar"><img src="/profile.jpg" alt="Alluri Roshitha" /></div>
              <h2>Alluri Roshitha</h2>
              <p className="profile-role">Java · Full Stack · AI/ML</p>
              <div className="profile-divider"/>
              <div className="profile-detail"><GraduationCap size={16}/><span>B.Tech CSE · 2027</span></div>
              <div className="profile-detail"><MapPin size={16}/><span>Hyderabad, India</span></div>
              <div className="profile-detail"><Award size={16}/><span>CGPA 9.02 / 10</span></div>
              <div className="card-bottom"><span>OPEN TO OPPORTUNITIES</span><span className="tiny-arrow">↗</span></div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE</a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading"><span className="section-kicker">ABOUT</span><h2>A little about <span className="gradient-text">me.</span></h2></div>
          <div className="about-grid">
            <div className="about-text">
              <p className="lead">I enjoy creating software that solves real problems — from backend systems to intelligent applications.</p>
              <p>I'm pursuing a Bachelor of Technology in Computer Science and Engineering at the Institute of Aeronautical Engineering, Hyderabad. My interests include Java development, full-stack web technologies, databases and applied machine learning.</p>
              <p>Through internships, academic projects and research, I've gained hands-on experience building and connecting application components. I'm always curious to learn, improve and take on meaningful challenges.</p>
            </div>
            <div className="stats-grid">
              <div className="stat-card"><strong>9.02</strong><span>CGPA / 10</span></div>
              <div className="stat-card"><strong>2027</strong><span>Graduating</span></div>
              <div className="stat-card"><strong>03</strong><span>Featured projects</span></div>
              <div className="stat-card"><strong>01</strong><span>Internship</span></div>
            </div>
          </div>
          <div className="education-card">
            <div className="education-icon"><GraduationCap size={22}/></div>
            <div><span className="muted-label">EDUCATION</span><h3>Institute of Aeronautical Engineering</h3><p>B.Tech in Computer Science and Engineering · Hyderabad</p></div>
            <div className="education-meta"><strong>9.02 / 10</strong><span>Expected Sept. 2027</span></div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading"><span className="section-kicker">TOOLKIT</span><h2>Skills & <span className="gradient-text">technologies.</span></h2><p className="section-subtitle">The tools and concepts I use to bring ideas to life.</p></div>
          <div className="skills-grid">
            {skills.map(({title, items, icon: Icon}) => <article className="skill-card" key={title}>
              <div className="skill-icon"><Icon size={21}/></div><h3>{title}</h3>
              <div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
            </article>)}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading"><span className="section-kicker">SELECTED WORK</span><h2>Projects I've <span className="gradient-text">built.</span></h2><p className="section-subtitle">A selection of academic and practical work from my development journey.</p></div>
          <div className="projects-grid">
            {projects.map(project => <article className="project-card" key={project.number}>
              <div className="project-top"><span className="project-number">{project.number} / PROJECT</span><a href={project.link} target="_blank" rel="noreferrer" aria-label="Open GitHub"><ArrowUpRight size={20}/></a></div>
              <div className="project-art"><div className="art-orbit orbit-a"/><div className="art-orbit orbit-b"/><div className="art-symbol">{project.number === "01" ? <BrainCircuit size={42}/> : project.number === "02" ? <Database size={42}/> : <FileText size={42}/>}</div></div>
              <h3>{project.title}</h3><p>{project.description}</p>
              <div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkText} <ExternalLink size={14}/></a>
            </article>)}
          </div>
          <p className="note">Note: Replace the GitHub links above with the direct repository URLs for each project before publishing.</p>
        </section>

        <section className="section" id="experience">
          <div className="section-heading"><span className="section-kicker">EXPERIENCE</span><h2>Where I've <span className="gradient-text">worked.</span></h2></div>
          <article className="experience-card">
            <div className="experience-icon"><BriefcaseBusiness size={22}/></div>
            <div className="experience-main"><div className="experience-title"><div><span className="muted-label">INTERNSHIP · PAID</span><h3>Backend Developer Intern</h3><p>S2S SOFT SOL</p></div><span className="date-pill">May 2026 — June 2026</span></div>
              <ul><li>Developed CRUD operations for an Employee Management System using Java, JDBC, Servlets/JSP and MySQL.</li><li>Tested backend functionalities and collaborated using Git/GitHub throughout development.</li></ul>
              <div className="tag-list"><span className="tag">Java</span><span className="tag">JDBC</span><span className="tag">Servlets/JSP</span><span className="tag">MySQL</span><span className="tag">GitHub</span></div>
            </div>
          </article>
        </section>

        <section className="section achievements-section" id="achievements">
          <div className="section-heading"><span className="section-kicker">RECOGNITION</span><h2>Achievements & <span className="gradient-text">learning.</span></h2></div>
          <article className="publication-card">
            <div className="publication-icon"><Award size={23}/></div>
            <div><span className="muted-label">RESEARCH PUBLICATION · JULY 2026</span><h3>Severity-Aware Hybrid Framework for Symptom-Based Disease Prediction Using Weighted Symptom Analysis</h3><p>Accepted and presented at AI-PTIS 2026. Accepted for publication in AIP Conference Proceedings (Scopus Indexed); proceedings under production.</p></div>
          </article>
          <div className="cert-grid">
            {certifications.map(([name, org, date]) => <div className="cert-card" key={name}><div className="cert-icon"><Award size={17}/></div><div><h4>{name}</h4><p>{org}</p><span>{date}</span></div></div>)}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-panel">
            <span className="section-kicker">GET IN TOUCH</span>
            <h2>Have an opportunity<br/>or idea? <span className="gradient-text">Let's connect.</span></h2>
            <p>I'm interested in opportunities to learn, contribute and build meaningful software. Feel free to reach out.</p>
            <a className="button button-primary" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={17}/></a>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}><Mail size={17}/>{profile.email}</a>
              <a href={`tel:${profile.phone.replaceAll(" ", "")}`}><span className="phone-symbol">☎</span>{profile.phone}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={17}/>LinkedIn <ArrowUpRight size={13}/></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={17}/>GitHub <ArrowUpRight size={13}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">R.</span><span>roshitha<span className="brand-dot">.</span></span></a><span>Designed & built with care · © {new Date().getFullYear()} Alluri Roshitha</span><a href="#home" className="back-top">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
