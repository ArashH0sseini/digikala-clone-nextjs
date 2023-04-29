import type { NextPage } from "next";
import LoginForm from "../../app/components/login/LoginForm";
import FormHeader from "../../app/components/shared/FormHeader";
import { useAppDispatch } from "../../app/hooks";
import { updatePhoneVerifyToken } from "../../app/store/auth";

const Login: NextPage = () => {
  const dispatch = useAppDispatch();
  const setPhoneVerifyToken = (token: string) => {
    dispatch(updatePhoneVerifyToken(token));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <div className="w-full lg:w-[400px] p-8 border-[1px] border-gray-200 rounded-lg">
        <FormHeader
          title="ورود"
          description="لطفا شمار موبایل خود را برای ورود وارد نمایید"
        />
        <LoginForm setToken={setPhoneVerifyToken} />
      </div>
    </div>
  );
};

export default Login;
