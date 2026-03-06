import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import portraitImg from "@/assets/nathaly-portrait1.jpg";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "salanatinnathaly@email.com",
    href: "https://mail.google.com/mail/?view=cm&to=salanatinnathaly@email.com",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Metro Manila, Philippines",
    href: null as string | null,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/aly071",
    href: "https://github.com/aly071",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nathaly-pearl-s-08396a347",
    href: "https://linkedin.com/in/nathaly-pearl-s-08396a347",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="section-padding py-24 md:py-32 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
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
                Feel free to reach out through any of the platforms below — I'd love to connect.
              </p>
            </motion.div>

            {/* Contact Items */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-7"
            >
              {contactItems.map(({ icon: Icon, label, value, href }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-11 h-11 flex-shrink-0 rounded-xl border border-primary/20 bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground mb-0.5 uppercase tracking-wider">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm text-foreground hover:text-primary transition-colors break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-foreground">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Available badge */}
              <div className="mt-2 flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-body text-muted-foreground">
                  Currently open to opportunities
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE — Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 md:w-80 lg:w-96">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-xl blur-2xl" />

              {/* Image */}
              <img
                src={portraitImg}
                alt="Nathaly Pearl F. Salanatin"
                className="relative w-full aspect-[3/4] object-cover object-top rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
              />

              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent rounded-b-xl" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;