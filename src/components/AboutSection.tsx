import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, BookOpen, Users } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Teaching Excellence",
    desc: "Delivering industry-aligned curriculum in CS, AI/ML, and emerging technologies.",
  },
  {
    icon: Users,
    title: "Student Mentoring",
    desc: "Guiding postgraduate students through projects, placements, and career growth.",
  },
  {
    icon: Award,
    title: "Leadership",
    desc: "53rd President of Rotaract Mysore (2024-25), driving community impact.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="About Me"
        subtitle="Passionate educator shaping the next generation of technologists"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center text-muted-foreground font-body text-lg leading-relaxed mb-14"
      >
        Passionate Assistant Professor with expertise in mentoring postgraduate
        students in AI/ML, delivering industry-aligned curriculum, and guiding
        academic and career growth. Committed to fostering innovation and
        preparing students for real-world challenges through hands-on learning
        and professional development.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-8 shadow-sm border border-border text-center hover:shadow-md transition-shadow"
          >
            <div className="mx-auto w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-5">
              <h.icon className="text-accent-foreground" size={26} />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">
              {h.title}
            </h3>
            <p className="text-muted-foreground font-body text-sm">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
