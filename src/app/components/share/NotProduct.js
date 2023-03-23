import React from "react";
import no_product from "../../assets/no_product.jpg";

function NotProduct({ ArrayData=[], errorText="Data Not Found!!!", ...rest }) {
  return (
    <>
      {!ArrayData.length && (
        <div className="bg-white py-10 rounded-md" {...rest} >
          <img
            src={no_product}
            alt="no product"
            className="text-center m-auto"
          />
          <h3 className="text-center text-2xl text-[#797575]">{errorText}</h3>
        </div>
      )}
    </>
  );
}

export default NotProduct;
