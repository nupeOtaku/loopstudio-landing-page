/* eslint-disable react/prop-types */
import logo from "../images/logo.svg";
import { useMenuContext } from "../context/MenuContext";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="hero">
      {/* Hero Section */}
      <div
        className={`container mx-auto max-w-6xl px-6 py-12 ${
          isScrolled ? "stick" : ""
        }`}
      >
        {/* Nav/Logo Container */}
        <nav
          className={`flex items-center justify-between font-bold text-white ${
            isScrolled ? "scrolled" : ""
          }`}
        >
          {/* Logo */}
          <img src={logo} alt="logo" />
          {/* Menu */}
          <div className="hidden h-10 font-alata md:flex md:space-x-8">
            <Links link={"About"} />
            <Links link={"Careers"} />
            <Links link={"Events"} />
            <Links link={"Product"} />
            <Links link={"Support"} />
          </div>
          {/*Hamburger Button */}
          <HamburgerButton />
        </nav>

        {/* Mobile Menu */}
        <MobileMenu />
        <div className="mb-32 mt-32 max-w-lg border-2 p-4 font-sans text-4xl uppercase text-white md:m-32 md:mx-0 md:p-10 md:text-6xl">
          Impressive experiences that deliver
        </div>
      </div>
    </section>
  );
};

const MobileMenu = () => {
  const { btnOpen } = useMenuContext();

  return (
    <div
      id="menu"
      className={`absolute bottom-0 left-0 top-0 z-40 ${
        !btnOpen ? "slide close" : "slide open"
      } flex min-h-screen w-full flex-col space-y-3 self-end bg-black py-1 pl-12 pt-40 text-lg uppercase text-white md:hidden`}
    >
      <a href="#" className="hover:text-pink-500">
        About
      </a>
      <a href="#" className="hover:text-pink-500">
        Careers
      </a>
      <a href="#" className="hover:text-pink-500">
        Event
      </a>
      <a href="#" className="hover:text-pink-500">
        Product
      </a>
      <a href="#" className="hover:text-pink-500">
        Support
      </a>
    </div>
  );
};

const HamburgerButton = () => {
  const { btnOpen, setBtnOpen } = useMenuContext();

  return (
    <div className="md:hidden">
      <div
        id="btn"
        onClick={() => setBtnOpen((btn) => !btn)}
        type="button"
        className={`button ${
          btnOpen ? "open" : ""
        } hamburger z-50 block focus:outline-none md:hidden`}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </div>
    </div>
  );
};

const Links = ({ link }) => {
  return (
    <div className="group">
      <a href="#">{link}</a>
      <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
    </div>
  );
};
export { HeroSection };
