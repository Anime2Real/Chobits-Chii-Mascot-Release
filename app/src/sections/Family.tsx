import Reveal from "../components/Reveal";
import BounceText, { FlowerMark } from "../components/BounceText";
import family from "../assets/chobits-family.webp";
import { useLang } from "../i18n";

export default function Family() {
  const { t } = useLang();
  return (
    <section id="family" className="noise bg-[var(--blue-soft)]">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Reveal className="text-center">
          <p className="font-display text-sm tracking-[0.3em] text-[var(--ink-soft)]">
            THE WHOLE GANG
          </p>
          <h2 className="font-display mt-3 text-4xl tracking-wide md:text-5xl">
            <BounceText text={t.family.title} />
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-[var(--ink-soft)]">
            {t.family.body}
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative mx-auto mt-12 max-w-4xl">
            <div className="card-line hover-lift rotate-[-0.6deg] rounded-[24px] bg-white p-3 md:p-4">
              <img
                src={family}
                alt={t.family.imgAlt}
                className="block h-auto w-full rounded-[14px]"
                loading="lazy"
              />
            </div>
            <span className="tape -top-3 left-10" aria-hidden />
            <span className="tape -top-3 right-10 rotate-6" aria-hidden />
            <FlowerMark
              aria-hidden
              className="wiggle absolute -right-5 -top-6 h-9 w-9 text-[var(--pink-deep)]"
            />
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {t.family.cast.map((c, i) => (
              <span
                key={c.name}
                className={`tag-pill ${i === 0 ? "!bg-[var(--pink)]" : ""}`}
              >
                <span
                  className={`inline-block h-2 w-2 rounded-full ${
                    i === 0 ? "heartbeat bg-[var(--pink-deep)]" : "bg-[var(--ink-soft)]"
                  }`}
                />
                {c.name}
                <span className="text-[0.7rem] font-medium text-[var(--ink-soft)]">
                  · {c.status}
                </span>
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-xs font-bold tracking-widest text-[var(--ink-soft)]">
            {t.family.ending}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
