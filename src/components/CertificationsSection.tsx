import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { BadgeCheck } from "lucide-react";

const certs = [
  "Diploma in Computer Network – Alison",
  "Cyber Security & Blockchain Workshop",
  "FDP on AI & Data Science",
  "Data Analysis & Deep Learning Workshop",
  "Digital Marketing – Infosys BPM",
  "Cloud Computing & Security FDP",
  "IIT Madras Teaching Program",
];

const CertificationsSection = () => (
  <section id="certifications" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Certifications"
        subtitle="Professional development and continuous learning"
      />

      <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
        {certs.map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="flex items-start gap-3 bg-card border border-border rounded-xl px-5 py-4 shadow-sm hover:border-primary/30 transition-colors"
          >
            <BadgeCheck
              size={20}
              className="text-primary mt-0.5 flex-shrink-0"
            />
            <span className="text-sm font-body text-foreground">{c}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
