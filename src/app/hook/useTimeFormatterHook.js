import React, { useEffect, useState } from "react";

function useTimeFormatterHook() {
  const [timeData, setTimeData] = useState(null);
  // Create a Time Format
  const customizesTimeFormatter = () => {
    var today = new Date();
    var DD = String(today.getDate()).padStart(2, "0");
    var MM = String(today.getMonth() + 1).padStart(2, "0");
    var YYYY = today.getFullYear();
    var hh = today.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();

    today = YYYY + MM + DD + hh + mm + ss;
    setTimeData({
      year: YYYY,
      month: MM,
      date: DD,
      hour: hh,
      minutes: mm,
      seconds: ss,
    })
  };

  useEffect(() => {
    customizesTimeFormatter()
  }, []);

  return { timeData, customizesTimeFormatter };
}

export default useTimeFormatterHook;
