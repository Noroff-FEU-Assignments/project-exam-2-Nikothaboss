import * as yup from "yup"

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
  password: yup
    .string()
    .required("Please enter your password")
})

export const contactSchema = yup.object().shape({
  fName: yup
    .string()
    .required("Name Required")
    .min(2, "Minumum 2 characters"),
  lName: yup
    .string()
    .required("Last name required")
    .min(4, "Minumum 4 characters"),
  email: yup
    .string()
    .required("Please provide an email so we can contact you")
    .email("Please enter a valid email address"),
  subject: yup
    .number()
    .nullable()
    .required("Please select an option"),
  message: yup
    .string()
    .required('Please provide a message')
    .min(10, "Minimum 10 characters required"),
})

