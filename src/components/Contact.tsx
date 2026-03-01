import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase block mb-3">Get In Touch</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-7xl text-foreground mb-6">
            Let's Work
            <br />
            <span className="text-primary">Together</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-lg mb-12">
            Have a project in mind or just want to say hello? Feel free to reach out — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors resize-none placeholder:text-muted-foreground/50"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body font-500 text-sm rounded-sm hover:bg-primary/90 transition-colors"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-body font-500 text-foreground text-sm mb-1">Email</h4>
                <p className="font-body text-muted-foreground text-sm">nathalypearl@email.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-body font-500 text-foreground text-sm mb-1">Location</h4>
                <p className="font-body text-muted-foreground text-sm">Philippines</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
