export default function StockIntelligence() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="/"
          className="text-lg font-semibold tracking-wide"
        >
          MANJIL<span className="text-neutral-500">.</span>
        </a>

        <a
          href="/#work"
          className="text-sm text-neutral-500 transition hover:text-white"
        >
          ← Back to work
        </a>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-24">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
          01 / AI · DATA · FINANCE
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
          Stock
          <br />
          <span className="text-neutral-500">
            Intelligence.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
          An analytical platform designed to bring together market data,
          technical indicators, news sentiment, anomaly detection, and
          backtesting into one practical workflow.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {[
            "Python",
            "Market Data",
            "Technical Analysis",
            "Sentiment Analysis",
            "Anomaly Detection",
            "Backtesting",
          ].map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-500"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      {/* Project Visual */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 p-6 md:p-10">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                Market Overview
              </p>

              <p className="mt-2 text-xl font-medium">
                Analytical Dashboard
              </p>
            </div>

            <div className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-500">
              LIVE ANALYSIS
            </div>
          </div>

          {/* Fake chart visual */}
          <div className="relative h-72 overflow-hidden rounded-2xl border border-neutral-900 bg-[#080808]">
            <div className="absolute inset-0 flex items-end gap-2 px-6 pb-6">
              {[25, 32, 28, 40, 36, 48, 45, 58, 52, 67, 62, 74, 70, 82].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-sm bg-neutral-800 transition-all duration-500 hover:bg-neutral-500"
                    style={{ height: `${height}%` }}
                  />
                )
              )}
            </div>

            <div className="absolute left-6 top-6">
              <p className="text-xs text-neutral-600">
                PRICE MOVEMENT
              </p>

              <p className="mt-2 text-3xl font-medium">
                Market Signal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-6 py-32">
        <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              01 / Overview
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Turning fragmented market information into a single analytical
              workflow.
            </h2>

            <p className="mt-8 leading-8 text-neutral-400">
              Financial market analysis often requires looking at several
              different signals at once. This project explores how market
              prices, technical indicators, news sentiment, and unusual market
              behavior can be brought together to support a more structured
              analysis process.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-y border-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-32">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            02 / Architecture
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            From raw data
            <br />
            <span className="text-neutral-500">
              to useful signals.
            </span>
          </h2>

          <div className="mt-16 grid gap-4 md:grid-cols-5">
            {[
              ["01", "Market Data"],
              ["02", "Processing"],
              ["03", "Indicators"],
              ["04", "Sentiment"],
              ["05", "Analysis"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="rounded-2xl border border-neutral-800 p-6"
              >
                <p className="text-xs text-neutral-600">{number}</p>

                <p className="mt-10 text-sm text-neutral-300">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I explored */}
      <section className="mx-auto max-w-6xl px-6 py-32">
        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
          03 / Analysis
        </p>

        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          What I explored.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Technical Indicators",
              description:
                "Exploring price and volume-based indicators to understand market behavior and potential signals.",
            },
            {
              title: "News Sentiment",
              description:
                "Using news and text-based signals as an additional source of context around market movements.",
            },
            {
              title: "Anomaly Detection",
              description:
                "Identifying unusual observations that may deserve additional investigation.",
            },
            {
              title: "Backtesting",
              description:
                "Testing analytical strategies against historical data to understand how they would have behaved.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-800 p-8"
            >
              <h3 className="text-xl font-medium">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-32">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Next
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Building analytical tools that are useful, explainable, and
            practical.
          </h2>

          <a
            href="/#work"
            className="mt-10 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            ← Back to projects
          </a>
        </div>
      </section>
    </main>
  );
}