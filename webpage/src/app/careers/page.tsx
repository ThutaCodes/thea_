import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Careers | Thea Solutions',
  description: 'Explore career opportunities and open roles at Thea Solutions.',
};

const jobOpenings: Array<{
  title: string;
  level: string;
  team: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
  focus: string[];
}> = 
[
  {
    "title": "Backend Engineer — Go",
    "level": "Mid level",
    "team": "Engineering",
    "location": "Remote / Global",
    "type": "Full-time",
    "description": "Build reliable APIs and services in Go while mastering production engineering, testing, observability, and cloud-native deployment.",
    "skills": ["Golang", "REST APIs", "PostgreSQL", "AWS", "GCP", "GitLab"],
    "focus": [
      "Develop and maintain backend services with a focus on performance and reliability",
      "Design data models and integrate with external business systems (ERP, CRM, etc.)",
      "Use Claude, Codex, and similar AI tools responsibly to accelerate delivery"
    ]
  },
  {
    "title": "Backend Engineer — NestJS",
    "level": "Mid level",
    "team": "Engineering",
    "location": "Remote / Global",
    "type": "Full-time",
    "description": "Own TypeScript services and integrations for business-critical applications, from architecture through deployment and monitoring on cloud infrastructure.",
    "skills": ["NestJS", "TypeScript", "PostgreSQL", "Redis", "AWS", "GCP", "GitLab"],
    "focus": [
      "Design modular APIs, background jobs, and event-driven workflows",
      "Implement secure integrations with third-party platforms (finance, logistics, etc.) with idempotent patterns",
      "Review code and help engineers adopt AI-assisted development practices"
    ]
  },
  {
    "title": "Frontend Engineer — Vue & React",
    "level": "Entry to mid level",
    "team": "Engineering",
    "location": "Remote / Global",
    "type": "Full-time",
    "description": "Create accessible, responsive product experiences for operational dashboards, customer portals, and data-rich applications.",
    "skills": ["Vue", "React", "TypeScript", "Modern CSS", "GitLab"],
    "focus": [
      "Translate product requirements and designs into polished, performant interfaces",
      "Build interactive data visualisation and workflow management screens",
      "Use AI tools for prototyping and testing while maintaining strong engineering judgment"
    ]
  },
  {
    "title": "Mobile Engineer — Kotlin Multiplatform & Flutter",
    "level": "Mid level",
    "team": "Engineering",
    "location": "Remote / Global",
    "type": "Full-time",
    "description": "Ship dependable cross-platform mobile products with shared business logic, native-quality experiences, and seamless backend connectivity.",
    "skills": ["Kotlin Multiplatform", "Flutter", "Android", "iOS", "GitLab"],
    "focus": [
      "Build and maintain reusable mobile architecture and platform integrations",
      "Implement deep links, authentication, offline support, and robust error recovery",
      "Partner closely with backend and product teams from discovery to release"
    ]
  },
  {
    "title": "AI Engineer — Agentic Systems",
    "level": "Mid level",
    "team": "AI & Automation",
    "location": "Remote / Global",
    "type": "Full-time",
    "description": "Design practical agentic systems that combine language models, tools, data, and human approval to solve real operational problems.",
    "skills": ["LLM applications", "RAG", "Tool calling", "Evaluation", "AWS/GCP", "GitLab"],
    "focus": [
      "Build multi-step agents with guardrails, tracing, and measurable evaluations",
      "Integrate models and tools including Claude and Codex into production workflows",
      "Protect sensitive business data through careful access and approval design"
    ]
  },
  {
    "title": "Automation Engineer",
    "level": "Entry to mid level",
    "team": "AI & Automation",
    "location": "Remote / Global",
    "type": "Full-time",
    "description": "Turn repetitive business processes into resilient automated and agent-assisted workflows across internal and client systems.",
    "skills": ["APIs & webhooks", "Workflow automation", "JavaScript or Python", "AI agents", "GitLab"],
    "focus": [
      "Map processes and build observable, recoverable automations",
      "Connect CRM, finance, communication, and logistics systems",
      "Create human-in-the-loop controls for sensitive agentic actions"
    ]
  },
  {
    "title": "Business Analyst",
    "level": "Mid level",
    "team": "Consulting",
    "location": "Myanmar / Hybrid",
    "type": "Full-time",
    "description": "Bridge business needs and technical delivery by guiding clients through discovery, requirements definition, and solution validation.",
    "skills": ["Requirements analysis", "Process mapping", "Data analysis", "Stakeholder management", "Documentation"],
    "focus": [
      "Run discovery sessions and translate business goals into clear technical specifications",
      "Analyse existing workflows and identify opportunities for automation and improvement",
      "Coordinate testing, training, go-live, and ongoing enhancements with clients and internal teams"
    ]
  },
  {
    "title": "Application Consultant",
    "level": "Entry to mid level",
    "team": "Consulting",
    "location": "Myanmar / Hybrid",
    "type": "Full-time",
    "description": "Bridge business needs and technical delivery by guiding clients through implementation, training, and adoption of software and automation solutions.",
    "skills": ["Requirements analysis", "Process mapping", "Client communication", "Solution design"],
    "focus": [
      "Run discovery sessions and turn needs into clear delivery requirements",
      "Advise clients on software and AI automation strategies",
      "Coordinate testing, training, go-live, and ongoing improvements"
    ]
  },
  {
    "title": "Sales Executive — Technology Solutions",
    "level": "Mid level",
    "team": "Growth",
    "location": "Hybrid (Thailand / Vietnam)",
    "type": "Full-time",
    "description": "Help growing businesses understand and adopt custom software, AI automation, and digital transformation solutions.",
    "skills": ["B2B sales", "Consultative selling", "CRM", "Communication"],
    "focus": [
      "Develop qualified opportunities and manage the sales pipeline",
      "Explain technical solutions in clear business language",
      "Work with consultants and engineers to shape accurate proposals"
    ]
  },
  {
    "title": "Sales Executive — Technology Solutions",
    "level": "Mid level",
    "team": "Growth",
    "location": "Myanmar / Hybrid",
    "type": "Full-time",
    "description": "Drive adoption of modern HR management systems – including HRIS, payroll, attendance, recruitment, and employee engagement platforms – for businesses in Myanmar.",
    "skills": ["B2B sales", "HRIS knowledge", "Consultative selling", "CRM", "Communication"],
    "focus": [
      "Identify and qualify opportunities with Myanmar-based organisations needing HR digital transformation",
      "Translate HR pain points into clear solution value propositions",
      "Collaborate with consultants and implementation teams to deliver accurate proposals and smooth handovers"
    ]
  }
]

