import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
  password: yup.string().required("Please enter your password"),
});

export const contactSchema = yup.object().shape({
  fName: yup
    .string()
    .required("Name Required")
    .min(2, "Minumum 2 characters")
    .matches(
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ðæ ,.'-]+$/u,
      "Unvalid name"
    ),
  lName: yup
    .string()
    .required("Last name required")
    .min(4, "Minumum 4 characters")
    .matches(
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ðæ ,.'-]+$/u,
      "Unvalid name"
    ),
  email: yup
    .string()
    .required("Please provide an email so we can contact you")
    .email("Please enter a valid email address"),
  subject: yup.number().nullable().required("Please select an option"),
  message: yup
    .string()
    .required("Please provide a message")
    .min(10, "Minimum 10 characters required"),
});

export const createHotelSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please provide a hotel name")
    .min(2, "Minimum 2 characters"),
  description: yup
    .string()
    .min(10, "Minimum 10 characters")
    .max(1000, "Max 1000 characters")
    .required("Please enter a message"),
  rating: yup
    .number()
    .min(1, "Minimum rating is 1")
    .max(5, "Max rating is 5")
    .required("Please set a rating"),
  featured: yup.boolean().required("Required"),
  main_img: yup
    .string()
    .matches(
      /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim,
      "Invalid image url"
    )
    .required("Enter an image url"),
  second_img: yup
    .string()
    .matches(
      /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim,
      "Invalid image url"
    )
    .required("Enter an image url"),
  third_img: yup
    .string()
    .matches(
      /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim,
      "Invalid image url"
    )
    .required("Enter an image url"),
  fourth_img: yup
    .string()
    .matches(
      /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim,
      "Invalid image url"
    )
    .required("Enter an image url"),
});
