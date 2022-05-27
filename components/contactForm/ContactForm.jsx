import { useState } from "react";
import { ContactFormStyled } from "./contactForm.styled";
import { contactSchema } from "../../utils/yupSchemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { baseUrl } from "../../utils/API_CONSTANTS";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const sendMessage = async (formData) => {
    try {
      const res = await axios.post(baseUrl + "messages", {
        data: {
          message: formData.message,
          fname: formData.fName,
          email: formData.email,
          lname: formData.lName,
          option: formData.subject,
        },
      });
      if (res.status === 200) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (formData) => {
    console.log(formData);
    sendMessage(formData);
  };

  return (
    <ContactFormStyled onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Contact Us</legend>
        {success && <h3>Message sent</h3>}
        <div>
          <label htmlFor="fName">First Name</label>
          <input {...register("fName")} />
          {errors.fName && <span>{errors.fName.message}</span>}
        </div>
        <div>
          <label htmlFor="lName">Last Name</label>
          <input {...register("lName")} />
          {errors.lName && <span>{errors.lName.message}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <select {...register("subject")}>
            <option value={null}>Select an Option</option>
            <option value={1}>Pre Stay</option>
            <option value={2}>Post Stay</option>
          </select>
          {errors.subject && <span>{"Please choose one of the options"}</span>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea {...register("message")} />
          {errors.message && <span>{"Mininum 10 characters"}</span>}
        </div>
        <button>Submit</button>
      </fieldset>
    </ContactFormStyled>
  );
};

export default ContactForm;
