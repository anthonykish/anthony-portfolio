import { useEffect, useState } from "react";
import {
  FaPython,
  FaJs,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaJava,
  FaCode,
  FaMicrochip,
  FaAws,
  FaCss3Alt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import {
  SiDjango,
  SiMysql,
  SiPandas,
  SiJenkins,
  SiBootstrap,
  SiCplusplus,
  SiReact,
  SiHtml5,
  SiPytest
} from "react-icons/si";

export default function AnthonyKishPortfolio() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const typingWords = ["Python", "HTML", "Django", "SQL", "AWS", "Full-Stack Systems", "Automation"];

  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "C", icon: <FaCode /> },
        { name: "Java", icon: <FaJava /> },
        { name: "SQL", icon: <FaCode /> },
      ],
    },
    {
      category: "Web / Backend",
      skills: [
        { name: "Django", icon: <SiDjango /> },
        { name: "React", icon: <SiReact /> },
        { name: "REST APIs", icon: <FaCode /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ],
    },
    {
      category: "Data / Infrastructure",
      skills: [
        { name: "Pandas", icon: <SiPandas /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Jenkins", icon: <SiJenkins /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Linux", icon: <FaLinux /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Pytest", icon: <SiPytest /> },
      ],
    },
    {
      category: "Embedded / FPGA",
      skills: [
        { name: "Verilog", icon: <FaMicrochip /> },
        { name: "VHDL", icon: <FaCode /> },
        { name: "Vivado", icon: <FaMicrochip /> },
      ],
    },
  ];

  const projects = [
    {
      title: "Clinical Data Web Platform (MARL)",
      subtitle: "Full-stack web application",
      description:
        "Built a full-stack Django web application for clinical assessment data collection, reporting, and database management. Implemented autosave workflows, relational database design, Qualtrics data integration, secure magic-link authentication, and backend data processing pipelines.",
      tags: ["Python", "Django", "MySQL", "JavaScript", "Pandas", "AWS"],
    },
    {
      title: "Swarm Search and Rescue Robotics System",
      subtitle: "Robotics / distributed systems",
      description:
        "Developed a multi-robot swarm system using ROS2 and TurtleBots that collaboratively mapped environments using LiDAR, merged maps into a unified environment, performed object detection using Raspberry Pi cameras, and communicated with a central server through a web-based interface.",
      tags: ["ROS2", "Linux", "Python", "Robotics", "Networking", "SLAM"],
    },
    {
      title: "Automated Hardware Test Framework",
      subtitle: "Infrastructure / automation",
      description:
        "Developed automated testing frameworks for hardware interface modules using Python, pytest, Docker, and Jenkins CI/CD pipelines, reducing manual testing time and improving test coverage across multiple hardware modules.",
      tags: ["Python", "Pytest", "Docker", "Jenkins", "CI/CD"],
    },
  ];

  const experiences = [
    {
      title: "Software Engineer (Full Stack)",
      org: "Motion Analysis Research Laboratory",
      time: "Oct 2024 – Present",
      detail:
        "Developing a production-facing clinical data platform with autosave workflows, secure access, reporting, and backend data pipelines.",
    },
    {
      title: "Software Engineer Automation Intern",
      org: "North Atlantic Industries",
      time: "May 2025 – Aug 2025",
      detail:
        "Built automation frameworks, containerized test environments, and CI workflows for hardware validation.",
    },
    {
      title: "Lead Software Engineer",
      org: "Capstone Project",
      time: "Aug 2024 – May 2025",
      detail:
        "Led software development for a multi-robot mapping system with LiDAR merging, object detection, and secure web communication.",
    },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/anthonykish", icon: <FaGithub /> },
    { label: "LinkedIn", href: "https://linkedin.com/in/anthony-kish", icon: <FaLinkedin /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-300 selection:text-black scroll-smooth">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', sans-serif; background: #000; }

        .cosmos-bg {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 20% 15%, rgba(88, 28, 135, 0.35), transparent 24%),
            radial-gradient(circle at 80% 18%, rgba(29, 78, 216, 0.28), transparent 22%),
            radial-gradient(circle at 55% 55%, rgba(76, 29, 149, 0.18), transparent 28%),
            radial-gradient(circle at 25% 78%, rgba(14, 116, 144, 0.16), transparent 20%),
            linear-gradient(180deg, #02040a 0%, #030712 45%, #000000 100%);
        }

        .cosmos-bg::before,
        .cosmos-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .cosmos-bg::before {
          background-image:
            radial-gradient(2px 2px at 8% 15%, rgba(255,255,255,0.7), transparent 60%),
            radial-gradient(1.5px 1.5px at 18% 72%, rgba(255,255,255,0.5), transparent 60%),
            radial-gradient(2px 2px at 34% 27%, rgba(255,255,255,0.55), transparent 60%),
            radial-gradient(1.5px 1.5px at 49% 80%, rgba(255,255,255,0.6), transparent 60%),
            radial-gradient(2px 2px at 61% 22%, rgba(255,255,255,0.55), transparent 60%),
            radial-gradient(1.5px 1.5px at 73% 60%, rgba(255,255,255,0.45), transparent 60%),
            radial-gradient(2px 2px at 86% 30%, rgba(255,255,255,0.5), transparent 60%),
            radial-gradient(1.5px 1.5px at 92% 78%, rgba(255,255,255,0.5), transparent 60%);
          opacity: 0.9;
        }

        .cosmos-bg::after {
          background: linear-gradient(180deg, rgba(255,255,255,0.04), transparent 16%, transparent 84%, rgba(255,255,255,0.02));
        }

        .glass {
          background: rgba(8, 11, 24, 0.55);
          border: 1px solid rgba(167, 243, 208, 0.15);
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(10px);
        }

        .section-title {
          color: rgba(255,255,255,0.92);
          font-size: 0.98rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .soft-text {
          color: rgba(255,255,255,0.94);
          text-shadow: 0 0 22px rgba(255,255,255,0.04);
        }

        .muted {
          color: rgba(226,232,240,0.76);
        }

        .pill {
          border: 1px solid rgba(165, 180, 252, 0.2);
          background: rgba(255,255,255,0.03);
        }

        .timeline-line::before {
          content: '';
          position: absolute;
          left: 0.625rem;
          top: 1.9rem;
          bottom: -1.9rem;
          width: 1px;
          background: linear-gradient(to bottom, rgba(103,232,249,0.35), rgba(168,85,247,0.08));
        }
      `}</style>


      <div className="cosmos-bg">
        <aside className="fixed left-3 top-1/2 z-40 hidden -translate-y-1/2 md:flex">
          <div className="glass rounded-full px-2 py-3">
            <div className="flex flex-col items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white/85 transition hover:scale-105 hover:border-cyan-300/40 hover:bg-cyan-300/10"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </aside>

        <header className="sticky top-0 z-30 border-b border-white/8 bg-black/35 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
            <a href="#home" className="soft-text text-lg font-semibold tracking-wide">
              Anthony Kish
            </a>
            <nav className="hidden gap-6 text-sm text-white/75 md:flex">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="transition hover:text-cyan-200">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-5 pb-20 pt-8 sm:px-8 lg:px-10 lg:pt-12">
          <section className="min-h-screen flex items-center">
            <div className="w-full">
              <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
                <p className="mb-5 text-sm uppercase tracking-[0.28em] text-cyan-200/70">Software Engineer</p>
                <h1 className="soft-text text-5xl font-semibold leading-[0.95] sm:text-7xl md:text-8xl">
                  Anthony Kish
                </h1>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xl text-white/78 sm:text-3xl">
                  <span>Delivering in</span>
                  <TypingWord words={typingWords} />
                </div>
                <p className="muted mt-8 max-w-2xl text-base leading-8 sm:text-lg">
                  Backend and full-stack software engineer building data-driven web applications, secure workflows,
                  automation systems, and reliable backend pipelines with a focus on real-world impact.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="/Anthony Kish SWE Resume.pdf"
                    download
                    className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/18"
                  >
                    Download Resume
                  </a>
                  <a href="#projects" className="rounded-full border border-white/12 px-6 py-3 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/5">
                    View Projects
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="py-14">
            <div className="section-title">About</div>
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
              <div className="glass rounded-[2rem] p-8">
                <h2 className="soft-text text-2xl font-medium">About Me</h2>
                <div className="muted mt-5 space-y-5 text-[1.02rem] leading-8">
                  <p>
                    I am a software engineer focused on backend and full-stack development, with experience building
                    production-facing web workflows, database-backed systems, and automation tooling.
                  </p>
                  <p>
                    My work spans Django applications, MySQL-backed data platforms, Python data processing pipelines,
                    Dockerized testing environments, and AWS-supported deployments. I care about building software that
                    feels seamless to use and reliable behind the scenes.
                  </p>
                  <p>
                    I am currently completing my M.S. in Computer Engineering at Binghamton University and pursuing
                    software engineering opportunities, especially in backend, full-stack, and infrastructure-focused
                    roles.
                  </p>
                </div>
              </div>

              <div className="glass flex min-h-[320px] items-center justify-center rounded-[2rem] p-8">
                <div className="relative h-64 w-64">
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl"></div>
                  <img
                    src="/images/headshot.png"
                    alt="Anthony Kish"
                    className="relative h-64 w-64 rounded-full object-cover border border-cyan-200/20"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="py-14">
            <div className="section-title">Tech Stack</div>
            <div className="space-y-8">
              {skillCategories.map((group) => (
                <div key={group.category} className="glass rounded-[2rem] p-6 sm:p-8">
                  <h3 className="soft-text mb-5 text-xl font-medium">{group.category}</h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="pill flex flex-col items-center justify-center gap-3 rounded-2xl px-4 py-5 text-sm text-white/82 sm:text-base"
                      >
                        <span className="text-3xl text-cyan-200">
                          {skill.icon}
                        </span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="py-14">
            <div className="section-title">Projects</div>
            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="space-y-5">
                {projects.map((project) => (
                  <details key={project.title} className="glass group rounded-[2rem] p-6 open:border-cyan-300/25">
                    <summary className="list-none cursor-pointer">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="soft-text text-2xl font-medium">{project.title}</h3>
                          <p className="mt-1 text-sm uppercase tracking-[0.18em] text-cyan-200/65">{project.subtitle}</p>
                        </div>
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60 transition group-open:rotate-45">
                          +
                        </span>
                      </div>
                    </summary>
                    <p className="muted mt-5 text-base leading-8">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/72">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </details>
                ))}
              </div>

              <div id="experience" className="glass rounded-[2rem] p-6 sm:p-8">
                <div className="section-title !mb-5">Experience</div>
                <div className="space-y-8">
                  {experiences.map((item, index) => (
                    <div key={item.title} className={`relative pl-8 ${index < experiences.length - 1 ? 'timeline-line' : ''}`}>
                      <div className="absolute left-0 top-1.5 h-5 w-5 rounded-full border border-cyan-200/35 bg-cyan-300/10" />
                      <h3 className="soft-text text-lg font-medium">{item.title}</h3>
                      <div className="mt-1 text-sm text-cyan-100/75">{item.org}</div>
                      <div className="mt-1 text-sm text-white/50">{item.time}</div>
                      <p className="muted mt-3 text-sm leading-7">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-14">
            <div className="section-title">Get In Touch</div>
            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="glass rounded-[2rem] p-8">
                <h2 className="soft-text text-2xl font-medium">Let’s build something meaningful.</h2>
                <p className="muted mt-5 max-w-2xl text-base leading-8">
                  I’m actively looking for software engineering opportunities and always open to roles centered on
                  backend systems, full-stack development, platform engineering, or automation.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:anthonykish@outlook.com"
                  className="glass block rounded-2xl px-6 py-5 text-white/86 transition hover:border-cyan-300/30"
                >
                  anthonykish@outlook.com
                </a>
                <a
                  href="https://linkedin.com/in/anthony-kish"
                  target="_blank"
                  rel="noreferrer"
                  className="glass block rounded-2xl px-6 py-5 text-white/86 transition hover:border-cyan-300/30"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function TypingWord({ words }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 60 : 110;
    const pauseTime = 1200;

    let timeout;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words]);

  return (
    <span className="inline-flex min-w-[190px] sm:min-w-[240px] items-center border-b border-white/18 pb-1 text-cyan-100/95">
      <span>{displayText}</span>
      <span className="ml-1 inline-block h-[1.2em] w-[2px] animate-pulse bg-cyan-200/80" />
    </span>
  );
}