type ProjectCardProps = {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  href: string;
};

export default function ProjectCard({
  number,
  category,
  title,
  description,
  technologies,
  href,
}: ProjectCardProps) {
  return (
    <a
  href={href}
  className="group relative block overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 p-8 transition duration-500 hover:-translate-y-1 hover:border-neutral-600 md:p-12"
>
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/[0.02] blur-3xl transition duration-700 group-hover:bg-white/[0.05]" />

      <div className="relative flex flex-col justify-between gap-12 md:flex-row">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-neutral-600">
            {number} / {category}
          </p>

          <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">
            {title}
          </h3>

          <p className="mt-5 max-w-xl leading-7 text-neutral-400">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-500 transition group-hover:border-neutral-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-end">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-800 transition duration-500 group-hover:border-neutral-500 group-hover:bg-white group-hover:text-black">
            ↗
          </div>
        </div>
      </div>
    </a>
  );
}