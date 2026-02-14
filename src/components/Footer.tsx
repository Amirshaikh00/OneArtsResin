const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg text-foreground">OneArts Resin Creations</p>
        <p className="font-body text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} OneArts. All rights reserved. Handcrafted with ♥
        </p>
      </div>
    </footer>
  );
};

export default Footer;
