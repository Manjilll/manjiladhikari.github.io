import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-lg font-semibold tracking-wide">
          MANJIL<span className="text-neutral-500">.</span>
        </div>

        <div className="hidden gap-8 text-sm text-neutral-400 md:flex">
          <a href="#work" className="transition hover:text-white">
            Work
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-neutral-700 px-4 py-2 text-sm transition hover:border-neutral-400"
        >
          Let's Talk
        </a>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[calc(100vh-90px)] max-w-6xl items-center px-6 py-20">
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

  {/* Photo */}
  <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">

    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900">

      <Image
        src="/manjil.jpg"
        alt="Manjil Adhikari"
        fill
        priority
        className="object-cover object-top grayscale transition duration-700 hover:grayscale-0"
        sizes="(max-width: 1024px) 80vw, 400px"
      />

    </div>

    <div className="absolute -bottom-5 -left-5 rounded-2xl border border-neutral-800 bg-[#0a0a0a] px-5 py-4">
      <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
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
  <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr]">
    
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
        About Me
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
        I sit at the intersection of
        <span className="text-neutral-500">
          {" "}business, data, and technology.
        </span>
      </h2>

      <div className="mt-8 space-y-6 text-base leading-8 text-neutral-400">
        <p>
          My background combines business, banking, analytics, and technology.
          I enjoy taking a real-world business problem, understanding the data
          behind it, and turning that information into something useful.
        </p>

        <p>
          I've worked with financial and customer-facing processes in banking
          and later gained hands-on experience with data integration and
          analytics technologies.
        </p>

        <p>
          Today, my interests are centered around data analytics, business
          intelligence, artificial intelligence, and building practical
          analytical products.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Experience */}
<section
  id="experience"
  className="mx-auto max-w-6xl border-t border-neutral-900 px-6 py-32"
>
  <div className="mb-16">
    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
      Experience
    </p>

    <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
      Where I've been.
    </h2>
  </div>

  <div className="space-y-0">

    {/* Experience 01 */}
    <div className="grid gap-6 border-t border-neutral-800 py-10 md:grid-cols-[180px_1fr_160px]">
      <p className="text-sm text-neutral-600">
        Experience 01
      </p>

      <div>
        <h3 className="text-2xl font-medium">
          Global IME Bank
        </h3>

        <p className="mt-1 text-neutral-500">
          Banking · Business & Credit Analysis
        </p>

        <p className="mt-5 max-w-2xl leading-7 text-neutral-400">
          Experience working with customers, financial products, credit-related
          processes, business development, and analytical decision-making in a
          commercial banking environment.
        </p>
      </div>

      <p className="text-sm text-neutral-600 md:text-right">
        Nepal
      </p>
    </div>

    {/* Experience 02 */}
    <div className="grid gap-6 border-t border-neutral-800 py-10 md:grid-cols-[180px_1fr_160px]">
      <p className="text-sm text-neutral-600">
        Experience 02
      </p>

      <div>
        <h3 className="text-2xl font-medium">
          Striim
        </h3>

        <p className="mt-1 text-neutral-500">
          Field Engineering Intern
        </p>

        <p className="mt-5 max-w-2xl leading-7 text-neutral-400">
          Worked with real-time data integration technologies and supported
          customer use cases involving data pipelines, troubleshooting, and
          cloud data platforms.
        </p>
      </div>

      <p className="text-sm text-neutral-600 md:text-right">
        United States
      </p>
    </div>
    
    {/* Education */}
    <div className="grid gap-6 border-t border-neutral-800 py-10 md:grid-cols-[180px_1fr_160px]">
      <p className="text-sm text-neutral-600">
        Education
      </p>

      <div>
        <h3 className="text-2xl font-medium">
          University of New Haven
        </h3>

        <p className="mt-1 text-neutral-500">
          MS Business Analytics
        </p>

        <p className="mt-5 max-w-2xl leading-7 text-neutral-400">
          Graduate studies focused on data analytics, databases, visualization,
          forecasting, data mining, and business intelligence.
        </p>
      </div>

      <p className="text-sm text-neutral-600 md:text-right">
        Connecticut
      </p>
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