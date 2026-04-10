import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Prof. Shishir's mentoring in AI/ML was transformative — he made complex concepts approachable and always went the extra mile.",
    name: "Student Feedback",
    role: "MCA Graduate",
  },
  {
    text: "His industry-oriented teaching style and real-world project guidance prepared us exceptionally well for our careers.",
    name: "Student Feedback",
    role: "MCA Graduate",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Testimonials"
        subtitle="What students say (placeholder)"
      />

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card border border-border rounded-xl p-8 shadow-sm relative"
          >
            <Quote
              size={32}
              className="text-primary/15 absolute top-4 right-4"
            />
            <p className="text-muted-foreground font-body italic leading-relaxed mb-6">
              "{t.text}"
            </p>
            <div>
              <p className="font-body font-semibold text-sm text-foreground">
                {t.name}
              </p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
