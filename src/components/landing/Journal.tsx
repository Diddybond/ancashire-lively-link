import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { journalPosts, type JournalPost } from "./journal-posts";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return dateFormatter.format(d);
}

const ratioClass: Record<NonNullable<JournalPost["ratio"]>, string> = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
};

export function Journal() {
  const heading = useScrollReveal<HTMLHeadingElement>();
  const intro = useScrollReveal<HTMLParagraphElement>();

  // Sort newest first (defensive — author may forget to prepend).
  const posts = [...journalPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section
      id="journal"
      className="scroll-mt-24 py-32 lg:py-48"
      aria-labelledby="journal-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <span className="mb-6 block text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
            The Journal · Latest News
          </span>
          <h2
            ref={heading}
            id="journal-heading"
            className="reveal-up font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            What we&apos;ve been
            <span className="block italic text-[var(--primary)]">up to lately.</span>
          </h2>
          <p
            ref={intro}
            className="reveal-up delay-1 mt-6 text-base leading-relaxed text-foreground/80 sm:mt-8 sm:text-xl"
          >
            A quiet little record of the days out, kitchen-table moments, and small adventures
            I share with the people I look after.
          </p>
        </div>

        {posts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <JournalCard key={`${post.date}-${i}`} post={post} index={i} />
              ))}
            </div>
            <p className="mx-auto mt-16 max-w-2xl text-center text-base text-foreground/65">
              New entries appear here as we go.
            </p>
          </>
        ) : (
          <div className="mx-auto max-w-2xl rounded-sm border border-border/60 bg-[color-mix(in_oklab,var(--primary)_4%,transparent)] px-8 py-14 text-center">
            <p className="font-serif text-xl leading-relaxed text-foreground/80 sm:text-2xl">
              Adventures incoming.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60">
              I'll be sharing days out, kitchen-table moments, and small adventures
              from across Lancashire. Check back soon — entries will appear here as they happen.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function JournalCard({ post, index }: { post: JournalPost; index: number }) {
  const ref = useScrollReveal<HTMLElement>();
  const delayClass = `delay-${(index % 4) + 1}` as const;
  const ratio = ratioClass[post.ratio ?? "portrait"];

  return (
    <article
      ref={ref}
      className={`reveal-up ${delayClass} group flex flex-col`}
    >
      <div
        className={`relative ${ratio} overflow-hidden bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]`}
      >
        {post.video ? (
          <video
            src={post.video}
            poster={post.poster}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : post.image ? (
          <img
            src={post.image}
            alt={post.caption}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
          />
        ) : null}
      </div>

      <div className="mt-6 flex items-baseline justify-between text-xs font-semibold uppercase tracking-[0.24em]">
        <span className="text-[var(--primary)]">{post.tag}</span>
        <time dateTime={post.date} className="text-foreground/55">
          {formatDate(post.date)}
        </time>
      </div>

      <p className="mt-4 font-serif text-lg leading-snug text-foreground/85 sm:text-xl">
        {post.caption}
      </p>
    </article>
  );
}
