import { Form, Formik } from "formik";
import Input from "../../Input";
import { createProductValidation } from "../../../../../validations/createProductValidation";
import Textarea from "../../textarea";
import callApi from "../../../../../services/callApi";
import Router from "next/router";
import ValidationError from "../../../../../exceptions/validationError";

function CreateProductForm() {
  const submitHandler = async (values: any, setFieldError: any) => {
    console.log(values);
    try {
      const res = await callApi().post("/products/create", {
        ...values,
        body: values.description,
      });

      Router.push("/admin/products");
    } catch (error) {
      if (error instanceof ValidationError) {
        Object.entries(error.message).forEach(([key, value]) => setFieldError(key, value as string))
        return;
      }
      console.log(error)
    }
  };
  return (
    <Formik
      initialValues={{
        title: "",
        price: 0,
        description: "",
      }}
      validationSchema={createProductValidation}
      onSubmit={(values, { setFieldError }) =>
        submitHandler(values, setFieldError)
      }
    >
      <Form autoComplete="off">
        <div className="p-6 grid grid-cols-1 gap-y-6 sm:grid-cols-4 sm:gap-x-8">
          <div className="sm:col-span-2">
            <Input name="title" type="text" label="نام محصول" />
          </div>

          <div className="sm:col-span-2">
            <Input name="price" type="number" label="قیمت محصول" />
          </div>

          <div className="sm:col-span-4">
            <Textarea name="description" label="درباره محصول" />
          </div>
        </div>

        <div className="p-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center">
          <button
            type="submit"
            className="ml-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-[#ef4056] focus:outline-none  "
          >
            ایجاد محصول
          </button>
          <button
            onClick={() => {}}
            type="button"
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
          >
            انصراف
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default CreateProductForm;
