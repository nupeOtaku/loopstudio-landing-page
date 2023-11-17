import interactive from "../images/desktop/image-interactive.jpg";

const FeatureSection = () => {
  return (
    <section id="feature">
      {/* Feature Container */}
      <div className="container relative mx-auto my-32 flex max-w-6xl flex-col px-6 text-gray-900 md:flex-row md:px-4">
        <img src={interactive} alt="feature image" />
        {/* Text Container */}
        <div className="top-48 bg-white pr-0 md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 className="mb-6 mt-10 max-w-lg text-center font-sans text-4xl uppercase text-gray-900 md:mt-0 md:text-left md:text-5xl">
            The leader in interactive VR
          </h2>
          <p className="max-w-md text-center md:text-left">
            Founded in 2011, Loopstudios has been producing world class virtual
            reality projects for some of the best companies around the globe.
            Our award winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export { FeatureSection };
