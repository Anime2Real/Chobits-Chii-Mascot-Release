import Reveal from "../components/Reveal";
import BounceText from "../components/BounceText";

const tips = [
  {
    no: "i",
    title: "macOS",
    body: (
      <>
        已 Apple 公证，正常安装即可。如遇「无法验证开发者」，请在
        <em className="mx-1 rounded-md bg-[var(--lavender)] px-1.5 py-0.5 not-italic">
          系统设置 → 隐私与安全性
        </em>
        中点击「仍要打开」。
      </>
    ),
  },
  {
    no: "ii",
    title: "Windows",
    body: (
      <>
        安装包暂未代码签名，SmartScreen 提示时选择
        <em className="mx-1 rounded-md bg-[var(--lavender)] px-1.5 py-0.5 not-italic">
          更多信息 → 仍要运行
        </em>
        ；浏览器警告时选择「保留」。
      </>
    ),
  },
  {
    no: "iii",
    title: "自动更新",
    body: <>应用内置自动更新，安装后无需再回到本页。ちぃ 会自己换上新衣服。</>,
  },
];

export default function InstallTips() {
  return (
    <section id="install" className="noise bg-[var(--sage)]">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Reveal className="text-center">
          <p className="font-display text-sm tracking-[0.3em] text-[var(--ink-soft)]">
            BEFORE YOU START
          </p>
          <h2 className="font-display mt-3 text-4xl tracking-wide md:text-5xl">
            <BounceText text="安装小贴士" />
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tips.map((t, i) => (
            <Reveal key={t.no} delay={i * 110}>
              <div className="card-line hover-lift h-full rounded-[24px] bg-white p-7">
                <span className="font-display inline-flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[var(--line)] bg-[var(--pink)] text-xl">
                  {t.no}
                </span>
                <h3 className="font-display mt-4 text-2xl tracking-wide">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
