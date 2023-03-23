import React from "react";

function Footer() {
  return (
    <div className="bg-black py-36">
    <div className="text-center">
      <p className=" py-5 capitalize text-white">
        this is a job requirement project. Create by{" "}
        <a
          href="https://mahadidev7-portfolio.web.app/"
          className="bg-secondary p-1 mx-1 rounded-sm text-black font-semibold"
          target="_blank" rel="noreferrer"
        >
          Mahadidev7
        </a>
      </p>
      <a
          href="https://github.com/mahadidev7/-Restaurant-cart-features"
          className="text-secondary p-1 mx-1 text-center m-auto"
          target="_blank" rel="noreferrer"
        >
          Get code
        </a>
    </div>

    </div>
  );
}

export default Footer;
