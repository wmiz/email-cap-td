import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const TitleLogo = () => {
  return (
    <>
      <h2 className="text-white w-full font-bold font-goog text-2xl md:text-4xl my-2">
        <div className="my-2">
        <span className="bg-darkBlue text-white pl-2 pr-2 rounded-l-md">{`{}`}</span>
        <span className="bg-darkBlue text-white pr-2 mr-2 rounded-r-md">ShopSavvy:</span>
        </div>
        Mastering Ecom One Byte at a Time
      </h2>

      <p className="text-white text-md p-2 md:text-2xl my-2 bg-blackgrey rounded-md md:px-4">
        The weekly email that makes creating Shopify stores a breeze.
      </p>
      <ul className="w-full text-white text-left text-md md:text-xl my-2">
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
