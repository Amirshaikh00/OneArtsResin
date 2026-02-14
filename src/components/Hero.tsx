import heroImage from "c:/Users/HP/OneDrive/New/src/assets/hero-resin.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful resin art pieces including galaxy clock and ocean coasters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-20">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 animate-fade-in">
          Handcrafted with Love
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-light leading-tight text-foreground mb-6">
          OneArts <br />
          <span className="text-primary font-medium">Resin Creations</span>
        </h1>
        <p className="font-body text-lg text-muted-foreground font-light max-w-xl mx-auto mb-10">
          Unique, handmade resin art pieces that bring elegance and beauty to every space. Each creation tells a story.
        </p>
        <a
          href="#products"
          className="inline-block bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:opacity-90 transition-opacity duration-300"
        >
          Explore Collection
        </a>
      </div>
    </section>
  );
};

export default Hero;
