import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="section-padding py-24 md:py-32 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase block mb-3">
            Get In Touch
          </span>

          <h2 className="heading-display text-4xl md:text-5xl lg:text-7xl text-foreground mb-6">
            Let's Work
            <br />
            <span className="text-primary">Together</span>
          </h2>

          <p className="text-body-lg text-muted-foreground max-w-lg mb-12">
            Feel free to reach out through any of the platforms below — I’d love to connect.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Email */}
          <div className="flex items-start gap-4">
            <Mail className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-body font-500 text-foreground text-sm mb-1">
                Email
              </h4>
              <a
                href="https://mail.google.com/mail/?view=cm&to=salanatinnathaly@email.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                salanatinnathaly@email.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-body font-500 text-foreground text-sm mb-1">
                Location
              </h4>
              <p className="font-body text-muted-foreground text-sm">
                Metro Manila, Philippines
              </p>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-start gap-4">
            <Github className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-body font-500 text-foreground text-sm mb-1">
                GitHub
              </h4>
              <a
                href="https://github.com/aly071"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                github.com/aly071
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-start gap-4">
            <Linkedin className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-body font-500 text-foreground text-sm mb-1">
                LinkedIn
              </h4>
              <a
                href="https://linkedin.com/in/nathaly-pearl-s-08396a347"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                linkedin.com/in/nathaly-pearl-s-08396a347
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;