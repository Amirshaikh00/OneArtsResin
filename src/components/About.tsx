const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Our Story
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8">
          Crafted with <span className="text-primary font-medium">Passion</span>
        </h2>
        <p className="font-body text-lg text-muted-foreground font-light leading-relaxed mb-6">
          At OneArts Resin Creations, every piece begins with an idea and is brought to life with meticulous attention to detail. We use premium-quality epoxy resin combined with natural materials — wood, dried flowers, pigments, and gold leaf — to create art that is as unique as you are.
        </p>
        <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
          Whether it's a custom clock for your living room, a river table for your dining space, or a personalized gift for someone special — we pour our heart into every creation. Each piece is made to order and can be fully customized to match your vision.
        </p>
      </div>
    </section>
  );
};

export default About;
