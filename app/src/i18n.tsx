import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "zh" | "ja" | "en";

const zh = {
  nav: {
    features: "功能",
    download: "下载",
    install: "安装小贴士",
  },
  hero: {
    tag: "CHOBITS DESKTOP MASCOT",
    headlineBefore: "把",
    headlineAfter: "带回家",
    intro1: "只属于你的一台 · ちょうびっツ。",
    intro2: "ちぃ 会站在你的桌面角落，陪你工作、学习、发呆——",
    intro3: "偶尔卖个萌，偶尔说一句「ちぃ？」。",
    download: "立即下载",
    github: "在 GitHub 上看看 ↗",
    platforms: "macOS · Windows · Linux · 免费使用",
    heroAlt: "女仆装的ちぃ（Chii）—— Chobits 中的人形电脑",
  },
  marquee: {
    items: [
      "ちぃ！",
      "桌面宠物",
      "只属于你的一台",
      "DESKTOP MASCOT",
      "自动更新",
      "ちょうびっツ",
      "免费使用",
      "CHOBITS",
    ],
  },
  features: {
    items: [
      {
        no: "01",
        title: "住在桌面上",
        body: "开机之后，ちぃ 就安静地待在屏幕一角。不占地方、不抢焦点，只在你需要一点治愈的时候，刚好出现在视线里。",
        chips: ["开机自动启动", "窗口置顶可选", "支持多显示器"],
        alt: "ちぃ 躲在秀树身后",
      },
      {
        no: "02",
        title: "摸头有回应",
        body: "点击、拖拽、戳一戳——你的每个小动作，ちぃ 都会给出自己的回应。摸摸她的头，她会安心地眯起眼睛；多陪她一会儿，她今天的心情也会跟着变好。",
        chips: ["多种互动手势", "表情即时反馈", "陪伴提升心情"],
        alt: "秀树轻轻摸着ちぃ的头",
      },
      {
        no: "03",
        title: "越聊越懂你",
        body: "你们聊过的点点滴滴，ちぃ 都会悄悄记在心里。聊得越多，她就越懂你的喜好和习惯——慢慢地，成为真正「只属于你的一台」。",
        chips: ["对话内容记忆", "记住你的喜好", "记忆仅存本地"],
        alt: "绘本《只属于我的人 ～空无一人的城镇～》插画",
      },
    ],
  },
  family: {
    kicker: "COMING SOON",
    title: "ちぃ 只是第一位",
    body: "《Chobits》的世界里还有好多可爱的角色。她们也在排队等着来到你身边——也许下一次更新，就会有一位新伙伴敲响你的屏幕。",
    castTitle: "登场预定",
    cast: [
      { name: "ちぃ", status: "已入住", live: true },
      { name: "丝茉茉", status: "制作中", live: false },
      { name: "琴子", status: "排队中", live: false },
      { name: "柚姬", status: "排队中", live: false },
      { name: "芙蕾雅", status: "排队中", live: false },
      { name: "？", status: "敬请期待", live: false },
    ],
    ending: "下一个来到你身边的，会是谁呢？",
    imgAlt: "Chobits 角色大合照",
  },
  download: {
    kicker: "DOWNLOAD",
    title: "选择你的平台",
    released: "发布于",
    loading: "寻找ちぃ中…",
    preparing: "准备中…",
    downloadBtn: "下载",
    emptyTitle: "ちぃ 正在准备下载链接…",
    emptyBody:
      "正式包还没有放出。可以先去 GitHub Releases 蹲守最新进展，或者点 Star 第一时间收到通知。",
    emptyLink: "去 Releases 看看 ↗",
    cards: [
      { label: "macOS", sub: "Apple Silicon" },
      { label: "macOS", sub: "Intel" },
      { label: "Windows", sub: "10 / 11" },
      { label: "Linux", sub: "Ubuntu" },
    ],
  },
  music: {
    play: "播放音乐",
    pause: "暂停音乐",
    askTitle: "播放背景音乐？",
    askBody: "打开后，ちぃ 会一边哼着歌一边陪你。",
    askYes: "播放",
    askNo: "先不要",
  },
  install: {
    kicker: "BEFORE YOU START",
    title: "安装小贴士",
    items: [
      {
        no: "i",
        title: "macOS",
        pre: "已 Apple 公证，正常安装即可。如遇「无法验证开发者」，请在",
        em: "系统设置 → 隐私与安全性",
        post: "中点击「仍要打开」。",
      },
      {
        no: "ii",
        title: "Windows",
        pre: "安装包已完成代码签名（Certum 个人证书）。SmartScreen 仍提示时选择",
        em: "更多信息 → 仍要运行",
        post: "（个人证书信誉积累中，属正常现象）。",
      },
      {
        no: "iii",
        title: "自动更新",
        pre: "应用内置自动更新，安装后无需再回到本页。ちぃ 会自己换上新衣服。",
        em: "",
        post: "",
      },
    ],
  },
  footer: {
    github: "GitHub 仓库",
    releases: "Releases 下载页",
    copyright:
      "非官方粉丝作品 · Chobits © CLAMP・講談社／ちょびっツ製作委員会 · 客户端源码暂不开源",
  },
};

