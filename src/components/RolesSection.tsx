import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    title: "Internal Assessment (IA) Coordinator",
    description:
      "Planned and executed internal assessments in alignment with academic regulations. Ensured fair evaluation practices, timely result processing, and accurate academic records to support continuous student assessment.",
  },
  {
    title: "Time Table Coordinator",
    description:
      "Developed and managed institutional timetables by effectively coordinating faculty workload and course requirements, ensuring smooth academic delivery and optimal utilization of teaching hours.",
  },
  {
    title: "Student Results Analysis Coordinator",
    description:
      "Conducted in-depth analysis of student performance to identify learning gaps and trends. Provided actionable insights to faculty, contributing to improved teaching strategies and enhanced academic outcomes.",
  },
  {
    title: "Admission Coordinator",
    description:
      "Guided prospective students and parents through the admission process, offering academic counseling and ensuring seamless onboarding, thereby contributing to student enrollment and retention.",
  },
  {
    title: "Institution's Innovation Council (IIC) Committee Member",
    description:
      "Promoted innovation and experiential learning by organizing academic events, workshops, and student-driven initiatives that encouraged critical thinking and creativity.",
  },
  {
    title: "Anti-Ragging Committee Member",
    description:
      "Upheld a safe and inclusive learning environment by implementing anti-ragging policies, conducting awareness programs, and supporting student well-being.",
  },
  {
    title: "Sports Coordinator",
    description:
      "Encouraged holistic student development by organizing sports activities and events, promoting physical well-being, teamwork and leadership among students.",
  },
  {
    title: "College Marketing Committee Member",
    description:
      "Supported institutional outreach and academic visibility through participation in promotional activities, student engagement programs, and community interaction initiatives.",
  },
];

const RoleCard = ({ role, index }: { role: (typeof roles)[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={role.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-card border border-border rounded-lg px-5 py-4 shadow-sm cursor-pointer overflow-hidden transition-shadow duration-300 hover:shadow-md hover:border-primary/30"
    >
      <div className="flex items-center gap-3">
        <motion.div
          className="w-2 h-2 rounded-full bg-primary flex-shrink-0"
          animate={{ scale: isHovered ? 1.4 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <span className="text-sm font-body font-medium text-foreground">
          {role.title}
        </span>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isHovered ? "auto" : 0,
          opacity: isHovered ? 1 : 0,
          marginTop: isHovered ? 12 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-xs leading-relaxed text-muted-foreground pl-5">
          {role.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const RolesSection = () => (
  <section className="py-20 bg-section-alt">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Roles & Responsibilities"
        subtitle="Administrative and institutional contributions"
      />

      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 items-start">
        {roles.map((role, i) => (
          <RoleCard key={role.title} role={role} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default RolesSection;
