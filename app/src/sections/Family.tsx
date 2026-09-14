import Reveal from "../components/Reveal";
import BounceText, { FlowerMark } from "../components/BounceText";
import family from "../assets/chobits-family.webp";

const cast = [
  { name: "ちぃ", state: "已入住" },
  { name: "丝茉茉", state: "制作中" },
  { name: "琴子", state: "排队中" },
  { name: "柚姬", state: "排队中" },
  { name: "芙蕾雅", state: "排队中" },
  { name: "？", state: "敬请期待" },
];

export default function Family() {
  return (
    <section id="family" className="noise bg-[var(--blue-soft)]">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Reveal className="text-center">
          <p className="font-display text-sm tracking-[0.3em] text-[var(--ink-soft)]">
            THE WHOLE GANG
          </p>
          <h2 className="font-display mt-3 text-4xl tracking-wide md:text-5xl">
            <BounceText text="ちぃ 只是第一位" />
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-[var(--ink-soft)]">
            《Chobits》的世界里还有许多可爱的面孔。
            <br />
            我们正在努力，让这张合照里的大家，一个接一个地来到你身边。
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative mx-auto mt-12 max-w-4xl">
            <div className="card-line hover-lift rotate-[-0.6deg] rounded-[24px] bg-white p-3 md:p-4">
              <img
                src={family}
                alt="《Chobits》主要角色大合照"
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
            {cast.map((c, i) => (
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
                  · {c.state}
                </span>
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-xs font-bold tracking-widest text-[var(--ink-soft)]">
            下一个住进你桌面的，会是谁呢？
          </p>
        </Reveal>
      </div>
    </section>
  );
}