export type Dict = typeof zh;

const ja: Dict = {
  nav: {
    features: "機能",
    download: "ダウンロード",
    install: "インストールのコツ",
  },
  hero: {
    tag: "CHOBITS DESKTOP MASCOT",
    headlineBefore: "",
    headlineAfter: "をお持ち帰り",
    intro1: "あなただけの一台 · ちょうびっツ。",
    intro2: "ちぃはデスクトップの片隅に佇んで、あなたの作業・勉強・ぼんやり時間に寄り添います——",
    intro3: "時々甘えて、時々「ちぃ？」とつぶやきます。",
    download: "ダウンロード",
    github: "GitHub で見る ↗",
    platforms: "macOS · Windows · Linux · 無料で使用可能",
    heroAlt: "メイド服のちぃ（Chii）—— Chobits の人形パソコン",
  },
  marquee: {
    items: [
      "ちぃ！",
      "デスクトップマスコット",
      "あなただけの一台",
      "DESKTOP MASCOT",
      "自動更新",
      "ちょうびっツ",
      "無料で使用可能",
      "CHOBITS",
    ],
  },
  features: {
    items: [
      {
        no: "01",
        title: "デスクトップに住む",
        body: "起動すると、ちぃは静かに画面の片隅にいます。場所も取らず、フォーカスも奪わず——あなたが癒しを必要とした瞬間に、ちょうど目に入る場所に。",
        chips: ["ログイン時に自動起動", "最前面表示の切替可", "マルチモニター対応"],
        alt: "秀樹の後ろに隠れるちぃ",
      },
      {
        no: "02",
        title: "撫でれば応える",
        body: "クリック、ドラッグ、つんつん——あなたの仕草ひとつひとつに、ちぃは自分なりの反応を返します。頭を撫でれば安心して目を細め、いっしょに過ごすほど、その日のご機嫌も良くなっていきます。",
        chips: ["多彩なインタラクション", "表情がすぐ変わる", "一緒にいるほどご機嫌に"],
        alt: "ちぃの頭を優しく撫でる秀樹",
      },
      {
        no: "03",
        title: "話すほどあなたを知る",
        body: "ふたりで話したことは、ちぃがそっと心に留めています。話せば話すほど、あなたの好みや癖を覚えて——いつしか本当の「あなただけの一台」になります。",
        chips: ["会話を記憶", "好みを覚える", "記憶はローカル保存"],
        alt: "絵本『あたしだけのヒト 〜だれもいないまち〜』の表紙",
      },
    ],
  },
  family: {
    kicker: "COMING SOON",
    title: "ちぃは最初の一人",
    body: "『ちょびっツ』の世界には、ほかにも可愛いキャラクターがいっぱい。みんな順番待ちで、あなたのもとへやって来る日を待っています——次のアップデートで、新しい仲間があなたの画面をノックするかも。",
    castTitle: "登場予定",
    cast: [
      { name: "ちぃ", status: "入居済み", live: true },
      { name: "すもも", status: "制作中", live: false },
      { name: "琴子", status: "順番待ち", live: false },
      { name: "柚姫", status: "順番待ち", live: false },
      { name: "フレイヤ", status: "順番待ち", live: false },
      { name: "？", status: "お楽しみに", live: false },
    ],
    ending: "次にあなたのもとへ来るのは、誰でしょう？",
    imgAlt: "ちょびっツ キャラクター集合写真",
  },
  download: {
    kicker: "DOWNLOAD",
    title: "プラットフォームを選ぶ",
    released: "リリース日",
    loading: "ちぃを探しています…",
    preparing: "準備中…",
    downloadBtn: "ダウンロード",
    emptyTitle: "ちぃがダウンロードリンクを準備しています…",
    emptyBody:
      "正式版パッケージはまだ公開されていません。GitHub Releases で最新情報をチェックするか、Star を押して通知を受け取りましょう。",
    emptyLink: "Releases を見る ↗",
    cards: [
      { label: "macOS", sub: "Apple Silicon" },
      { label: "macOS", sub: "Intel" },
      { label: "Windows", sub: "10 / 11" },
      { label: "Linux", sub: "Ubuntu" },
    ],
  },
  music: {
    play: "音楽を再生",
    pause: "音楽を止める",
    askTitle: "BGM を再生しますか？",
    askBody: "オンにすると、ちぃ が歌を口ずさみながらそばにいてくれます。",
    askYes: "再生する",
    askNo: "今はしない",
  },
  install: {
    kicker: "BEFORE YOU START",
    title: "インストールのコツ",
    items: [
      {
        no: "i",
        title: "macOS",
        pre: "Apple の公証済みなので、そのままインストールできます。「開発元を検証できません」と表示されたら、",
        em: "システム設定 → プライバシーとセキュリティ",
        post: "から「このまま開く」をクリック。",
      },
      {
        no: "ii",
        title: "Windows",
        pre: "インストーラーはコード署名済みです（Certum 個人証明書）。SmartScreen が表示されたら",
        em: "詳細情報 → 実行",
        post: "を選択（個人証明書の評価蓄積中の正常な表示です）。",
      },
      {
        no: "iii",
        title: "自動更新",
        pre: "自動更新機能を内蔵。インストール後はこのページに戻る必要はありません。ちぃが自分で新しい衣装に着替えます。",
        em: "",
        post: "",
      },
    ],
  },
  footer: {
    github: "GitHub リポジトリ",
    releases: "Releases ページ",
    copyright:
      "非公式ファン作品 · Chobits © CLAMP・講談社／ちょびっツ製作委員会 · クライアントのソースコードは現時点では非公開",
  },
};

