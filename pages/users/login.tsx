import type { NextPage } from "next";
import GuestLayout from "../../app/components/GuestLayout";


import FormHeader from "../../app/components/shared/FormHeader";
import SignupForm from "../../app/components/signup/SignupForm";
import SignupFormFooter from "../../app/components/signup/SignupFormFooter";
import UserPanelLayout from "../../app/components/UserPanelLayout";
import { NextPageWithLayout } from "../_app";

const Login: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <div className="w-full lg:w-[400px] p-8 border-[1px] border-gray-200 rounded-lg">
        <FormHeader
          title="ثبت‌نام"
          subtitle="سلام!"
          description="لطفا شماره موبایل یا ایمیل خود را وارد کنید"
        />
        <SignupForm />
        <SignupFormFooter />
      </div>
    </div>
  );
};

Login.getLayout = page => <GuestLayout>{page}</GuestLayout>


export default Login;
