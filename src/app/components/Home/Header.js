import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/home/logo.png";

const Navigation = [
    {
        url: '/',
        name: 'Home'
    },
    {
        url: '/cartpage',
        name: 'Cart'
    },
]

function Header() {
  return (
    <div className="flex bg-[#000] py-2">
      <div className="MH_container">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo" className="w-[80px]" />
          <div className="flex gap-5">
          {
            Navigation?.map((item, key)=> (
                <Link to={item.url} key={key} className="text-[#fff]">
                    {item.name}
                </Link>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
