import React from "react";

function Footer() {
  return (
    <div className="bg-black py-36">
      <p className="text-center py-5 capitalize text-white">
        this is a job requirement project. Create by
        <a
          href="https://mahadidev7-portfolio.web.app/"
          className="bg-secondary p-1 mx-1 rounded-sm"
        >
          {" "}
          Mahadidev7
        </a>
      </p>
    </div>
  );
}

export default Footer;
