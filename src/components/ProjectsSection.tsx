import { Folder, Github, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const placeholders = [
  { title: "AI Object Measurement", desc: "Computer vision system for real-time dimensional analysis", tags: ["Python", "OpenCV", "ML"] },
  { title: "Smart IoT Dashboard", desc: "Sensor monitoring platform with embedded systems", tags: ["Raspberry Pi", "Python", "IoT"] },
  { title: "Defect Detection Model", desc: "Deep learning model for automated quality inspection", tags: ["TensorFlow", "CNN", "CV"] },
];

const ProjectsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="section-padding bg-muted/20" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16">Work in progress – exciting things coming soon</p>

        <div className="grid md:grid-cols-3 gap-6">
          {placeholders.map((p, i) => (
            <div
              key={i}
              className={`glass-card-glow p-6 group hover:scale-105 transition-all duration-300 ${inView ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-primary" size={28} />
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Github size={18} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  <ExternalLink size={18} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
