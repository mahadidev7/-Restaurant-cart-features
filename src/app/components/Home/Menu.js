/* eslint-disable react/style-prop-object */
import React from "react";
import { AppShortTitle, AppTitle } from "../share";
import MenuTitle from "./menuwrapper/MenuTitle";
import MenuWrapper from "./menuwrapper/MenuWrapper";
import { useSelector } from "react-redux";
import { selectAllFoodData } from "../../redux/slices/cartSlice";

function Menu() {
  const allFoodData = useSelector(selectAllFoodData);
  const { burgers, drink, sandwiches, sides } = allFoodData;

  return (
    <div className="bg-menuBackGroundColor" id="Menu">
      <div className="MH_container z-10 relative">
        <div className="py-20">
          <div className="flex flex-col gap-2">
            <AppShortTitle text="Our Menu" />
            <AppTitle firstText="Browse Our" secondText="Menu" />
            <p className="text-base text-center md:text-left">
              Objectively pontificate quality models before intuitive
              information. Dramatically
              <br />
              recapitalize multifunctional materials.
            </p>
          </div>
          <div className="my-12">
            <div className="grid gap-1 md:grid-cols-6 grid-cols-2">
              {/* All Burgers left site */}
              <div className="lg:col-span-5 col-span-full p-1 border border-dashed self-start">
                <MenuTitle text={burgers.name} />
                <div className="grid gap-1 md:grid-cols-2 grid-cols-1 mt-7">
                  {/* Regular Burgers */}
                  <MenuWrapper data={burgers.regular} />
                  {/* House Special Burgers */}
                  <MenuWrapper data={burgers.houseSpecial} />
                </div>
              </div>
              {/* drink right site */}
              <div className="lg:col-span-1 col-span-full">
                <MenuWrapper data={drink.regular} layout="block" />
              </div>
            </div>
          </div>

          {/* Sandwiches && Sides  */}
          <div className="grid gap-1 lg:grid-cols-2 grid-cols-1">
            {/* Sandwiches  */}
            <MenuWrapper data={sandwiches.regular} />
            {/* Sides  */}
            <MenuWrapper data={sides.regular} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
