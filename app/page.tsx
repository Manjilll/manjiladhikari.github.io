import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
    <a
      href="/"
      className="text-lg font-semibold tracking-tight"
    >
      MANJIL<span className="text-neutral-500">.</span>
    </a>

    <div className="hidden items-center gap-8 text-sm text-neutral-500 md:flex">
      <a
        href="#work"
        className="transition hover:text-white"
      >
        Work
      </a>

      <a
        href="#about"
        className="transition hover:text-white"
      >
        About
      </a>

      <a
        href="#experience"
        className="transition hover:text-white"
      >
        Experience
      </a>

      <a
        href="#contact"
        className="transition hover:text-white"
      >
        Contact
      </a>
    </div>

    <a
      href="#contact"
      className="rounded-full border border-neutral-700 px-4 py-2 text-xs font-medium transition hover:border-neutral-400 hover:bg-white hover:text-black"
    >
      Let's talk
    </a>
  </div>
</nav>

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[calc(100vh-90px)] max-w-6xl items-center px-6 pb-20 pt-32">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />

        <div className="relative grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

  {/* Hero Text */}
  <div>
    <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
      Business Analytics · Data · AI
    </p>

    <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
      Turning data
      <br />
      into <span className="text-neutral-500">decisions.</span>
    </h1>

    <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
      I'm Manjil Adhikari — a Business Analytics professional interested
      in building practical solutions at the intersection of business,
      data, and technology.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="#work"
        className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
      >
        Explore my work →
      </a>

      <a
        href="#about"
        className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium transition hover:border-neutral-400"
      >
        About me
      </a>
    </div>

    <div className="mt-16 flex gap-10 text-sm text-neutral-500">
      <div>
        <p className="text-2xl font-medium text-white">Analytics</p>
        <p className="mt-1">Business & Data</p>
      </div>

      <div>
        <p className="text-2xl font-medium text-white">AI</p>
        <p className="mt-1">Applied Intelligence</p>
      </div>

      <div>
        <p className="text-2xl font-medium text-white">Data</p>
        <p className="mt-1">SQL & Python</p>
      </div>
    </div>
  </div>
  <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium transition hover:border-neutral-400"
>
  View Resume ↗
</a>

  {/* Photo */}
  <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900">
    <Image
      src="/manjil.jpg"
      alt="Manjil Adhikari"
      fill
      priority
      className="object-cover object-top grayscale transition duration-700 hover:scale-[1.02] hover:grayscale-0"
      sizes="(max-width: 1024px) 80vw, 400px"
    />
  </div>

  <div className="absolute -bottom-5 -left-5 rounded-2xl border border-neutral-800 bg-[#0a0a0a] px-5 py-4 shadow-2xl">
    <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-600">
      Currently
    </p>

    <p className="mt-1 text-sm text-neutral-300">
      Building with data & AI
    </p>
  </div>
</div>

</div>

        <div className="space-y-6">
<ProjectCard
  number="01"
  category="AI · DATA"
  title="Stock Intelligence"
  description="An analytical platform exploring market data, technical indicators, news sentiment, anomaly detection, and backtesting."
  technologies={["Python", "AI", "Market Data", "Analytics"]}
  href="/projects/stock-intelligence"
/>

<ProjectCard
  number="02"
  category="FORECASTING · ANALYTICS"
  title="Passenger Demand Prediction"
  description="A predictive analytics project focused on understanding passenger patterns and forecasting activity at the Port Authority Bus Terminal."
  technologies={[
    "Python",
    "Forecasting",
    "Machine Learning",
    "Power BI",
  ]}
  href="/projects/passenger-prediction"
/>

<ProjectCard
  number="03"
  category="REAL-TIME DATA"
  title="Real-Time Data Integration"
  description="Experience working with real-time data integration technologies, troubleshooting data flows, and supporting analytical customer use cases."
  technologies={["Striim", "Oracle", "Kafka", "BigQuery"]}
  href="/projects/real-time-data"
/>
        </div>
      </section>
{/* About */}
<section
  id="about"
  className="mx-auto max-w-6xl border-t border-neutral-900 px-6 py-32"
