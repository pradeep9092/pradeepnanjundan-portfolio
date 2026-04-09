import { Brain, Cpu } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: Brain,
    title: "AI/ML Solutions",
    items: ["Computer vision-based systems", "Object detection & automation", "Real-world AI integration"],
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    items: ["Smart device integration", "Sensor-based systems", "Embedded solutions"],
  },
];

const ServicesSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Services</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`glass-card-glow p-8 hover:scale-105 transition-all duration-300 group ${inView ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
