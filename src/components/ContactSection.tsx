import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder – integrate with backend later
    alert("Thanks for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: Mail, label: "pradeepkpn2001@gmail.com", href: "mailto:pradeepkpn2001@gmail.com" },
    { icon: Phone, label: "+91 9092223154", href: "tel:+919092223154" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Let's connect</h3>
            <p className="text-muted-foreground mb-8">
              Whether you have a project in mind or just want to chat about AI and computer vision, feel free to reach out.
            </p>
            <div className="space-y-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg glass-card hover:border-primary/40 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={18} />
                    </div>
                    <span className="text-sm">{s.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card-glow p-8 space-y-5">
            <div>
              <label className="text-sm text-muted-foreground block mb-1">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted/30 border border-glass-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground block mb-1">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-muted/30 border border-glass-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground block mb-1">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-muted/30 border border-glass-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button type="submit" className="neon-glow-btn bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold w-full flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
