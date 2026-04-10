import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Get in Touch"
          subtitle="Feel free to reach out for collaboration or queries"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 justify-center"
        >
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
              <Mail className="text-primary-foreground" size={18} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                Email
              </p>
              <a
                href="mailto:shishirsrivathsa@gmail.com"
                className="text-sm font-body font-medium text-foreground hover:text-primary transition-colors"
              >
                shishirsrivathsa@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
              <MapPin className="text-primary-foreground" size={18} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                Location
              </p>
              <p className="text-sm font-body font-medium text-foreground">
                Mysuru, Karnataka, India
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
              <Phone className="text-primary-foreground" size={18} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                Phone
              </p>
              <p className="text-sm font-body font-medium text-foreground">
                +91 8951409518
              </p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
              <Linkedin className="text-primary-foreground" size={18} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                LinkedIn
              </p>
              <a
                href="https://linkedin.com/in/shishirsrivathsas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-body font-medium text-foreground hover:text-primary transition-colors"
              >
                linkedin.com/in/shishirsrivathsas
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;