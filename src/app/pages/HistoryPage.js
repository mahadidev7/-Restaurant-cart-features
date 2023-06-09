/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../components";
import { Button } from "../components/share";
import { selectOrderHistoryData } from "../redux/slices/cartSlice";
import { AiFillPrinter } from "react-icons/ai";
import NotProduct from "../components/share/NotProduct";
import OrderHistory from "../components/history/OrderHistory";

function HistoryPage() {
  const allHistoryData = useSelector(selectOrderHistoryData);
  const [printPage, setPrintPage] = useState(false);
  const [orderHistoryData, setOrderHistoryData] = useState(null);

  const pintButton = (id) => {
    setOrderHistoryData(allHistoryData[id]);
    setPrintPage(!printPage);
  };

  if (printPage) {
    return (
      <div className="p-4">
        <Button
          text="back"
          style="!bg-[#333]"
          handelClick={() => pintButton(0)}
        />
        <OrderHistory historyData={orderHistoryData} />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="lg:mt-36 mt-10">
        <h4 className="text-center my-5 text-4xl">All Order History List</h4>
        <div className="w-screen h-auto my-6">
          <div className="MH_container">
            <table className="table-auto w-full border border-[#d0caca] bg-white mb-1">
              <thead>
                <tr>
                  <th width="5%">
                    <p className="text-center">In</p>
                  </th>
                  <th width="75%">Time</th>
                  <th width="20%" className="text-center">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                {allHistoryData?.map((item, key) => (
                  <tr className="border border-[#d0caca]" key={key}>
                    <td>
                      <p className="text-center">{key + 1}</p>
                    </td>
                    <td>
                      <div className="p-2">
                        <p>
                          Date: {item?.timeFormat?.date}/
                          {item?.timeFormat?.month}/{item?.timeFormat?.year}
                        </p>
                        <p>
                          Time: {item?.timeFormat?.hour}:{item?.time?.minutes}:
                          {item?.timeFormat?.seconds}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="text-center">
                        <Button
                          text={
                            <div className="flex items-center gap-1">
                              <AiFillPrinter size={20} />
                              <p className="text-white">Print</p>
                            </div>
                          }
                          style={"!bg-black"}
                          handelClick={() => pintButton(key)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <NotProduct ArrayData={allHistoryData} errorText="There are have No Order History" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryPage;