const en: Dict = {
  nav: {
    features: "Features",
    download: "Download",
    install: "Install Tips",
  },
  hero: {
    tag: "CHOBITS DESKTOP MASCOT",
    headlineBefore: "Bring",
    headlineAfter: "Home",
    intro1: "Your one and only Persocom.",
    intro2: "Chii keeps you company from a quiet corner of your desktop — while you work, study, or just space out. ",
    intro3: "Sometimes she acts cute, sometimes she simply says \"chii?\".",
    download: "Download",
    github: "View on GitHub ↗",
    platforms: "macOS · Windows · Linux · Free to Use",
    heroAlt: "Chii in a maid outfit — the Persocom from Chobits",
  },
  marquee: {
    items: [
      "ちぃ!",
      "Desktop Mascot",
      "Your One and Only",
      "DESKTOP MASCOT",
      "Auto Update",
      "ちょうびっツ",
      "Free to Use",
      "CHOBITS",
    ],
  },
  features: {
    items: [
      {
        no: "01",
        title: "Lives on Your Desktop",
        body: "After startup, Chii quietly stays in a corner of your screen. She takes no space and steals no focus — she's simply there, right in view, whenever you need a little comfort.",
        chips: ["Launch at login", "Optional always-on-top", "Multi-monitor support"],
        alt: "Chii hiding behind Hideki",
      },
      {
        no: "02",
        title: "Pat Her, She Responds",
        body: "Click, drag, poke — Chii responds to every little gesture. Pat her head and she'll squint happily; keep her company a little longer and her mood brightens for the day.",
        chips: ["Rich interactions", "Instant reactions", "Mood grows with you"],
        alt: "Hideki gently patting Chii's head",
      },
      {
        no: "03",
        title: "She Knows You by Heart",
        body: "Everything you talk about, Chii quietly keeps in her heart. The more you chat, the more she learns your likes and habits — slowly becoming truly yours, your one and only.",
        chips: ["Remembers conversations", "Learns your tastes", "Memory stays on-device"],
        alt: "Cover of the picture book \"The One Just for Me ~ The Town with No One ~\"",
      },
    ],
  },
  family: {
    kicker: "COMING SOON",
    title: "Chii Is Just the First",
    body: "The world of Chobits is full of lovely characters, and they're all lining up to come to you — maybe the next update will bring a new friend knocking on your screen.",
    castTitle: "Coming Cast",
    cast: [
      { name: "Chii", status: "Moved in", live: true },
      { name: "Sumomo", status: "In the works", live: false },
      { name: "Kotoko", status: "In line", live: false },
      { name: "Yuzuki", status: "In line", live: false },
      { name: "Freya", status: "In line", live: false },
      { name: "?", status: "Stay tuned", live: false },
    ],
    ending: "Who will come to you next?",
    imgAlt: "Group photo of the Chobits cast",
  },
  download: {
    kicker: "DOWNLOAD",
    title: "Pick Your Platform",
    released: "Released",
    loading: "Looking for Chii…",
    preparing: "Preparing…",
    downloadBtn: "Download",
    emptyTitle: "Chii is preparing the download links…",
    emptyBody:
      "The packages aren't available right now. Check GitHub Releases for the latest updates, or star the repo to get notified first.",
    emptyLink: "Go to Releases ↗",
    cards: [
      { label: "macOS", sub: "Apple Silicon" },
      { label: "macOS", sub: "Intel" },
      { label: "Windows", sub: "10 / 11" },
      { label: "Linux", sub: "Ubuntu" },
    ],
  },
  music: {
    play: "Play music",
    pause: "Pause music",
    askTitle: "Play the background music?",
    askBody: "Turn it on and Chii will hum along while keeping you company.",
    askYes: "Play",
    askNo: "Not now",
  },
  install: {
    kicker: "BEFORE YOU START",
    title: "Install Tips",
    items: [
      {
        no: "i",
        title: "macOS",
        pre: "The app is notarized by Apple — just install normally. If you see \"developer cannot be verified\", open",
        em: "System Settings → Privacy & Security",
        post: "and click \"Open Anyway\".",
      },
      {
        no: "ii",
        title: "Windows",
        pre: "The installer is code-signed (Certum individual certificate). If SmartScreen still appears, choose",
        em: "More info → Run anyway",
        post: "(normal while an individual certificate builds reputation).",
      },
      {
        no: "iii",
        title: "Auto Update",
        pre: "Built-in auto update — once installed, you never need to come back to this page. Chii changes into her new outfits all by herself.",
        em: "",
        post: "",
      },
    ],
  },
  footer: {
    github: "GitHub Repo",
    releases: "All Releases",
    copyright:
      "Unofficial fan work · Chobits © CLAMP・Kodansha / Chobits Production Committee · Client source code not open-sourced at this time",
  },
};

export const translations: Record<Lang, Dict> = { zh, ja, en };

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "zh", setLang: () => {} });

function detectInitialLang(): Lang {
  try {
    const saved = localStorage.getItem("chii-lang");
    if (saved === "zh" || saved === "ja" || saved === "en") return saved;
  } catch {
    /* ignore */
  }
  const nav = typeof navigator !== "undefined" ? navigator.language?.toLowerCase() ?? "" : "";
  if (nav.startsWith("ja")) return "ja";
  if (nav.startsWith("zh")) return "zh";
  if (nav.startsWith("en")) return "en";
  return "zh";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("chii-lang", l);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  return { lang, setLang, t: translations[lang] };
}
