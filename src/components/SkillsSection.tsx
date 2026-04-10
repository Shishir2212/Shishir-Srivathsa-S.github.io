import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  GraduationCap,
  Code2,
  Brain,
} from "lucide-react";

const categories = [
  {
    icon: GraduationCap,
    title: "Teaching & Academic",
    skills: [
      { name: "Student Mentoring", pct: 98 },
      { name: "Curriculum Design", pct: 95 },
      { name: "Academic Assessment", pct: 90 },
    ],
  },
  {
    icon: Code2,
    title: "Technical Skills",
    skills: [
      { name: "SQL & DBMS", pct: 90 },
      { name: "HTML, CSS, JavaScript", pct: 88 },
      { name: "Python / Java / C", pct: 85 },
    ],
  },
  {
    icon: Brain,
    title: "Domains",
    skills: [
      { name: "Cloud Computing & Cyber Security", pct: 95 },
      { name: "Data Analytics", pct: 90 },
      { name: "Full Stack Development", pct: 88 },
      { name: "AI / ML", pct: 85 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4">
      <SectionHeading title="Skills" subtitle="Areas of expertise and proficiency" />

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.15 }}
            className="bg-card rounded-xl p-8 shadow-sm border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <cat.icon className="text-accent-foreground" size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
            </div>

            <div className="space-y-5">
              {cat.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-body font-medium text-foreground">
                      {s.name}
                    </span>
                    <span className="text-xs text-muted-foreground">{s.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full rounded-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
