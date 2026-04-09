import { useInView } from "@/hooks/useInView";
import { Brain, Code, Wrench, Cpu, HeartHandshake } from "lucide-react";

const groups = [
  {
    title: "AI/ML & Computer Vision",
    icon: Brain,
    skills: [
      { name: "Machine Learning", pct: 80 },
      { name: "Object Detection", pct: 85 },
      { name: "Computer Vision", pct: 90 },
      { name: "OpenCV", pct: 85 },
    ],
  },
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "Python", pct: 90 },
      { name: "Shell Scripting", pct: 75 },
      { name: "Git", pct: 80 },
    ],
  },
  {
    title: "Tools & QA",
    icon: Wrench,
    skills: [
      { name: "Selenium", pct: 85 },
      { name: "JIRA", pct: 90 },
      { name: "Confluence", pct: 80 },
    ],
  },
  {
    title: "Hardware / IoT",
    icon: Cpu,
    skills: [
      { name: "Raspberry Pi", pct: 80 },
      { name: "Jetson Nano", pct: 75 },
      { name: "Arduino", pct: 70 },
    ],
  },
  {
    title: "Soft Skills",
    icon: HeartHandshake,
    skills: [
      { name: "Leadership", pct: 90 },
      { name: "Problem Solving", pct: 95 },
      { name: "Collaboration", pct: 90 },
    ],
  },
];

const SkillsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="section-padding bg-muted/20" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, gi) => {
            const Icon = g.icon;
            return (
              <div
                key={gi}
                className={`glass-card-glow p-6 hover:scale-[1.02] transition-all duration-300 ${inView ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${gi * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-bold">{g.title}</h3>
                </div>
                <div className="space-y-4">
                  {g.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{s.name}</span>
                        <span className="text-primary font-mono">{s.pct}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-neon-purple transition-all duration-1000"
                          style={{ width: inView ? `${s.pct}%` : "0%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
