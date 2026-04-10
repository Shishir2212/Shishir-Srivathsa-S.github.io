import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2 text-muted-foreground font-body max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
    <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-primary" />
  </motion.div>
);

export default SectionHeading;