export default function CareersPage() {
  return (
    <main className='min-h-screen overflow-hidden'>
      <Navbar />
      <section className='relative mx-auto min-h-[78vh] w-full max-w-7xl px-5 pb-24 pt-44 md:px-10 md:pt-52'>
        <div className='absolute right-0 top-40 h-80 w-80 translate-x-1/2 rounded-full light-color blur-[210px]' />
        <div className='relative'>
          <Link href='/' className='mb-10 inline-flex items-center gap-2 text-sm opacity-60 transition-opacity hover:opacity-100'>
            <ArrowLeft size={16} aria-hidden='true' /> Back to home
          </Link>
          <p className='mb-4 text-lg accent-color'>Careers at Thea Solutions</p>
          <h1 className='max-w-4xl text-5xl font-thin leading-tight md:text-7xl'>Build thoughtful technology with us.</h1>
          <p className='mt-7 max-w-2xl text-lg leading-relaxed opacity-70 md:text-xl'>
            We bring together curious people who care about useful software, intelligent automation, business growth, and lasting client partnerships.
          </p>

          <div className='mt-16 border-t border-color pt-10'>
            <div className='mb-8 flex items-end justify-between gap-5'>
              <div>
                <p className='text-sm uppercase tracking-[0.18em] opacity-50'>Open positions</p>
                <h2 className='mt-2 text-3xl font-thin md:text-4xl'>Current opportunities</h2>
              </div>
              <span className='rounded-full border border-color px-4 py-2 text-sm opacity-70'>{jobOpenings.length} openings</span>
            </div>

            <div className='grid gap-5 md:grid-cols-2'>
              {jobOpenings.map((job) => (
                <article key={job.title} className='flex h-full flex-col rounded-2xl border border-color transparent-white p-6 transition-colors hover:bg-white/[0.07] md:p-7'>
                  <div className='mb-5 flex flex-wrap gap-2 text-xs'>
                    <span className='rounded-full bg-[#5F1F2F] px-3 py-1.5'>{job.level}</span>
                    <span className='rounded-full border border-white/15 px-3 py-1.5 opacity-70'>{job.team}</span>
                  </div>
                  <h3 className='text-2xl leading-snug'>{job.title}</h3>
                  <p className='mt-2 text-sm opacity-55'>{job.location} · {job.type}</p>
                  <p className='mt-5 leading-relaxed opacity-70'>{job.description}</p>
                  <div className='mt-5 flex flex-wrap gap-2'>
                    {job.skills.map((skill) => (
                      <span key={skill} className='rounded-md bg-black/20 px-2.5 py-1 text-xs opacity-70'>{skill}</span>
                    ))}
                  </div>
                  <div className='mt-6 border-t border-white/10 pt-5'>
                    <p className='mb-3 text-sm font-semibold'>What you will focus on</p>
                    <ul className='space-y-2 text-sm leading-relaxed opacity-65'>
                      {job.focus.map((item) => <li key={item} className='flex gap-2'><span aria-hidden='true'>—</span><span>{item}</span></li>)}
                    </ul>
                  </div>
                  <a href={`mailto:careers@theasolutions.co?subject=${encodeURIComponent(`Application: ${job.title}`)}`} className='mt-7 inline-flex items-center gap-2 self-start rounded-lg bg-[#F1F1F0] px-4 py-2.5 text-sm font-semibold text-[#1A1816] transition-opacity hover:opacity-85'>
                    Apply for this role <ArrowUpRight size={16} aria-hidden='true' />
                  </a>
                </article>
              ))}
            </div>
            <div className='mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-color p-6 md:flex-row md:items-center md:p-8'>
              <div>
                <h3 className='text-2xl'>Do not see your exact role?</h3>
                <p className='mt-2 opacity-65'>Tell us what you are excellent at and how you would contribute to Thea Solutions.</p>
              </div>
              <a href='mailto:careers@theasolutions.co?subject=General%20Career%20Application' className='inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/20 px-5 py-3 transition-colors hover:bg-white/10'>
                <Mail size={18} aria-hidden='true' /> Introduce yourself
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
