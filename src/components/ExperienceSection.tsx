import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase, CheckCircle2 } from "lucide-react";

/* ----------------------------------
   RESPONSIBILITIES (Detailed)
----------------------------------- */
const responsibilities = [
  "Mentored and guided postgraduate students in Artificial Intelligence and Machine Learning (AI/ML)–based academic projects, enhancing analytical thinking, problem-solving skills, and industry readiness.",

  "Delivered lectures and hands-on laboratory sessions in Programming, Web Development, Computer Networks, Data Analysis, Database Management Systems (DBMS), and AI/ML fundamentals.",

  "Supervised end-to-end project development including problem definition, model selection, data preprocessing, implementation, performance evaluation, and result interpretation.",

  "Facilitated technical workshops and training programs on emerging technologies, AI/ML tools, and modern software development practices for students and faculty members.",

  "Supported students in career development, research orientation, and technical skill enhancement, contributing to higher employability and improved academic performance."
];

/* ----------------------------------
   ANIMATION VARIANTS
----------------------------------- */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

/* ----------------------------------
   COMPONENT
----------------------------------- */
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Experience"
          subtitle="Professional journey in academia"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -6 }}
          className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 4 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0"
            >
              <Briefcase size={22} className="text-primary-foreground" />
            </motion.div>

            <div>
              <h3 className="font-display text-xl font-semibold">
                Assistant Professor
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                Maharaja Institute of Technology, Mysore
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                November 2023 – Present
              </p>
            </div>
          </div>

          {/* Responsibilities */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {responsibilities.map((item, index) => (
              <motion.li
                key={index}
                // variants={itemVariants}
                whileHover={{ x: 6 }}
                className="flex items-start gap-3 group"
              >
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mt-1 flex-shrink-0"
                >
                  <CheckCircle2
                    size={18}
                    className="text-primary group-hover:text-primary/80 transition-colors"
                  />
                </motion.span>

                <span className="text-foreground font-body text-sm leading-relaxed">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;