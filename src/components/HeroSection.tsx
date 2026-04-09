import { useEffect, useState } from "react";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown } from "lucide-react";

const titles = ["QA Engineer → AI/ML Innovator", "Computer Vision Expert", "Problem Solver"];

const HeroSection = () => {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = titles[titleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setTitleIdx((i) => (i + 1) % titles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, titleIdx]);

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "AI/ML", label: "Computer Vision" },
    { value: "5+", label: "Team Members Led" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG */}
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center gap-12 py-32 px-4">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">Welcome to my portfolio</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="gradient-text">{displayed}</span>
            <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle animate-pulse" />
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8">
            Building intelligent, real-world AI solutions with computer vision expertise. Bridging quality assurance with cutting-edge machine learning.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#projects" className="neon-glow-btn bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
              View Projects
            </a>
            <a href="#contact" className="glass-card-glow px-8 py-3 rounded-lg font-semibold text-primary border border-primary/30 hover:border-primary/60 transition-all">
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 justify-center lg:justify-start">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary neon-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-primary via-neon-purple to-neon-blue rounded-full opacity-60 blur-xl animate-pulse-glow" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/40 neon-border">
              <img src={profileImg} alt="Pradeep Nanjundan" className="w-full h-full object-cover" width={512} height={512} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-float">
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;
