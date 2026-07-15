import { useEffect, useRef, useState } from "react";
import {
  FaPython,
  FaJs,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaCode,
  FaMicrochip,
  FaAws,
  FaGithub,
  FaLinkedin,
  FaDatabase,
  FaServer,
  FaBolt,
  FaChartArea,
  FaRobot,
} from "react-icons/fa";

import {
  SiTypescript,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiReactquery,
  SiReactrouter,
  SiReacthookform,
  SiZod,
  SiTailwindcss,
  SiShadcnui,
  SiRadixui,
  SiFastapi,
  SiDjango,
  SiSqlalchemy,
  SiPydantic,
  SiCelery,
  SiRedis,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiRailway,
  SiOpenai,
  SiPandas,
  SiPytest,
  SiVitest,
  SiTestinglibrary,
  SiRuff,
  SiPrecommit,
  SiSentry,
  SiRos,
} from "react-icons/si";

import { VscAzure } from "react-icons/vsc";

export default function AnthonyKishPortfolio() {
  const navItems = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const typingWords = ["React", "Next.js", "TypeScript", "FastAPI", "Azure", "AI Automation", "Full-Stack Systems"];

  const stats = [
    { value: 40, suffix: "+", label: "Features shipped" },
    { value: 10, suffix: "k+", label: "Invoices automated / mo" },
    { value: 62, suffix: "%", label: "Billing ops automated" },
    { value: 3, suffix: "", label: "Client platforms" },
  ];

  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "C", icon: <FaCode /> },
        { name: "SQL", icon: <FaDatabase /> },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "TanStack Query", icon: <SiReactquery /> },
        { name: "TanStack Router", icon: <SiReactrouter /> },
        { name: "Zustand", icon: <FaBolt /> },
        { name: "React Hook Form", icon: <SiReacthookform /> },
        { name: "Zod", icon: <SiZod /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "shadcn/ui", icon: <SiShadcnui /> },
        { name: "Radix UI", icon: <SiRadixui /> },
        { name: "Recharts", icon: <FaChartArea /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "SQLAlchemy", icon: <SiSqlalchemy /> },
        { name: "Alembic", icon: <FaServer /> },
        { name: "Pydantic", icon: <SiPydantic /> },
        { name: "Celery", icon: <SiCelery /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "Uvicorn", icon: <FaServer /> },
        { name: "REST APIs", icon: <FaCode /> },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "SQLite", icon: <SiSqlite /> },
      ],
    },
    {
      category: "Cloud / Infrastructure",
      skills: [
        { name: "Azure", icon: <VscAzure /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Railway", icon: <SiRailway /> },
      ],
    },
    {
      category: "AI / Data",
      skills: [
        { name: "OpenAI SDK", icon: <SiOpenai /> },
        { name: "Pandas", icon: <SiPandas /> },
      ],
    },
    {
      category: "Testing / Tooling",
      skills: [
        { name: "Pytest", icon: <SiPytest /> },
        { name: "Vitest", icon: <SiVitest /> },
        { name: "React Testing Library", icon: <SiTestinglibrary /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Ruff", icon: <SiRuff /> },
        { name: "pre-commit", icon: <SiPrecommit /> },
        { name: "Sentry", icon: <SiSentry /> },
      ],
    },
    {
      category: "Embedded / Systems",
      skills: [
        { name: "Linux", icon: <FaLinux /> },
        { name: "ROS2", icon: <SiRos /> },
        { name: "Verilog", icon: <FaMicrochip /> },
        { name: "VHDL", icon: <FaCode /> },
      ],
    },
  ];

  const projects = [
    {
      title: "AI Billing Automation Platform",
      subtitle: "Alai Partners · Document intelligence",
      icon: <SiOpenai />,
      gradient: "from-cyan-400/30 via-sky-500/20 to-blue-600/10",
      description:
        "Built end-to-end document-intelligence pipelines that automated 62% of client billing operations, processing 10,000+ invoices per month. Combined Azure Form Recognizer, the OpenAI SDK, and Celery/Redis background workers behind async FastAPI services, with a React/Next.js interface for review and workflow automation.",
      tags: ["FastAPI", "Next.js", "TypeScript", "Azure", "OpenAI", "Celery / Redis", "PostgreSQL"],
    },
    {
      title: "Clinical Data Web Platform (MARL)",
      subtitle: "Motion Analysis Research Lab · Full-stack",
      icon: <SiDjango />,
      gradient: "from-violet-500/30 via-fuchsia-500/20 to-purple-600/10",
      description:
        "Built and maintained a full-stack Django clinical data platform supporting patient assessments, multi-step intake workflows, and research reporting across live weekly study sessions. Automated the clinical data ingestion pipeline with Python and Pandas, eliminating manual parsing and saving researchers roughly three months of work per study cycle.",
      tags: ["Django", "Python", "MySQL", "Pandas", "JavaScript", "Bootstrap"],
    },
    {
      title: "Automated Hardware Test Framework",
      subtitle: "North Atlantic Industries · Automation",
      icon: <FaDocker />,
      gradient: "from-emerald-400/30 via-teal-500/20 to-cyan-600/10",
      description:
        "Designed automated Python and pytest test frameworks for 7 hardware I/O modules, cutting manual testing time by 50% and enabling 6x greater module throughput. Built Docker-containerized environments and Jenkins CI/CD pipelines to standardize test execution, replacing a decade-old legacy testing library.",
      tags: ["Python", "Pytest", "Docker", "Jenkins", "CI/CD"],
    },
    {
      title: "Swarm Search & Rescue System",
      subtitle: "Lockheed Martin Sponsored · Robotics",
      icon: <FaRobot />,
      gradient: "from-amber-400/30 via-orange-500/20 to-rose-600/10",
      description:
        "Led a team of 4 engineers on a multi-robot search-and-rescue system using ROS2 and LiDAR-based SLAM. Migrated from ROS2 Foxy to Humble and engineered a map-merge pipeline with slam_toolbox, enabling three robots to merge individual LiDAR maps covering 115+ sq ft into a single coherent environment map — a milestone two prior teams had failed to accomplish.",
      tags: ["ROS2", "Python", "SLAM", "LiDAR", "Linux"],
    },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      org: "Alai Partners",
      time: "May 2026 – Present",
      detail:
        "Shipping 40+ full-stack features across 3 client-facing platforms with React, Next.js, TypeScript, FastAPI, and PostgreSQL — building document-intelligence and billing-automation systems on Azure with Celery/Redis and Sentry observability.",
    },
    {
      title: "Software Engineer",
      org: "Motion Analysis Research Laboratory",
      time: "Oct 2024 – May 2026",
      detail:
        "Built and maintained a production Django clinical data platform with multi-step intake workflows, research reporting, and an automated data ingestion pipeline that saved researchers months of manual work per study cycle.",
    },
    {
      title: "Software Automation Intern",
      org: "North Atlantic Industries",
      time: "May 2025 – Aug 2025",
      detail:
        "Built automated pytest frameworks, Docker-containerized test environments, and Jenkins CI/CD pipelines for hardware validation, halving manual testing time and enabling 6x module throughput.",
    },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/anthonykish", icon: <FaGithub /> },
    { label: "LinkedIn", href: "https://linkedin.com/in/anthony-kish", icon: <FaLinkedin /> },
  ];

  const floatingChips = [
    { icon: <SiReact />, className: "left-[2%] top-[14%]", delay: "0s" },
    { icon: <SiFastapi />, className: "right-[4%] top-[26%]", delay: "1.1s" },
    { icon: <FaPython />, className: "left-[8%] bottom-[16%]", delay: "0.6s" },
    { icon: <VscAzure />, className: "right-[8%] bottom-[10%]", delay: "1.6s" },
  ];

  const activeSection = useActiveSection(["home", ...navItems.map((n) => n.id)]);

  useMouseGlow();

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

        .cosmos-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), transparent 16%, transparent 84%, rgba(255,255,255,0.02));
        }

        .starfield {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .mouse-glow {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(440px circle at var(--mx, 50%) var(--my, 12%), rgba(103,232,249,0.035), transparent 62%);
        }

        .glass {
          background: rgba(8, 11, 24, 0.55);
          border: 1px solid rgba(167, 243, 208, 0.15);
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(10px);
        }

        .section-title {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: rgba(255,255,255,0.92);
          font-size: 0.98rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .section-title::before {
          content: '';
          width: 1.6rem;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #22d3ee, #a78bfa);
        }

        .soft-text {
          color: rgba(255,255,255,0.94);
          text-shadow: 0 0 22px rgba(255,255,255,0.04);
        }

        .name-gradient {
          background: linear-gradient(120deg, #ffffff 28%, #a5f3fc 62%, #c4b5fd 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .grad-accent {
          background: linear-gradient(120deg, #67e8f9, #a78bfa);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .muted {
          color: rgba(226,232,240,0.76);
        }

        .pill {
          border: 1px solid rgba(165, 180, 252, 0.2);
          background: rgba(255,255,255,0.03);
          transition: transform .25s ease, border-color .25s ease, background .25s ease;
        }
        .pill:hover {
          transform: translateY(-3px);
          border-color: rgba(103,232,249,0.4);
          background: rgba(103,232,249,0.06);
        }

        .project-card {
          transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(103,232,249,0.32);
          box-shadow: 0 24px 70px rgba(0,0,0,0.5);
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

        .reveal {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity .7s ease, transform .7s ease;
        }
        .reveal-in { opacity: 1; transform: none; }

        .orb { position: relative; width: min(400px, 78vw); aspect-ratio: 1; }
        .orb::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: conic-gradient(from 0deg, rgba(34,211,238,0.55), rgba(139,92,246,0.4), rgba(59,130,246,0.5), rgba(236,72,153,0.35), rgba(34,211,238,0.55));
          filter: blur(34px);
          animation: spin 20s linear infinite;
        }
        .orb::after {
          content: '';
          position: absolute;
          inset: 13%;
          border-radius: 50%;
          background: radial-gradient(circle at 34% 28%, rgba(255,255,255,0.14), rgba(2,6,23,0.65) 62%);
          border: 1px solid rgba(255,255,255,0.09);
          backdrop-filter: blur(6px);
          box-shadow: inset 0 0 60px rgba(103,232,249,0.12);
        }

        .orb-ring {
          position: absolute;
          inset: 4%;
          border-radius: 50%;
          border: 1px dashed rgba(165,243,208,0.18);
          animation: spin 32s linear infinite reverse;
        }

        .float-chip { animation: floaty 7s ease-in-out infinite; }

        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes floaty { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        @keyframes bounceDown { 0%,100% { transform: translateY(0); opacity: .5; } 50% { transform: translateY(6px); opacity: 1; } }
        .scroll-cue { animation: bounceDown 1.8s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
          .orb::before, .orb-ring, .float-chip, .scroll-cue { animation: none; }
        }
      `}</style>

      <div className="cosmos-bg">
        <StarField />
        <div className="mouse-glow" />

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
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative transition hover:text-cyan-200 ${activeSection === item.id ? "text-cyan-200" : ""}`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-gradient-to-r from-cyan-300 to-violet-400 transition-all duration-300 ${activeSection === item.id ? "w-full" : "w-0"}`}
                  />
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-8 sm:px-8 lg:px-10 lg:pt-12">
          <section id="home" className="relative flex min-h-[92vh] items-center">
            <div className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="mb-5 text-sm uppercase tracking-[0.28em] text-cyan-200/70">Software Engineer · Alai Partners</p>
                <h1 className="name-gradient text-5xl font-semibold leading-[0.95] sm:text-7xl md:text-8xl">
                  Anthony Kish
                </h1>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xl text-white/78 sm:text-3xl">
                  <span>Building with</span>
                  <TypingWord words={typingWords} />
                </div>
                <p className="muted mt-8 max-w-2xl text-base leading-8 sm:text-lg">
                  Full-stack software engineer building AI-assisted platforms and automation pipelines — from React and
                  Next.js frontends to async FastAPI backends, document-intelligence workflows, and cloud infrastructure
                  built to scale.
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

              <div className="relative hidden items-center justify-center lg:flex">
                <div className="orb float-chip">
                  <div className="orb-ring" />
                </div>
                {floatingChips.map((chip, i) => (
                  <span
                    key={i}
                    style={{ animationDelay: chip.delay }}
                    className={`float-chip glass absolute flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-cyan-100 ${chip.className}`}
                  >
                    {chip.icon}
                  </span>
                ))}
              </div>
            </div>

            <a href="#about" aria-label="Scroll to about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 md:flex">
              <span className="text-[0.7rem] uppercase tracking-[0.3em]">Scroll</span>
              <span className="scroll-cue text-lg">↓</span>
            </a>
          </section>

          <Reveal>
            <section className="pb-6">
              <div className="glass grid grid-cols-2 gap-6 rounded-[2rem] p-8 sm:grid-cols-4 sm:p-10">
                {stats.map((stat) => (
                  <Stat key={stat.label} {...stat} />
                ))}
              </div>
            </section>
          </Reveal>

          <section id="about" className="py-14">
            <Reveal>
              <div className="section-title">About</div>
            </Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
              <Reveal>
                <div className="glass rounded-[2rem] p-8">
                  <h2 className="soft-text text-2xl font-medium">About Me</h2>
                  <div className="muted mt-5 space-y-5 text-[1.02rem] leading-8">
                    <p>
                      I'm a full-stack software engineer at Alai Partners, where I build client-facing platforms that turn
                      manual, document-heavy workflows into automated, AI-assisted systems — end to end, from React and
                      Next.js interfaces to async FastAPI services.
                    </p>
                    <p>
                      My work centers on shipping reliable production software: document-intelligence pipelines, billing
                      automation, background processing with Celery and Redis, and cloud infrastructure on Azure. I care as
                      much about clean, observable backends as I do about interfaces that feel effortless to use.
                    </p>
                    <p>
                      I hold an M.S. in Computer Engineering from Binghamton University, where I also earned my B.S. through
                      the 4+1 program. Before industry I led a Lockheed Martin–sponsored robotics team and built automated
                      hardware-test frameworks — experiences that shaped how I think about systems, testing, and shipping.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="glass flex min-h-[420px] items-center justify-center rounded-[2rem] p-8">
                  <div className="relative h-72 w-72 sm:h-[22rem] sm:w-[22rem]">
                    <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl"></div>
                    <img
                      src="/images/headshot.jpg"
                      alt="Anthony Kish"
                      className="relative h-72 w-72 rounded-full object-cover border border-cyan-200/20 sm:h-[22rem] sm:w-[22rem]"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="skills" className="py-14">
            <Reveal>
              <div className="section-title">Tech Stack</div>
            </Reveal>
            <div className="space-y-8">
              {skillCategories.map((group, gi) => (
                <Reveal key={group.category} delay={gi % 2 === 0 ? 0 : 100}>
                  <div className="glass rounded-[2rem] p-6 sm:p-8">
                    <h3 className="grad-accent mb-5 text-xl font-semibold">{group.category}</h3>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="pill flex flex-col items-center justify-center gap-3 rounded-2xl px-4 py-5 text-sm text-white/82 sm:text-base"
                        >
                          <span className="text-3xl text-cyan-200">{skill.icon}</span>
                          <span className="text-center">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="projects" className="py-14">
            <Reveal>
              <div className="section-title">Projects</div>
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="space-y-6">
                {projects.map((project, pi) => (
                  <Reveal key={project.title} delay={pi * 80}>
                    <article className="project-card glass overflow-hidden rounded-[2rem]">
                      <div className={`relative flex h-28 items-center justify-between bg-gradient-to-br ${project.gradient} px-7`}>
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-white/70">{project.subtitle}</p>
                          <h3 className="soft-text mt-1 text-xl font-semibold sm:text-2xl">{project.title}</h3>
                        </div>
                        <span className="text-4xl text-white/85 sm:text-5xl">{project.icon}</span>
                      </div>
                      <div className="p-7">
                        <p className="muted text-base leading-8">{project.description}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/72">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>

              <div id="experience" className="lg:sticky lg:top-24 lg:self-start">
                <Reveal delay={120}>
                  <div className="glass rounded-[2rem] p-6 sm:p-8">
                    <div className="section-title !mb-5">Experience</div>
                    <div className="space-y-8">
                      {experiences.map((item, index) => (
                        <div key={item.title} className={`relative pl-8 ${index < experiences.length - 1 ? "timeline-line" : ""}`}>
                          <div className="absolute left-0 top-1.5 h-5 w-5 rounded-full border border-cyan-200/35 bg-cyan-300/10" />
                          <h3 className="soft-text text-lg font-medium">{item.title}</h3>
                          <div className="mt-1 text-sm text-cyan-100/75">{item.org}</div>
                          <div className="mt-1 text-sm text-white/50">{item.time}</div>
                          <p className="muted mt-3 text-sm leading-7">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <section id="contact" className="py-14">
            <Reveal>
              <div className="section-title">Get In Touch</div>
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <Reveal>
                <div className="glass rounded-[2rem] p-8">
                  <h2 className="soft-text text-2xl font-medium">Let's build something meaningful.</h2>
                  <p className="muted mt-5 max-w-2xl text-base leading-8">
                    I'm always open to connecting with engineers and teams building thoughtful software — whether it's a
                    collaboration, an interesting problem in full-stack or automation, or just a good conversation. Feel
                    free to reach out.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
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
              </Reveal>
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
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 400);
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

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      options || { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${inView ? "reveal-in" : ""} ${className}`}>
      {children}
    </div>
  );
}

function useCountUp(target, run, duration = 1300) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (prefersReducedMotion()) {
      const id = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(id);
    }
    let raf;
    let startTs;
    const step = (ts) => {
      if (startTs === undefined) startTs = ts;
      const progress = Math.min(1, (ts - startTs) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);

  return value;
}

function Stat({ value, suffix, label }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const count = useCountUp(value, inView);
  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="name-gradient text-4xl font-semibold sm:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="muted mt-2 text-sm leading-6">{label}</div>
    </div>
  );
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return active;
}

function useMouseGlow() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const onMove = (e) => {
      const root = document.documentElement;
      root.style.setProperty("--mx", `${e.clientX}px`);
      root.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
}

function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = prefersReducedMotion();

    let width = 0;
    let height = 0;
    let stars = [];
    let raf;
    let t = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(170, Math.floor(width / 9));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.8 + 0.2,
        phase: Math.random() * Math.PI * 2,
        cyan: Math.random() > 0.72,
      }));
    };

    const render = () => {
      t += 0.012;
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        if (!reduce) {
          s.y += s.z * 0.14;
          if (s.y > height) {
            s.y = 0;
            s.x = Math.random() * width;
          }
        }
        const twinkle = reduce ? 0.7 : 0.45 + 0.55 * Math.abs(Math.sin(s.phase + t * 2));
        const r = s.z * 1.5;
        ctx.beginPath();
        ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
        ctx.fillStyle = s.cyan
          ? `rgba(165,243,252,${twinkle})`
          : `rgba(255,255,255,${twinkle})`;
        ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
}
