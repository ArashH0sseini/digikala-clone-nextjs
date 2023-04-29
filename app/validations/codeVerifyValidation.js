import * as Yup from "yup";

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/

export const codeVerifyValidation = Yup.object().shape({
    code: Yup.string().required("لطفا این قسمت را خالی نگذارید").matches(/^[0-9]+$/,"فقط میتوانید عدد وارد نمایید").length(6,'کد باید حتما 6 رقم باشد')
})