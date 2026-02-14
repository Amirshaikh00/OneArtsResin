import ProductCard from "./ProductCard";
import clockImg from "@/assets/product-clock.jpg";
import tableImg from "@/assets/product-table.jpg";
import coastersImg from "@/assets/product-coasters.jpg";
import nameplateImg from "@/assets/product-nameplate.jpg";
import religiousImg from "@/assets/product-religious.jpg";
import giftsImg from "@/assets/product-gifts.jpg";

const products = [
  {
    image: clockImg,
    title: "Resin Clocks",
    description: "Stunning wall clocks with ocean waves, galaxy themes, and abstract art — each one uniquely handcrafted.",
    link: "https://1drv.ms/p/c/980ce99d330d1909/IQCYP-G2HZbQSLLzFrGpRRFLAWp08KqJ8UMrC2bAcAprW8M?e=esPkJM",
  },
  {
    image: tableImg,
    title: "Resin Tables",
    description: "Elegant river tables and coffee tables blending natural wood with mesmerizing resin art.",
    link: "https://1drv.ms/p/c/980ce99d330d1909/IQBbp_hBM4UoTbdJtXCPbW93Aa8g4U-B56e3cn9m1VCgB5E?e=dr1f99",
  },
  {
    image: coastersImg,
    title: "Coasters",
    description: "Geode-inspired coasters with crystal effects that make every sip a luxury experience.",
    link: "https://1drv.ms/p/c/980ce99d330d1909/IQCs3b4s_NoXTZgo5Jl0AJa-AY_j9qioVzCwNsSyyT8zF-E?e=KyBjcn",
  },
  {
    image: nameplateImg,
    title: "Nameplates",
    description: "Personalized desk and door nameplates with gold leaf accents, perfect for gifting.",
    link: "https://1drv.ms/p/c/980ce99d330d1909/IQDwmPRNBvzBQZi9PPMC8oBYAd45XwNV64GXAKuwR8RNHrQ?e=DvO9dS",
  },
  {
    image: religiousImg,
    title: "Religious Art",
    description: "Beautifully crafted devotional pieces with preserved flowers and intricate designs.",
    link: "https://1drv.ms/p/c/980ce99d330d1909/IQB8EyQrBcO6RqdsX4qUFac2AWOjOQUWMzZn0T4WZDuaX5g?e=FnhYTk",
  },
  {
    image: giftsImg,
    title: "Gift Items",
    description: "Keychains, bookmarks, and trinket trays with real dried flowers — thoughtful gifts for every occasion.",
    link: "https://1drv.ms/p/c/980ce99d330d1909/IQC_79AE73wJTYbZ-P9bjz0nASisnAGJXkNmFnWdUCNrP_A?e=K6BD2y",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Our Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Handcrafted <span className="text-primary font-medium">Pieces</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
