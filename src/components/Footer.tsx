import { Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 bg-card border-t border-border">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-body">
        © {new Date().getFullYear()} Shishir Srivathsa S. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://linkedin.com/in/shishirsrivathsas/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="mailto:shishirsrivathsa@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
