import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const TitleLogo = () => {
  return (
    <>
      <h2 className="text-white w-full font-bold font-goog text-4xl my-2">
        <span className="bg-black text-white ">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-white text-4xl mx-2"
          />
          Mastering Shopify:
        </span>{" "}
        Tips & Tricks Delivered to Your Inbox
      </h2>
      <p className="text-white w-full text-2xl my-2">
        Get the weekly email that makes running your Shopify store a breeze.
      </p>
      <ul className="w-full text-white text-xl my-2">
        <li><FontAwesomeIcon icon={faSquareCheck} className="mr-2"/>
          Shopify News, Tips, & Tricks</li>
          <li><FontAwesomeIcon icon={faSquareCheck} className="mr-2"/>
          Recommended Shopify Apps</li>
          <li><FontAwesomeIcon icon={faSquareCheck} className="mr-2"/>
          & More!</li>
      </ul>
    </>
  );
};

export default TitleLogo;
