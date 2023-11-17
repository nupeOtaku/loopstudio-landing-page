import { galleryData } from "../data/data";

const GallerySection = () => {
  return (
    <section id="creations">
      {/* Creations Container */}
      <div className="container mx-auto my-32 max-w-6xl px-6 text-gray-900 md:px-4">
        {/* Creations Header */}
        <div className="mb-20 flex justify-center md:justify-between">
          <h2 className="text-center text-4xl uppercase md:text-left md:text-5xl">
            Our Creations
          </h2>
          <button className="btn hidden md:block">See all</button>
        </div>
        {/* Items Container */}

        <ItemsContainer />

        {/* Bottom Container */}
        <BottomContainer />
      </div>
    </section>
  );
};

const BottomContainer = () => {
  return (
    <div className="mt-10 flex justify-center md:hidden">
      <button className="btn block w-full md:hidden">See all</button>
    </div>
  );
};

const ItemsContainer = () => {
  return (
    <>
      <div className="item-container">
        {/* Items */}
        {galleryData.map((data, index) => {
          const { itemText, mobile, desktop } = data;

          return (
            <div className="item group" key={index}>
              <img
                src={desktop}
                alt="gallery"
                className="hidden w-full duration-200 group-hover:scale-110 md:block"
              />
              {/* Mobile Image */}
              <img
                src={mobile}
                alt="gallery"
                className="block w-full duration-200 group-hover:scale-110 md:hidden"
              />
              {/* Item Gradient */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5>{itemText}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { GallerySection };
