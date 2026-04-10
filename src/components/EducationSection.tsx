import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Mahajana First Grade College",
    detail: "CGPA: 8.4",
  },
  {
    degree: "BSc – Physics, Mathematics, Computer Science",
    school: "NIE First Grade College",
    detail: "",
  },
];

const EducationSection = () => (
  <section id="education" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading title="Education" subtitle="Academic qualifications" />

      <div className="max-w-2xl mx-auto space-y-6">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex items-start gap-4 bg-card border border-border rounded-xl p-6 shadow-sm"
          >
            <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <GraduationCap className="text-accent-foreground" size={20} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">{e.degree}</h3>
              <p className="text-muted-foreground text-sm font-body">
                {e.school}
              </p>
              {e.detail && (
                <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground font-medium">
                  {e.detail}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
