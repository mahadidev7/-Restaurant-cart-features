import React from "react";
import { useSelector } from "react-redux";
import { selectFoods } from "../../redux/slices/foodSlice";
import { AppTitle } from "../share";
import CartItem from "./CartItem";

function Baskets() {
  // const [allCartData, setAllCartData] = useState([]);
  const allFoodsOfCartRedux = useSelector(selectFoods);

// useEffect(() => {
//   setAllCartData(allFoodsOfCartRedux)
// }, [allFoodsOfCartRedux]);

  return (
    <div className="col-span-2 p-3 py-6">
      <AppTitle firstText="Products" />
      <br />
      {
        allFoodsOfCartRedux?.map((item, key) => <CartItem {...item} key={key} />)
      }
      
    </div>
  );
}

export default Baskets;
