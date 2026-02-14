import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="products">
          <Products />
        </section>

        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Index;
