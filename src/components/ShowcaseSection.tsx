const NHAXE_DEMO = "https://nhaxeutchi.vercel.app/";
const AITHUCCHIEN_DEMO = "https://aithucchien-iota.vercel.app/";
const YOUTUBE_ID = "NDpfIieAWyI";

const previews = [
  {
    href: NHAXE_DEMO,
    title: "Nhà xe demo",
    description: "Live marketing site on Vercel.",
    imageSrc: "/showcase/nhaxeutchi-landing.png",
  },
  {
    href: AITHUCCHIEN_DEMO,
    title: "AI Thực Chiến",
    description: "Landing with the web chat widget open.",
    imageSrc: "/showcase/aithucchien-widget-open.png",
  },
] as const;

export function ShowcaseSection() {
  return (
    <section className="border-y border-border bg-surface/40" aria-labelledby="showcase-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center lg:max-w-none lg:text-left">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">/ demo</p>
          <h2
            id="showcase-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            See it on a live storefront
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Walkthrough video, then open either live Vercel demo — transport landing or AI practice
            site with the widget open.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Video
            </p>
            <div className="overflow-hidden rounded-xl border border-border bg-black shadow-xl">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0`}
                  title="OpenCalf demo walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Live pages
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {previews.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-xl border border-border bg-background shadow-md transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <img
                      src={item.imageSrc}
                      alt={`Screenshot preview: ${item.title}`}
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                      Open demo
                    </p>
                    <p className="mt-1 font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    <p className="mt-3 font-mono text-xs text-muted-foreground underline-offset-4 group-hover:underline">
                      {item.href.replace(/^https:\/\//, "")}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
