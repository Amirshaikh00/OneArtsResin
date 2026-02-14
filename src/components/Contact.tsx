import { MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Get in Touch
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8">
          Let's Create <span className="text-primary font-medium">Together</span>
        </h2>
        <p className="font-body text-lg text-muted-foreground font-light leading-relaxed mb-12">
          Have a custom idea in mind? Want to place an order? Reach out to us on WhatsApp or Instagram — we'd love to hear from you!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/7039552784"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:opacity-90 transition-opacity duration-300"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
          <a
            href="https://instagram.com/find_reason_for_resin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-primary text-primary font-body text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
