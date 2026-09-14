import Reveal from "../components/Reveal";
import BounceText from "../components/BounceText";
import ScallopEdge from "../components/ScallopEdge";
import chiiHideki from "../assets/chii-hideki-chibi.webp";
import chiiHeadpat from "../assets/chii-headpat.webp";
import chiiPicturebook from "../assets/chii-picturebook.webp";

const features = [
  {
    no: "01",
    bg: "var(--blush)",
    dot: "#e86a92",
    img: chiiHideki,
    alt: "ちぃ 躲在秀树身后",
    title: "住在桌面上",
    body: "开机之后，ちぃ 就安静地待在屏幕一角。不占地方、不抢焦点，只在你需要一点治愈的时候，刚好出现在视线里。",
    chips: ["开机自动启动", "窗口置顶可选", "支持多显示器"],
  },
  {
    no: "02",
    bg: "var(--lavender)",
    dot: "#8f83d8",
    img: chiiHeadpat,
    alt: "秀树轻轻摸着ちぃ的头",
    title: "摸头有回应",
    body: "点击、拖拽、戳一戳——你的每个小动作，ちぃ 都会给出自己的回应。摸摸她的头，她会安心地眯起眼睛；多陪她一会儿，她今天的心情也会跟着变好。",
    chips: ["多种互动手势", "表情即时反馈", "陪伴提升心情"],
  },
  {
    no: "03",
    bg: "var(--mint)",
    dot: "#3fa57c",
    img: chiiPicturebook,
    alt: "绘本《只属于我的人 ～空无一人的城镇～》插画",
    title: "越聊越懂你",
    body: "你们聊过的点点滴滴，ちぃ 都会悄悄记在心里。聊得越多，她就越懂你的喜好和习惯——慢慢地，成为真正「只属于你的一台」。",
    chips: ["对话内容记忆", "记住你的喜好", "记忆仅存本地"],
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
                  className={`card-line hover-lift overflow-hidden bg-white rounded-[28px] ${
                    i % 2 === 1 ? "rotate-[1.5deg]" : "rotate-[-1.5deg]"
                  }`}
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
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {f.chips.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-2 text-sm font-medium text-[var(--ink-soft)]"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: f.dot }}
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          </div>
        </div>
      ))}
    </section>
  );
}
