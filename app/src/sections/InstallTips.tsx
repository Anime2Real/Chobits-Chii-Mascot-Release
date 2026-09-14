import Reveal from "../components/Reveal";
import BounceText from "../components/BounceText";
import { useLang } from "../i18n";

export default function InstallTips() {
  const { t } = useLang();
  return (
    <section id="install" className="noise bg-[var(--sage)]">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Reveal className="text-center">
          <p className="font-display text-sm tracking-[0.3em] text-[var(--ink-soft)]">
            {t.install.kicker}
          </p>
          <h2 className="font-display mt-3 text-4xl tracking-wide md:text-5xl">
            <BounceText text={t.install.title} />
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.install.items.map((tip, i) => (
            <Reveal key={tip.no} delay={i * 110}>
              <div className="card-line hover-lift h-full rounded-[24px] bg-white p-7">
                <span className="font-display inline-flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[var(--line)] bg-[var(--pink)] text-xl">
                  {tip.no}
                </span>
                <h3 className="font-display mt-4 text-2xl tracking-wide">{tip.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {tip.pre}
                  {tip.em && (
                    <em className="mx-1 rounded-md bg-[var(--lavender)] px-1.5 py-0.5 not-italic">
                      {tip.em}
                    </em>
                  )}
                  {tip.post}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
