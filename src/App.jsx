import { FeatureSection } from "./features/FeatureSection";
import Footer from "./features/Footer";
import { GallerySection } from "./features/GallerySection";
import { HeroSection } from "./features/HeroSection";

const App = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Feature Section */}
      <FeatureSection />

      {/* Creations Section */}
      <GallerySection />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default App;
