import * as Yup from "yup";

export const createProductValidation = Yup.object().shape({
    title: Yup.string().required("وارد کردن نام محصول الزامیست").min(4).max(255),
    price: Yup.string().min(4,"قیمت باید حتما بیشتر از 4 عدد باشد").max(255),
    description: Yup.string().required("وارد کردن توضیحات محصول الزامیست").min(4).max(6000)
})