>
  <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

    {/* Section heading */}
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
        About Me
      </p>

      <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
        Business meets
        <br />
        <span className="text-neutral-500">
          technology.
        </span>
      </h2>
    </div>

    {/* Content */}
    <div>
      <div className="max-w-3xl">

        {/* Story */}
        <div>
          <p className="text-xl leading-9 text-neutral-200">
            I'm interested in the space where
            <span className="text-neutral-500">
              {" "}business problems, data, and technology
            </span>{" "}
            come together.
          </p>

          <div className="mt-8 space-y-6 leading-8 text-neutral-400">
            <p>
              My journey started in banking, where I gained experience
              working with customers, financial products, credit-related
              processes, and business decisions.
            </p>

            <p>
              That experience eventually led me deeper into analytics. I
              became interested in how data can be used not just to report
              what happened, but to understand why it happened and what
              could happen next.
            </p>

            <p>
              Today, I'm focused on business analytics, data, artificial
              intelligence, and building practical analytical solutions.
              I enjoy working across the entire process — from understanding
              a business problem to exploring data, building models, and
              communicating the result.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Personal interests */}
  <div className="mt-24 border-t border-neutral-900 pt-12">
    <div className="grid gap-8 md:grid-cols-3">

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
          Interested in
        </p>

        <p className="mt-3 text-lg text-neutral-300">
          Data Analytics
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
          Exploring
        </p>

        <p className="mt-3 text-lg text-neutral-300">
          AI & Intelligent Systems
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
          Outside work
        </p>

        <p className="mt-3 text-lg text-neutral-300">
          Music · Guitar · Sports
        </p>
      </div>

    </div>
  </div>
</section>

{/* Experience */}
<section
  id="experience"
  className="border-t border-neutral-900"
>
  <div className="mx-auto max-w-6xl px-6 py-32">

    <div className="mb-20">
      <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
        Experience
      </p>

      <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
        A path from
        <span className="text-neutral-500">
          {" "}banking to data.
        </span>
      </h2>
    </div>

    <div className="space-y-0">

      {/* Global IME */}
      <div className="grid gap-8 border-t border-neutral-800 py-12 md:grid-cols-[160px_1fr_120px]">

        <div>
          <p className="text-sm text-neutral-600">
            01
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-medium">
            Global IME Bank
          </h3>

          <p className="mt-2 text-neutral-500">
            Banking · Business & Credit Analysis
          </p>

          <p className="mt-6 max-w-2xl leading-8 text-neutral-400">
            Worked across customer service, financial products, credit-related
            processes, business development, and analytical decision-making
            within a commercial banking environment.
          </p>
        </div>

        <div className="text-sm text-neutral-600 md:text-right">
          Nepal
        </div>

      </div>

      {/* Striim */}
      <div className="grid gap-8 border-t border-neutral-800 py-12 md:grid-cols-[160px_1fr_120px]">

        <div>
          <p className="text-sm text-neutral-600">
            02
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-medium">
            Striim
          </h3>

          <p className="mt-2 text-neutral-500">
            Field Engineering Intern
          </p>

          <p className="mt-6 max-w-2xl leading-8 text-neutral-400">
            Supported real-time data integration use cases involving data
            pipelines, troubleshooting, SQL/TQL queries, and cloud data
            platforms including Oracle, Kafka, and BigQuery.
          </p>
        </div>

        <div className="text-sm text-neutral-600 md:text-right">
          United States
        </div>

      </div>

      {/* Education */}
      <div className="grid gap-8 border-t border-neutral-800 py-12 md:grid-cols-[160px_1fr_120px]">

        <div>
          <p className="text-sm text-neutral-600">
            03
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-medium">
            University of New Haven
          </h3>

          <p className="mt-2 text-neutral-500">
            MS Business Analytics
          </p>

          <p className="mt-6 max-w-2xl leading-8 text-neutral-400">
            Graduate studies focused on business analytics, data visualization,
            databases, forecasting, data mining, and business intelligence.
          </p>
        </div>

        <div className="text-sm text-neutral-600 md:text-right">
          USA
        </div>

      </div>

    </div>
  </div>
</section>
{/* Contact */}
<section
  id="contact"
  className="mx-auto max-w-6xl border-t border-neutral-900 px-6 py-32"
>
  <div className="grid gap-12 md:grid-cols-2 md:items-end">
    <div>
      <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
        Contact
      </p>

      <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">
        Let's build
        <br />
        <span className="text-neutral-500">something useful.</span>
      </h2>
    </div>

    <div className="md:pb-2">
      <p className="max-w-md text-lg leading-8 text-neutral-400">
        I'm always interested in conversations around analytics, data,
        technology, and opportunities where I can solve meaningful business
        problems.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="mailto:YOUR_EMAIL@example.com"
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
        >
          Email me →
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium transition hover:border-neutral-400"
        >
          LinkedIn ↗
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium transition hover:border-neutral-400"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="border-t border-neutral-900">
  <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
    <p>© 2026 Manjil Adhikari</p>

    <p>
      Built with Next.js · TypeScript · Tailwind CSS
    </p>
  </div>
</footer>
    </main>
  );
}