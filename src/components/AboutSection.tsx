import { useInView } from "@/hooks/useInView";

const timeline = [
  { year: "2019–2022", title: "Diploma in ECE", desc: "Bharath Polytechnic, Chennai" },
  { year: "2022–2025", title: "QA Analyst", desc: "VisAI Labs – AI-powered measurement systems" },
  { year: "2025–Present", title: "B.Tech AI & DS", desc: "Anna University – Advancing into AI/ML" },
];

const AboutSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          An Electronics & Communication graduate turned QA Analyst, now transitioning into AI/ML engineering with a passion for computer vision and real-world intelligent systems.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-neon-purple to-transparent" />

          {timeline.map((item, i) => (
            <div
              key={i}
              className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} ${
                inView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary animate-pulse-glow z-10" />

              {/* Card */}
              <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"} ${i % 2 === 0 ? "" : "md:ml-auto"}`}>
                <div className="glass-card-glow p-6 hover:scale-[1.02] transition-transform duration-300">
                  <span className="text-primary font-mono text-sm">{item.year}</span>
                  <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                  <p className="text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
