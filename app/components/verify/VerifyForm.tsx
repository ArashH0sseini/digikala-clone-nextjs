import { Field, Form, Formik, ErrorMessage } from "formik";
import Router from "next/router";
import ValidationError from "../../exceptions/validationError";

import callApi from "../../services/callApi";
import { codeVerifyValidation } from "../../validations/codeVerifyValidation";
import VerifyFormFooter from "./VerifyFormFooter";

interface Props {
  token?: string;
  clearToken: () => void;
}

function VerifyForm({ token, clearToken }: Props) {
  const submitHandler = async (values: any, setFieldError: any) => {
    try {
      const res = await callApi().post("/auth/login/verify-phone", values);
      if (res.status === 200) {
        //clear phone verify token from redux
        await Router.push("/");
        clearToken();
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        Object.entries(error.message).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
      }
    }
  };
  return (
    <Formik
      initialValues={{
        code: "",
        token: token,
      }}
      validationSchema={codeVerifyValidation}
      onSubmit={(values, { setFieldError }) =>
        submitHandler(values, setFieldError)
      }
    >
      <Form autoComplete="off">
        <Field
          name="code"
          type="text"
          placeholder=""
          focused
          className="w-full caret-cyan-500 ring-1 lg:ring-gray-300  lg:focus:ring-cyan-500 focus:outline-none bg-gray-100 lg:bg-white p-3 px-4 rounded-lg border-b-2 border-b-red-700 lg:border-0 mt-6 text-base font-light"
        />
        <ErrorMessage
          name="code"
          render={(msg) => <p className="text-red-700 text-xs py-2">{msg}</p>}
        />
        <VerifyFormFooter />

        <button
          type="submit"
          className="w-full text-white bg-[#ef4056] rounded-md my-6 p-3 text-base"
        >
          تایید
        </button>
      </Form>
    </Formik>
  );
}

export default VerifyForm;
