import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const [navBg, setNavBg] = useState("bg-transparent");
  const [navTextColor, setNavTextColor] = useState("text-white");
  const [menuBorder, setMenuBorder] = useState("border-white");
  const [menuButtonColor, setMenuButtonColor] = useState("white");
  const [barShadow, setBarShadow] = useState("");

  // icons
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  const userIcon = <FontAwesomeIcon icon={faUser} />;

  useEffect(() => {
    const current = ref.current;

    if (show) {
      current?.classList.remove("hidden");
    }

    return () => current?.classList.add("hidden");
  }, [show]);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setNavBg("bg-pink");
      setNavTextColor("text-white");
      setMenuBorder("border-white");
      setMenuButtonColor("white");
      setBarShadow("shadow-lg");
    } else {
      setNavBg("bg-transparent");
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
      onClick={() => setShow(!show)}
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
    "mb-8 text-lg text-gray-700 border-2 w-1/2 border-gray-700 hover:text-white hover:bg-pink mx-auto py-3 px-6 rounded-full text-xl";

  return (
    <section className="sticky top-0 font-poppins">
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

        <div className="flex justify-around">
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
            <Link to="/" className="text-xl">
              Pic Some
            </Link>
          </div>
          <div>
            <button
              onClick={() => setShow(!show)}
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
            onClick={() => setShow(!show)}
            to="/"
            className={smallNavLinkStyle}
          >
            Home
          </Link>
          <Link
            onClick={() => setShow(!show)}
            to="/products"
            className={smallNavLinkStyle}
          >
            Products
          </Link>
          <Link
            onClick={() => setShow(!show)}
            to="/cartPage"
            className={smallNavLinkStyle}
          >
            {cartIcon}
          </Link>
          <Link
            onClick={() => setShow(!show)}
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
