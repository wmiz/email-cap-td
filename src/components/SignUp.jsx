import React from "react";
import mcData from "../data/mcData.json";


const SignUp = () => {
  return (
    <form action={mcData.action} className="flex-wrap m-2 shadow-xl w-9/12">
        <input type="hidden" name="id" value={mcData.id} />
        <input type="hidden" name="u" value={mcData.u} />
      <input name="MERGE0" id="MERGE0" placeholder="youremail@yourdomain.com" type="text" className="p-3 w-9/12"/>
      <input className="bg-darkBlue text-white p-3 w-3/12" type="submit" value="Try it!"/>
    </form>
  );
};

export default SignUp;
