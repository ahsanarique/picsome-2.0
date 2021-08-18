import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import Search from "../Search/Search";

const NavigationBar = () => {
  const [showNav, setShowNav] = useState(false);
  const ref = useRef(null);

  const [navBg, setNavBg] = useState("bg-lightBlue");
  const [navTextColor, setNavTextColor] = useState("text-gray-700");
  const [menuBorder, setMenuBorder] = useState("border-gray-700");
  const [menuButtonColor, setMenuButtonColor] = useState("gray");
  const [barShadow, setBarShadow] = useState("");

  // icons
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  const userIcon = <FontAwesomeIcon icon={faUser} />;

  useEffect(() => {
    const current = ref.current;

    if (showNav) {
      current.classList.remove("hidden");
    }

    return () => current.classList.add("hidden");
  }, [showNav]);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setNavBg("bg-pink");
      setNavTextColor("text-white");
      setMenuBorder("border-white");
      setMenuButtonColor("white");
      setBarShadow("shadow-lg");
    } else {
      setNavBg("bg-lightBlue");
      setNavTextColor("text-gray-700");
      setMenuBorder("border-gray-700");
      setMenuButtonColor("gray");
      setBarShadow("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navButton = (
    <button
      onClick={() => setShowNav(!showNav)}
      className={`mobile-menu-button p-4 border rounded-lg mr-5 ${menuBorder}`}
    >
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={`${menuButtonColor}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );

  const smallNavLinkStyle =
    "mb-8 text-lg bg-lightBlue text-gray-700 border-2 w-1/2 border-gray-700 hover:bg-blue mx-auto py-3 px-6 rounded-full text-xl";

  return (
    <section className="sticky top-0 font-poppins z-50">
      <nav
        className={`${navBg} ${navTextColor} ${barShadow} flex lg:justify-around justify-between items-center border-b border-opacity-20 py-4`}
      >
        <div className="ml-5">
          <Link to="/" className="text-xl">
            Pic Some
          </Link>
        </div>

        <div className="lg:block hidden">
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/productListPage" className="ml-4">
            Products
          </Link>
        </div>

        <div className="flex justify-around items-center">
          <Search setShowNav={setShowNav} />
          <Link to="/cartPage" className="lg:block hidden mx-4 text-xl">
            {cartIcon}
          </Link>
          <Link to="/authPage" className="lg:block hidden mx-4 text-xl">
            {userIcon}
          </Link>
        </div>

        <div className="block lg:hidden">{navButton}</div>
      </nav>

      <nav
        ref={ref}
        className="bg-white w-full absolute top-0  lg:hidden hidden shadow-fullPage"
      >
        <div className="flex justify-between items-center border-b border-gray-700 border-opacity-20 py-4">
          <div className="ml-5">
            <Link
              onClick={() => setShowNav(!showNav)}
              to="/"
              className="text-xl"
            >
              Pic Some
            </Link>
          </div>
          <Search setShowNav={setShowNav} />
          <div>
            <button
              onClick={() => setShowNav(!showNav)}
              className={`mobile-menu-button p-4 border border-gray-700 rounded-lg mr-5`}
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="gray"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col text-center my-16">
          <Link
            onClick={() => setShowNav(!showNav)}
            to="/"
            className={smallNavLinkStyle}
          >
            Home
          </Link>
          <Link
            onClick={() => setShowNav(!showNav)}
            to="/productListPage"
            className={smallNavLinkStyle}
          >
            Products
          </Link>
          <Link
            onClick={() => setShowNav(!showNav)}
            to="/cartPage"
            className={smallNavLinkStyle}
          >
            {cartIcon}
          </Link>
          <Link
            onClick={() => setShowNav(!showNav)}
            to="/authPage"
            className={smallNavLinkStyle}
          >
            {userIcon}
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default NavigationBar;
