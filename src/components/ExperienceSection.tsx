import { Briefcase, Camera, Shield, Users, Award } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const highlights = [
  { icon: Shield, text: "Led QA for AI-powered object measurement systems" },
  { icon: Camera, text: "Worked with 2D/3D cameras – ToF, Stereo, Structured Light" },
  { icon: Users, text: "Managed a team of 5 engineers" },
  { icon: Award, text: "Contributed to NTEP certification (USA)" },
  { icon: Briefcase, text: "Improved system accuracy and reliability" },
];

const ExperienceSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          3+ years driving quality and innovation in AI-powered systems
        </p>

        <div className={`glass-card-glow p-8 md:p-12 ${inView ? "animate-slide-up" : "opacity-0"}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Quality Assurance Analyst</h3>
              <p className="text-primary font-mono text-sm">VisAI Labs · 2022 – 2025</p>
            </div>
          </div>
          <p className="text-muted-foreground mt-4 mb-8">
            Spearheaded QA efforts for cutting-edge computer vision systems, ensuring measurement precision and reliability across AI-driven products deployed in real-world industrial environments.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <Icon className="text-primary mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-sm">{h.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
