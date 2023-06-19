import React from "react";
import mcData from "../data/mcData.json";


const SignUp = () => {
  return (
    <form action={mcData.action} className="flex-wrap shadow-xl w-full md:w-9/12 text-lg my-2">
        <input type="hidden" name="id" value={mcData.id} />
        <input type="hidden" name="u" value={mcData.u} />
      <input name="MERGE0" id="MERGE0" placeholder="youremail@yourdomain.com" type="email" className="p-3 md:w-9/12 w-full rounded-t-md md:rounded-l-md" required />
      <input className="bg-darkBlue text-white cursor-pointer p-3 w-full md:w-3/12 font-bold rounded-b-md md:rounded-r-md" type="submit" value="Sign Up"/>
    </form>
  );
};

export default SignUp;
