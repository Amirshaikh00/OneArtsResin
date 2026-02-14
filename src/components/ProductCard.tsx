interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

const ProductCard = ({ image, title, description, link }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-sm overflow-hidden border border-border hover:shadow-lg transition-all duration-500">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="font-body text-sm text-muted-foreground font-light leading-relaxed mb-4">
          {description}
        </p>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="font-body text-xs tracking-widest uppercase text-primary hover:text-foreground transition-colors duration-300 border-b border-primary hover:border-foreground pb-1">
            View Details
          </a>
        ) : (
          <button className="font-body text-xs tracking-widest uppercase text-primary hover:text-foreground transition-colors duration-300 border-b border-primary hover:border-foreground pb-1">
            View Details
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
