"use client";

import React, { useState } from 'react';
import {
  Github, Linkedin, Mail, FileText, ExternalLink, Code2, Database,
  LayoutTemplate, ChevronDown, ChevronUp, CheckCircle2, Send, Loader2,
  GraduationCap, Award // 👈 Added these imports for Education section
} from 'lucide-react';

// --- DATA: Education (NEW) ---
const EDUCATION = [
  {
    id: 1,
    school: "Universiti Teknologi MARA (UiTM)",
    degree: "Bachelor of Information Technology (Hons.)",
    specialization: "Specialization in Big Data Technology",
    cgpa: "3.46",
    period: "Oct 2022 - Feb 2026",
    awards: ["Dean's List Award Recipient (1st & 5th Semester)"]
  },
  {
    id: 2,
    school: "Kolej Matrikulasi Kedah",
    degree: "Foundation Degree, Accounting",
    specialization: null,
    cgpa: "3.96",
    period: "Aug 2021 - Jun 2022",
    awards: ["PSPM (4.00) Award Recipient (1st Semester)"]
  }
];

// --- DATA: Project Details ---
const PROJECTS = [
  {
    id: 1,
    title: "Appointment Scheduling Platform",
    category: "Full Stack",
    tech: ["React 18", "Laravel 12", "MySQL", "Sanctum", "TailwindCSS"],
    shortDescription: "A decoupled full-stack booking system with real-time scheduling logic and role-based authentication (RBAC).",
    fullDescription: "A robust enterprise-grade booking solution designed to handle high-concurrency appointment slots. The system separates the frontend (SPA) from the backend (API) to ensure scalability.",
    keyFeatures: [
      "Architected a decoupled SPA using React 18, Vite, and TailwindCSS.",
      "Engineered complex scheduling logic using SQL transactions to prevent double-booking conflicts.",
      "Implemented secure Role-Based Access Control (RBAC) via Laravel Sanctum.",
      "Optimized database queries within Laravel Controllers for real-time availability checking."
    ],
    repoLink: "https://github.com/j0hnlabu/barbershop-booking-system"
  },
  {
    id: 2,
    title: "SkillVis Analytics Dashboard",
    category: "Data Analytics",
    tech: ["Power BI", "Python (Pandas)", "DAX", "Google Colab", "ETL"],
    shortDescription: "An interactive dashboard for visualizing global aging workforce trends with a custom recommendation engine.",
    fullDescription: "A comprehensive business intelligence tool capable of ingesting messy UN demographic data and transforming it into actionable strategic insights for workforce planning.",
    keyFeatures: [
      "Engineered a Python-based ETL pipeline in Google Colab using Pandas and Regex.",
      "Architected advanced DAX measures (CALCULATE, REMOVEFILTERS) for multi-dimensional aggregation.",
      "Developed a custom 'Suitability Score' algorithm to rank industries.",
      "Visualized geospatial data using custom TopoJSON shape maps."
    ],
    repoLink: "https://app.powerbi.com/groups/me/reports/ff77b9d6-721a-4f68-b200-f5c57e43c402/3806d7f9020840d8635e?experience=power-bi"
  },
  {
    id: 3,
    title: "Multi-Model Generative AI Platform",
    category: "AI & Engineering",
    tech: ["Streamlit", "OpenAI", "Google Gemini", "PyPDF2", "Plotly"],
    shortDescription: "A generative AI tool for analyzing EV owner manuals and projecting financial TCO.",
    fullDescription: "An AI-powered SaaS prototype that bridges the gap between unstructured technical documentation and structured financial decision-making for EV buyers.",
    keyFeatures: [
      "Integrated OpenAI GPT-3.5 for structured vehicle spec retrieval.",
      "Leveraged Google Gemini 1.5 Flash to process long-context PDF owner manuals.",
      "Built a dynamic TCO (Total Cost of Ownership) calculator using Pandas and Plotly.",
      "Designed a responsive Streamlit interface for real-time document interaction."
    ],
    repoLink: "https://github.com/j0hnlabu/Streamlit-Tutorial"
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">

      {/* --- HERO SECTION --- */}
      <header className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            Available for March 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
            Ahmad Amzar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Abdul Rahim
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
            Full-Stack Developer & Data Analyst. I bridge the gap between robust
            backend architecture and intuitive frontend design.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition shadow-lg hover:shadow-xl">
              <Mail size={20} /> Contact Me
            </a>
            <a href="https://www.linkedin.com/in/amzarabdulrahim" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition shadow-sm hover:shadow-md">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition shadow-sm hover:shadow-md">
              <FileText size={20} /> Resume
            </a>
          </div>
        </div>
      </header>

      {/* --- ABOUT SECTION --- */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-lg text-slate-600 space-y-6">
              <p>
                I am an Information Technology graduate specializing in Big Data Technology.
                Currently a <strong className="text-slate-900">Software Developer Intern at Caction Sdn Bhd</strong>,
                I have spent the last 6 months architecting decoupled web applications and optimizing data pipelines.
              </p>
              <p>
                My toolkit includes <strong className="text-slate-900">React, Laravel, and Power BI</strong>,
                allowing me to build scalable full-stack applications that solve real-world business problems.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <SkillCard icon={<Code2 />} title="Frontend" skills="React 18, Tailwind, Vite" />
              <SkillCard icon={<Database />} title="Backend" skills="Laravel 12, MySQL, PHP" />
              <SkillCard icon={<LayoutTemplate />} title="Data" skills="Power BI, Python, DAX" />
              <SkillCard icon={<Github />} title="Tools" skills="Docker, AWS, Git" />
            </div>
          </div>
        </div>
      </section>

      {/* --- EDUCATION SECTION (NEW) --- */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap size={100} className="text-blue-600" />
              </div>

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-4">
                  {edu.period}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.school}</h3>
                <p className="text-slate-700 font-medium mb-1">{edu.degree}</p>
                {edu.specialization && (
                  <p className="text-slate-500 text-sm mb-4">{edu.specialization}</p>
                )}

                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">
                    CGPA: {edu.cgpa}
                  </span>
                </div>

                {edu.awards.length > 0 && (
                  <div className="space-y-2">
                    {edu.awards.map((award, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-slate-600">
                        <Award size={16} className="text-amber-500 shrink-0 mt-0.5" />
                        <span>{award}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Featured Projects</h2>
        <div className="grid gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Work Together</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                I am currently looking for full-time opportunities starting <strong>March 2026</strong>.
                Whether you have a question about my stack, a project to discuss, or just want to say hi,
                I'll try my best to get back to you!
              </p>

              <div className="space-y-4">
                <a href="mailto:amzarabdulrahim@gmail.com" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    <Mail size={18} />
                  </div>
                  <span className="font-medium">amzarabdulrahim@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/amzarabdulrahim" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    <Linkedin size={18} />
                  </div>
                  <span className="font-medium">LinkedIn Profile</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <p>© {new Date().getFullYear()} Amzar. Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}

// --- COMPONENT: Contact Form ---
function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);

    // 👇 YOUR FORMSPREE ID
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mreepjvo";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 animate-in zoom-in-95">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
        <p className="text-slate-600">Thanks for reaching out. I'll get back to you shortly.</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-blue-600 hover:underline mt-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">Email</label>
        <input
          required
          type="email"
          name="email"
          id="email"
          placeholder="john@company.com"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1">Message</label>
        <textarea
          required
          name="message"
          id="message"
          rows={4}
          placeholder="Hi Amzar, I'd like to discuss a project..."
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white resize-none"
        ></textarea>
      </div>

      <button
        disabled={status === "submitting"}
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>Sending... <Loader2 size={18} className="animate-spin" /></>
        ) : (
          <>Send Message <Send size={18} /></>
        )}
      </button>

      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Oops! Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}

// --- COMPONENT: Expandable Project Card ---
function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 ${isOpen ? 'ring-2 ring-blue-100 shadow-md' : 'hover:shadow-md'}`}>

      {/* Clickable Header Area */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="p-8 cursor-pointer group"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-1 block group-hover:text-blue-600 transition-colors">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="px-3 py-1 text-xs font-semibold text-slate-600 bg-slate-100 rounded-full border border-slate-200">
                {t}
              </span>
            ))}
          </div>
        </div>
        <p className="text-slate-600 leading-relaxed max-w-3xl">
          {project.shortDescription}
        </p>
      </div>

      {/* Expandable Content Area */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <div className="px-8 pb-8 pt-2 border-t border-slate-100 bg-slate-50/50">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Project Overview</h4>
                <p className="text-slate-600 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">Key Technical Features</h4>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Area: Always Visible Actions */}
      <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
        <button
          onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
          className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition"
        >
          {isOpen ? (
            <>Less Details <ChevronUp size={16} /></>
          ) : (
            <>More Details <ChevronDown size={16} /></>
          )}
        </button>

        <a
          href={project.repoLink}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 px-5 py-2 bg-white text-slate-700 border border-slate-200 rounded-lg text-sm font-bold hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 transition shadow-sm"
        >
          <Github size={18} /> View Repository
        </a>
      </div>
    </div>
  );
}

// --- SKILL CARD COMPONENT ---
function SkillCard({ icon, title, skills }) {
  return (
    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition">
      <div className="text-blue-600 mb-3">{icon}</div>
      <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-500">{skills}</p>
    </div>
  );
}