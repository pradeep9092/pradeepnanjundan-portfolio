import { GraduationCap } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const education = [
  { degree: "B.Tech AI & Data Science", school: "Anna University", year: "2025 – Present" },
  { degree: "Diploma in ECE", school: "Bharath Polytechnic, Chennai", year: "2019 – 2022" },
  { degree: "Higher Secondary", school: "Govt School, Dharmapuri", year: "2019" },
];

const EducationSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="section-padding bg-muted/20" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Education</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((e, i) => (
            <div
              key={i}
              className={`glass-card-glow p-8 text-center hover:scale-105 transition-all duration-300 group ${inView ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-1">{e.degree}</h3>
              <p className="text-muted-foreground text-sm">{e.school}</p>
              <p className="text-primary font-mono text-xs mt-2">{e.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
