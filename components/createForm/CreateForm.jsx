import React from "react";
import { CreateFormStyled } from "./createForm.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createHotelSchema } from "../../utils/yupSchemas";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/API_CONSTANTS";

const CreateForm = () => {
  const [rating, setRating] = useState(3);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createHotelSchema),
  });

  const createHotel = async (formData) => {
    const res = await axios.post(baseUrl + "hotels", {
      data: {
        name: formData.name,
        description: formData.description,
        featured: formData.featured,
        rating: formData.rating,
        main_img: formData.main_img,
        second_img: formData.second_img,
        third_img: formData.third_img,
        fourth_img: formData.fourth_img,
      },
    });

    if (res.status === 200) {
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  };

  const onSubmit = (formData) => {
    createHotel(formData);
  };

  return (
    <CreateFormStyled onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Add Hotel</legend>
        {success && <h3>Hotel Created</h3>}
        {error && <h3>Unexpected error</h3>}
        <div>
          <label>Hotel Name</label>
          <input {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label>Rating</label>
          <div className="row">
            <input
              className="range"
              defaultValue={3}
              min={1}
              max={5}
              // value={rating}
              type="range"
              {...register("rating")}
              onChange={(e) => setRating(e.target.value)}
            />
            <output>{rating}</output>
          </div>
          {errors.rating && <span>{errors.rating.message}</span>}
        </div>
        <div>
          <div>
            <label>Featured</label>
            <input
              type="checkbox"
              {...register("featured")}
              className="checkbox"
            />
          </div>
          {errors.featured && <span>{errors.featured.message}</span>}
        </div>
        <div>
          <label>Main Image</label>
          <input {...register("main_img")} />
          {errors.main_img && <span>{errors.main_img.message}</span>}
        </div>
        <div>
          <label>Second Image</label>
          <input {...register("second_img")} />
          {errors.second_img && <span>{errors.second_img.message}</span>}
        </div>
        <div>
          <label>Third Image</label>
          <input {...register("third_img")} />
          {errors.third_img && <span>{errors.third_img.message}</span>}
        </div>
        <div>
          <label>Fourth Image</label>
          <input {...register("fourth_img")} />
          {errors.fourth_img && <span>{errors.fourth_img.message}</span>}
        </div>
        <div>
          <label>Description</label>
          <textarea rows="10" {...register("description")} />
          {errors.description && <span>{errors.description.message}</span>}
        </div>
        <button>Create</button>
      </fieldset>
    </CreateFormStyled>
  );
};

export default CreateForm;
