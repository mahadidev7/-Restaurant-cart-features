import React from "react";
import { THEME } from "../../utils/Theme";
import { AppShortTitle, AppTitle } from "../share";
import threeIMG from "../../assets/home/3.png";
import MenuWrapper from "./menuwrapper/MenuWrapper";

function Menu() {

  return (
    <div className={`bg-[${THEME.menuBackGroundColor}] relative`} id="Menu">
      <img src={threeIMG} alt="3.png" className="absolute top-20 right-0 -z-20" />
      <div className="MH_container">
        <div className="py-20">
          <AppShortTitle text="Our Menu" />
          <AppTitle firstText="Browse Our" secondText="Menu" />
          <p>
          Objectively pontificate quality models before intuitive information. Dramatically
          <br />
          recapitalize multifunctional materials.
          </p>
          <div className="my-12">
            <MenuWrapper />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
