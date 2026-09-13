import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import Features from "./sections/Features";
import Family from "./sections/Family";
import Download from "./sections/Download";
import InstallTips from "./sections/InstallTips";
import Footer from "./sections/Footer";
import ScallopEdge from "./components/ScallopEdge";

function Divider({ from, to }: { from: string; to: string }) {
  return (
    <div style={{ background: from }}>
      <ScallopEdge color={to} />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Divider from="var(--cream)" to="var(--pink)" />
        <Marquee />
        <Divider from="var(--pink)" to="var(--blush)" />
        <Features />
        <Divider from="var(--mint)" to="var(--blue-soft)" />
        <Family />
        <Divider from="var(--blue-soft)" to="var(--peach)" />
        <Download />
        <Divider from="var(--peach)" to="var(--sage)" />
        <InstallTips />
        <Divider from="var(--sage)" to="var(--ink-deep)" />
      </main>
      <Footer />
    </div>
  );
}
