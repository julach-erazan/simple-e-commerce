import * as yup from "yup";


export const formSchema = yup.object().shape({
    userName: yup.string().required("Required"),
    password: yup.string().required("Required")
});
