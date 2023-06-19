import React, {useEffect, useState} from "react";
import TitleLogo from "./components/TitleLogo";
import SignUp from "./components/SignUp";
import ReactGA from "react-ga4";

const GAID = 'G-HC1G9YRXWS';
ReactGA.initialize(GAID);


export default function App() {

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    ReactGA.send({ hitType: "pageview", page: "/" });

  }, []);

  return (
    <div id="app" className={`bg-lightBlue h-screen text-center md:text-left flex flex-column w-full flex-wrap p-8 md:p-20 items-center content-center font-goog ${isVisible ? 'show' : ''}`}>
        <TitleLogo />
        <SignUp />
    </div>
  );
}
