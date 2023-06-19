import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const TitleLogo = () => {
  return (
    <>
      
      <h2 className="text-white w-full font-bold font-goog text-4xl my-2">
        <span className="bg-black text-white "> 
        <FontAwesomeIcon icon={faEnvelope} className="text-white text-4xl mx-2"/>
          Mastering Shopify:
        </span>{" "}
        Tips & Tricks Delivered to Your Inbox
      </h2>
      <p className="text-white w-full text-2xl my-2">
        Get the weekly email that makes running your Shopify store a breeze. 
      </p>
    </>
  );
};

export default TitleLogo;
