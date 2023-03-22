/* eslint-disable react/style-prop-object */
import React from "react";
import MenuItem from "./MenuItem";
import MenuTitle from "./MenuTitle";


function MenuWrapper({ data, style='', layout }) {
  const { name, items } = data;
  return (
    <div className="border border-dashed p-1 rounded-sm lg:mt-0 mt-10">
      <MenuTitle text={name} />
      <div className="">
        {items?.map((item, key) => (
          <MenuItem key={key} assets={item} style={style} layout={layout} />
        ))}
      </div>
    </div>
  );
}

export default MenuWrapper;
