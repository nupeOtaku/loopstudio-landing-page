/* eslint-disable react/prop-types */
import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer className="bg-black">
      {/* Container */}
      <div className="container mx-auto max-w-6xl py-10">
        {/* Footer Flex Container */}
        <div className="mb-8 flex flex-col items-center space-y-6 md:flex-row md:items-start md:justify-between md:space-y-0">
          {/* Menu & Logo Container */}
          <div className="flex flex-col items-center md:items-start md:space-y-4">
            <div className="mb-4 h-8">
              <img src={logo} alt="logo" className="w-44 md:ml-3" />
            </div>
            {/* Menu Container */}
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:ml-3 md:flex-row md:space-x-6 md:space-y-0">
              {/* Items */}
              <Items text={"About"} />
              <Items text={"Careers"} />
              <Items text={"Events"} />
              <Items text={"Products"} />
              <Items text={"Support"} />
            </div>
          </div>

          {/* Social & Copy Container */}
          <div className="flex flex-col items-center justify-center space-x-4 text-gray-500 md:items-baseline md:justify-start">
            <div className="flex items-center justify-center space-x-4 md:justify-start">
              <SocialContainer icon={facebook} />
              <SocialContainer icon={twitter} />
              <SocialContainer icon={instagram} />
              <SocialContainer icon={pinterest} />
            </div>

            {/* Copy */}

            <div className="font-bold capitalize">
              &copy; 2023 Loopstudios. ll rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialContainer = ({ icon }) => {
  return (
    <div className="group h-8">
      {/* Icon */}
      <a href="#">
        <img src={icon} alt="icons" className="h-6" />
      </a>
    </div>
  );
};

const Items = ({ text }) => {
  return (
    <div className="group h-10 cursor-pointer">
      <a href="#">{text}</a>
      <div className="mx-2 transition duration-200 group-hover:border-b group-hover:border-blue-50"></div>
    </div>
  );
};

export default Footer;
