import React from "react";
import AppShortTitleIcon from "../../assets/home/title_icon.svg";

function AppShortTitle({ text = "", style }) {
  return (
    <div
      className={`flex items-center gap-1  justify-center md:justify-start ${style}`}
    >
      <img loading="lazy" src={AppShortTitleIcon} alt="AppShortTitle icon" />
      <div className={`MH_shortTitle text-base text-primary capitalize`}>
        {text}
      </div>
    </div>
  );
}

export default AppShortTitle;
