import { motion } from "framer-motion";
import { FileDown, Mail } from "lucide-react";
import avatar from "@/assets/avatar12.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      aria-hidden="true"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />

    <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-shrink-0"
      >
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary-foreground/30 overflow-hidden bg-primary-foreground/10 shadow-2xl">
          <img
            src={avatar}
            alt="Shishir Srivathsa S"
            className="w-full h-full object-cover"
            width={512}
            height={512}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center md:text-left"
      >
        <p className="text-primary-foreground/70 font-body text-sm uppercase tracking-widest mb-2">
          Welcome to my portfolio
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
          Shishir Srivathsa S
        </h1>
        <p className="mt-3 text-lg md:text-xl text-primary-foreground/80 font-body font-light">
          Assistant Professor&nbsp;|&nbsp;AI/ML Mentor&nbsp;|&nbsp;Academic
          Leader
        </p>
        <p className="mt-4 max-w-lg text-primary-foreground/70 font-body">
          Empowering students with industry-ready skills and academic
          excellence.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="/Resume_Shishir_Srivathsa_S.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-foreground text-primary font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            <FileDown size={18} /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary-foreground/40 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-colors"
          >
            <Mail size={18} /> Contact Me
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
