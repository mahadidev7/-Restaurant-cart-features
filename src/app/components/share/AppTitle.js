import React from "react";

function AppTitle({ firstText = "", secondText = "", style, ...rest }) {
  return (
    <div className={`flex gap-3 justify-center md:justify-start flex-wrap ${style}`} {...rest}>
      <p className="md:text-[55px] MH_appTitle font-bold text-5xl">
        {firstText}
      </p>
      <p className="md:text-[55px] MH_shortTitle font-bold text-primary text-5xl">
        {secondText}
      </p>
    </div>
  );
}

export default AppTitle;
