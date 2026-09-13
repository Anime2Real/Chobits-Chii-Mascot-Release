import Reveal from "../components/Reveal";
import BounceText from "../components/BounceText";
import ScallopEdge from "../components/ScallopEdge";
import chiiHideki from "../assets/chii-hideki-chibi.webp";
import sumomo from "../assets/sumomo.webp";
import chiiWindow from "../assets/chii-window.webp";

const features = [
  {
    no: "01",
    bg: "var(--blush)",
    img: chiiHideki,
    alt: "ちぃ 躲在秀树身后",
    title: "住在桌面上",
    body: "开机之后，ちぃ 就安静地待在屏幕一角。不占地方、不抢焦点，只在你需要一点治愈的时候，刚好出现在视线里。",
    chips: ["轻量驻留", "置顶可选", "多显示器"],
  },
  {
    no: "02",
    bg: "var(--lavender)",
    img: sumomo,
    alt: "SUMOMO 拉开窗帘",
    title: "摸摸头，有回应",
    body: "点击、拖拽、戳一戳——她会有各种小反应。就像真正的人形电脑一样，ちぃ 会慢慢熟悉你这台「只属于你的一台」。",
    chips: ["点击互动", "随机动作", "彩蛋语音"],
  },
  {
    no: "03",
    bg: "var(--mint)",
    img: chiiWindow,
    alt: "窗边的ちぃ与秀树",
    title: "一直是最新的她",
    body: "应用内置自动更新。安装一次，之后的新衣服、新动作、新表情都会自己送到你手上，不用再回到这个页面。",
    chips: ["自动更新", "开机自启", "离线可用"],
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      {features.map((f, i) => (
        <div key={f.no}>
          {i > 0 && (
            <div style={{ background: features[i - 1].bg }}>
              <ScallopEdge color={f.bg} />
            </div>
          )}
          <div className="noise" style={{ background: f.bg }}>
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:gap-16 md:px-6 md:py-28">
            {/* image */}
            <Reveal className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="relative mx-auto max-w-[440px]">
                <div
                  className={`card-line hover-lift overflow-hidden bg-white ${
                    i === 2 ? "arch-frame" : "rounded-[28px]"
                  } ${i % 2 === 1 ? "rotate-[1.5deg]" : "rotate-[-1.5deg]"}`}
                >
                  <img src={f.img} alt={f.alt} className="block h-auto w-full" loading="lazy" />
                </div>
                <span
                  className={`tape ${i % 2 === 1 ? "-right-4 rotate-6" : "-left-4"} -top-3`}
                  aria-hidden
                />
                <span
                  aria-hidden
                  className="font-display absolute -bottom-6 right-2 text-5xl text-[var(--ink)] opacity-15"
                >
                  {f.no}
                </span>
              </div>
            </Reveal>

            {/* copy */}
            <Reveal delay={120} className={i % 2 === 1 ? "md:order-1" : ""}>
              <p className="font-display text-sm tracking-[0.3em] text-[var(--ink-soft)]">
                {f.no} — FEATURE
              </p>
              <h2 className="font-display mt-3 text-4xl tracking-wide md:text-5xl">
                <BounceText text={f.title} />
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-[var(--ink-soft)]">{f.body}</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {f.chips.map((c) => (
                  <span key={c} className="tag-pill">
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          </div>
        </div>
      ))}
    </section>
  );
}
