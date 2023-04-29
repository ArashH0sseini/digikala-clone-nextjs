import type { NextPage } from "next";
import FormHeader from "../../app/components/shared/FormHeader";
import VerifyForm from "../../app/components/verify/VerifyForm";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Router from "next/router";
import { selectPhoneVerfyToken, updatePhoneVerifyToken } from "../../app/store/auth";

const VeifyLogin: NextPage = () => {

  const dispatch = useAppDispatch();
  const token = useAppSelector(selectPhoneVerfyToken);

const clearPhoneVerifyToken = () => {
  dispatch(updatePhoneVerifyToken(undefined))
}

  useEffect(() => {

    Router.beforePopState(({})=>{
      clearPhoneVerifyToken()
      return true
    })


    if (token === undefined) {
      Router.push("/login");
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <div className="w-full lg:w-[400px] p-8 border-[1px] border-gray-200 rounded-lg">
        <FormHeader
          title="کد تایید را وارد کنید"
          description={`کد تایید برای شماره ۰۹۳۸۹۹۲۴۵۵۰ پیامک شد`}
        />
        <VerifyForm token={token} clearToken={clearPhoneVerifyToken} />
      </div>
    </div>
  );
};

export default VeifyLogin;
