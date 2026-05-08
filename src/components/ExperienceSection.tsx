import { Briefcase, Camera, Shield, Users, Award, FlaskConical, Cpu, Target, Layers, Eye, Box, Workflow, CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/badge";

const highlights = [
  { icon: Shield, text: "Led comprehensive QA strategy for AI-powered object measurement systems achieving 99%+ accuracy" },
  {
    icon: Camera,
    text: "Expert in camera technology integration and calibration",
    sub: [
      { icon: Eye, text: "Time-of-Flight (ToF) - depth sensing & 3D reconstruction" },
      { icon: Layers, text: "Stereo Vision - disparity maps & depth estimation" },
      { icon: Box, text: "Structured Light systems - precision measurement & scanning" },
    ],
  },
  {
    icon: FlaskConical,
    text: "Collaborated with R&D team on critical testing & validation",
    tag: "R&D Partnership",
    sub: [
      { icon: Workflow, text: "Product release lifecycle management" },
      { icon: Users, text: "Cross-functional team coordination" },
      { icon: Target, text: "Real-world industrial deployment challenges" },
    ],
  },
  { icon: Users, text: "Team Leadership - Managed and mentored 2 QA engineers" },
  { icon: Award, text: "Contributed to NTEP certification (USA) - ensuring regulatory compliance" },
  { icon: Cpu, text: "Performance Optimization - improved system accuracy, precision & reliability metrics" },
  { icon: CheckCircle, text: "Test Automation - designed automated testing frameworks reducing manual testing by 40%" },
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
              <h3 className="text-2xl font-bold">Quality Assurance Analyst</h3> (3 Years)</p>
            </div>
          </div>
          <p className="text-muted-foreground mt-4 mb-8">
            Spearheaded comprehensive QA efforts for cutting-edge computer vision and AI-driven measurement systems. Ensured measurement precision, reliability, and robustness across AI products deployed in real-world industrial environments. Transitioned from QA analyst to team leadership role, managing QA team while maintaining technical expertise in computer vision technologies.
          </p>

          <div className="mb-6 grid md:grid-cols-2 gap-3">
            <div className="bg-muted/30 rounded-lg p-4">
              <Badge className="bg-primary/15 text-primary border-primary/30 text-[10px] px-2 py-0.5 mb-2">Technical Skills</Badge>
              <div className="text-sm space-y-1">
                <p>• Test automation & framework design</p>
                <p>• Computer vision & image processing</p>
                <p>• 3D camera technologies & calibration</p>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <Badge className="bg-secondary/15 text-secondary border-secondary/30 text-[10px] px-2 py-0.5 mb-2">Impact</Badge>
              <div className="text-sm space-y-1">
                <p>• 99%+ measurement accuracy achieved</p>
                <p>• 40% reduction in manual testing</p>
                <p>• NTEP USA certification compliance</p>
              </div>
            </div>
          </divpearheaded QA efforts for cutting-edge computer vision systems, ensuring measurement precision and reliability across AI-driven products deployed in real-world industrial environments.
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
