import Router from "next/router";
import React from "react";

function SigninFormFooter() {
  return (
    <div className="space-y-4">
      <div>
        <span className="text-sm">حساب کاربری دارید؟</span>{" "}
        <button onClick={()=>Router.push("/login")} className="text-cyan-500">ورود</button>
      </div>
      <div>
        <p className="text-[0.72rem] font-light">
          ورود شما به معنای پذیرش{" "}
          <span className="text-cyan-500">شرایط دیجی‌کالا</span> و{" "}
          <span className="text-cyan-500">قوانین حریم‌خصوصی</span> است
        </p>
      </div>
    </div>
  );
}

export default SigninFormFooter;
