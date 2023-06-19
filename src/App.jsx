import React from "react";
import TitleLogo from "./components/TitleLogo";
import SignUp from "./components/SignUp";


export default function App() {
  return (
    <div className="bg-lightBlue h-screen flex flex-column w-full flex-wrap p-8 items-center content-center">
        <TitleLogo />
        <SignUp />
    </div>
  );
}
