import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Star } from "lucide-react";

const items = [
  { title: "53rd President, Rotaract Mysore", detail: "2024-25" },
  { title: "Active Rotaract Member", detail: "Since 2017" },
  { title: "College Council Member", detail: "" },
  { title: "Event Organizer", detail: "" },
];

const ExtracurricularSection = () => (
  <section className="py-20 bg-section-alt">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Extracurricular Activities"
        subtitle="Leadership and community engagement beyond the classroom"
      />

      <div className="max-w-2xl mx-auto space-y-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="flex items-center gap-4 bg-card border border-border rounded-xl px-6 py-4 shadow-sm"
          >
            <Star size={18} className="text-gold flex-shrink-0" />
            <div>
              <span className="font-body font-medium text-foreground text-sm">
                {item.title}
              </span>
              {item.detail && (
                <span className="ml-2 text-xs text-muted-foreground">
                  ({item.detail})
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExtracurricularSection;
