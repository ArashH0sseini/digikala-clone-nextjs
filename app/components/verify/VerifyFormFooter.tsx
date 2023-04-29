import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

function VerifyFormFooter() {
  const [timer, setTimer] = useState("2:00");

  return (
    <div>
      <div className="flex items-center">
        <p className="text-cyan-500 text-xs font-medium pr-4 pl-1 py-6">
          ورود با رمز عبور
        </p>
        <FaChevronLeft className="text-cyan-500 h-3 w-3" />
      </div>
      <p className="text-center text-xs font-light py-4">
        {timer} مانده تا دریافت مجدد کد
      </p>
    </div>
  );
}

export default VerifyFormFooter;
