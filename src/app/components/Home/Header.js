import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/home/logo.png";
import { Navigation } from "../../utility/Navigation";
import { selectCarts } from "../../redux/slices/cartSlice";

function Header() {
  const allFoodsOfCartRedux = useSelector(selectCarts);
  return (
    <div className="flex bg-[#000] py-2 lg:fixed top-0 left-0 w-screen h-auto z-50">
      <div className="MH_container">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[80px]" />
          </Link>

          <div className="flex gap-5">
            {Navigation?.map((item, key) => (
              <Link
                to={item.url}
                key={key}
                className="font-semibold bg-secondary px-3 py-1 rounded-full relative capitalize"
              >
                {item.name}
                {item.name === "cart" && (
                  <small className="absolute -top-2 -right-2 bg-white p-2 rounded-full py-0">
                    {allFoodsOfCartRedux.length}
                  </small>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
