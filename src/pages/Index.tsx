import Navbar from "c:/Users/HP/OneDrive/New/src/components/Navbar";
import Hero from "c:/Users/HP/OneDrive/New/src/components/Hero";
import Products from "c:/Users/HP/OneDrive/New/src/components/Products";
import About from "c:/Users/HP/OneDrive/New/src/components/About";
import Contact from "c:/Users/HP/OneDrive/New/src/components/Contact";
import Footer from "c:/Users/HP/OneDrive/New/src/components/Footer";

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
