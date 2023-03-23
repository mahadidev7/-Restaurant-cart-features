import React from "react";

function MenuTitle({text='', style='', ...rest}) {
  return (
    <h2 className={`text-[40px] bg-[#FAF7F2] m-auto -mt-9 w-fit px-5 capitalize ${style}`} {...rest}>
      {text}
    </h2>
  );
}

export default MenuTitle;
