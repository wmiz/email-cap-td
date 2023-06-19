import React, {useEffect, useState} from "react";
import TitleLogo from "./components/TitleLogo";
import SignUp from "./components/SignUp";


export default function App() {

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div id="app" className={`bg-lightBlue h-screen flex flex-column w-full flex-wrap p-7 items-center content-center font-goog ${isVisible ? 'show' : ''}`}>
        <TitleLogo />
        <SignUp />
    </div>
  );
}
