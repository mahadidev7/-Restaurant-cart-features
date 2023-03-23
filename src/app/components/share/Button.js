import React, { useEffect, useState } from "react";

function Button({ text = "Buy", handelClick = () => {}, style='', ...rest }) {

  return (
    <button
      className={`bg-black active:!opacity-75 px-6 py-1 rounded-full text-white font-bold capitalize ${style}`}
      onClick={() => handelClick()}
      {...rest}
    >
      {text}
    </button>
  );
}

export default Button;
