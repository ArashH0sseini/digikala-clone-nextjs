import type { NextPage } from "next";


import FormHeader from "../../app/components/shared/FormHeader";
import SigninForm from "../../app/components/signin/SiginnForm";
import SigninFormFooter from "../../app/components/signin/SigninFormFooter";

const Login: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <div className="w-full lg:w-[400px] p-8 border-[1px] border-gray-200 rounded-lg">
        <FormHeader
          title="ثبت‌نام"
          subtitle="سلام!"
          description="لطفا شماره موبایل یا ایمیل خود را وارد کنید"
        />
        <SigninForm />
        <SigninFormFooter />
      </div>
    </div>
  );
};

export default Login;
