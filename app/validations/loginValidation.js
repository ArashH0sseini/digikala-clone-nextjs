import * as Yup from "yup";

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/

export const loginValidation = Yup.object().shape({
    phone: Yup.string("فرمت وارد شده نادرست است").matches(phoneRegExp, 'شماره موبایل صحیح وارد نمایید').required("لطفا این قسمت را خالی نگذارید")
})