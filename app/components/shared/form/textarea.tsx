import { ErrorMessage, Field, FieldProps } from "formik";
import { FC } from "react";
import { string } from "yup";

interface TextareaProps {
  name: string;
  label: string;
  rows?: number;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}

const Textarea: FC<TextareaProps> = ({
  name,
  label,
  rows = 5,
  inputClassName,
  labelClassName,
  errorClassName,
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className={`block text-sm font-medium text-gray-700 ${
          labelClassName ?? ""
        }`}
      >
        {label}
      </label>
      <Field id={name} name={name}>
        {({ field, meta }: FieldProps) => (
          <textarea
            id={name}
            rows={rows}
            className={`mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#ef4056] focus:border-[#ef4056] sm:text-sm ${
              inputClassName ?? ""
            }`}
            {...field}
          />
        )}
      </Field>
      <ErrorMessage
        name={name}
        className={`text-red-500 text-xs my-2 ${errorClassName ?? ""}`}
        component="div"
      />
    </>
  );
};

export default Textarea;
