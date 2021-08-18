import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const fbIcon = <FontAwesomeIcon icon={faFacebook} />;
  const twitIcon = <FontAwesomeIcon icon={faTwitter} />;
  const pinterestIcon = <FontAwesomeIcon icon={faPinterest} />;
  const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;

  const year = new Date().getFullYear();

  return (
    <footer className="bg-pink w-full text-white font-poppins p-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <p className="text-md mb-4">Company</p>

          <ul className="text-sm">
            <li>Shipping</li>
            <li>Return Policy</li>
            <li>Work With Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <p className="text-md mb-4">Follow Us Out There</p>

          <ul className="text-sm">
            <li>{fbIcon} Facebook</li>
            <li>{twitIcon} Twitter</li>
            <li>{pinterestIcon} Pinterest</li>
            <li>{instagramIcon} Instagram</li>
          </ul>
        </div>

        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <p className="text-md mb-4">Thank You</p>

          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            blanditiis iste maiores nesciunt laudantium eius odio, tempore vel
            laboriosam est!
          </p>
        </div>

        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <p className="text-md mb-4">Newsletter</p>

          <div className="flex">
            <input
              type="text"
              placeholder="Your email"
              className="rounded-l-full px-4 py-2 md:w-3/4 w-full text-gray-700 outline-none"
            />
            <button className="bg-lightBlue hover:bg-blue text-gray-700 rounded-r-full px-4 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="text-sm text-center mt-16">
        Copyright © {year}, All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
