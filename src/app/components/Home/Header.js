import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/home/logo.png";
import { Navigation } from "../../utility/Navigation";

function Header() {
  return (
    <div className="flex bg-[#000] py-2">
      <div className="MH_container">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[80px]" />
          </Link>

          <div className="flex gap-5">
            {Navigation?.map((item, key) => (
              <Link to={item.url} key={key} className="text-white">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
