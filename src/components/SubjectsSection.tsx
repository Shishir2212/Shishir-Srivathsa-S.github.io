import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  Globe,
  Database,
  Cloud,
  Layers,
  BrainCircuit,
  ShieldCheck,
  Code,
  ClipboardList,
} from "lucide-react";

const subjects = [
  { name: "Computer Networks", icon: Globe },
  { name: "DBMS", icon: Database },
  { name: "Cloud Computing", icon: Cloud },
  { name: "Data Structures", icon: Layers },
  { name: "Machine Learning", icon: BrainCircuit },
  { name: "Cyber Security", icon: ShieldCheck },
  { name: "Web Technologies", icon: Code },
  { name: "Project Management", icon: ClipboardList },
];

const SubjectsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Subjects Taught"
        subtitle="Comprehensive coverage across core CS domains"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {subjects.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex flex-col items-center gap-3 bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <s.icon className="text-accent-foreground" size={22} />
            </div>
            <span className="text-sm font-body font-medium text-center text-foreground">
              {s.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SubjectsSection;
