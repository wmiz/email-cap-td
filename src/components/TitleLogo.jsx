import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const TitleLogo = () => {
  return (
    <>
      <h2 className="text-white w-full font-bold font-goog text-4xl my-2">
        <span className="bg-black text-white pl-2 pr-2">{`{}`}</span>
        <span className="bg-black text-white pr-2 mr-2">ShopSavvy:</span>
        Mastering Ecom One Byte at a Time
      </h2>
      <p className="text-white w-full text-2xl my-2">
        Get the weekly email that makes creating Shopify stores a 💨breeze💨.
      </p>
      <ul className="w-full text-white text-xl my-2">
        <li><FontAwesomeIcon icon={faSquareCheck} className="mr-2"/>
          Shopify Development News, Tips, & Tricks</li>
          <li><FontAwesomeIcon icon={faSquareCheck} className="mr-2"/>
          App Recommendations</li>
          <li><FontAwesomeIcon icon={faSquareCheck} className="mr-2"/>
          & More...</li>
      </ul>
    </>
  );
};

export default TitleLogo;
