/* eslint-disable react/style-prop-object */
import React from "react";
import MenuItem from "./MenuItem";
import MenuTitle from "./MenuTitle";


function MenuWrapper({ data, style='' }) {
  const { name, items } = data;
  return (
    <div className="border border-dashed p-1 rounded-sm lg:mt-0 mt-10">
      <MenuTitle text={name} />
      <div className="">
        {items?.map((item, key) => (
          <MenuItem key={key} {...item} style={style} />
        ))}
      </div>
    </div>
  );
}

export default MenuWrapper;
