import { Briefcase, Camera, Shield, Users, Award, FlaskConical, Cpu, Target, Layers, Eye, Box, Workflow } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/badge";

const highlights = [
  { icon: Shield, text: "Led QA for AI-powered object measurement systems" },
  {
    icon: Camera,
    text: "Worked extensively with 2D cameras and multiple 3D camera technologies",
    sub: [
      { icon: Eye, text: "Time-of-Flight (ToF)" },
      { icon: Layers, text: "Stereo Vision" },
      { icon: Box, text: "Structured Light systems" },
    ],
  },
  {
    icon: FlaskConical,
    text: "Assisted core R&D team in testing and validation, gaining deep exposure to:",
    tag: "R&D Collaboration",
    sub: [
      { icon: Workflow, text: "Product release lifecycle" },
      { icon: Users, text: "Cross-team collaboration" },
      { icon: Target, text: "Real-world deployment challenges" },
    ],
  },
  { icon: Users, text: "Managed a team of 2 engineers" },
  { icon: Award, text: "Contributed to NTEP certification (USA)" },
  { icon: Cpu, text: "Improved system accuracy, precision, and reliability" },
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
          <div className="flex flex-wrap items-center gap-3 mb-2">
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

          <div className="space-y-3">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} className="rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors p-4">
                  <div className="flex items-start gap-3">
                    <Icon className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm">{h.text}</span>
                        {"tag" in h && h.tag && (
                          <Badge className="bg-primary/15 text-primary border-primary/30 text-[10px] px-2 py-0.5">
                            {h.tag}
                          </Badge>
                        )}
                      </div>
                      {"sub" in h && h.sub && (
                        <div className="mt-2 ml-1 space-y-1.5">
                          {h.sub.map((s, j) => {
                            const SubIcon = s.icon;
                            return (
                              <div key={j} className="flex items-center gap-2 text-muted-foreground">
                                <SubIcon size={14} className="text-accent flex-shrink-0" />
                                <span className="text-xs">{s.text}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
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
