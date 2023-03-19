import React from "react";

function Button({ text = "Buy", handelClick = () => {}, style }) {
  return (
    <button
      className={`bg-primary px-6 py-1 rounded-full text-white font-bold capitalize ${style}`}
      onClick={() => handelClick()}
    >
      {text}
    </button>
  );
}

export default Button;
