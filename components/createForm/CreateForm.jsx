import React from "react";
import { CreateFormStyled } from "./createForm.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createHotelSchema } from "../../utils/yupSchemas";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/API_CONSTANTS";

const CreateForm = ({ type, hotelData, cookie }) => {
  const [rating, setRating] = useState(hotelData?.attributes.rating || 3);

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
    const res = await axios.post(
      baseUrl + "hotels",
      {
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
      },
      {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      }
    );

    if (res.status === 200) {
      setSuccess(true);
      setError(false);

      setTimeout(() => {
        setSuccess(false);
        window.location.href = "/auth/Admin";
      }, 1000);
    }
  };

  const editHotel = async (formData) => {
    const res = await axios.put(
      baseUrl + "hotels/" + hotelData.id,
      {
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
      },
      {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      }
    );

    if (res.status === 200) {
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        setSuccess(false);
        window.location.href = "/auth/Admin";
      }, 1000);
    }
  };

  const deleteHotel = async () => {
    const doDelete = window.confirm(
      "Are you sure you want to delete this hotel?"
    );
    if (doDelete) {
      const res = await axios.delete(baseUrl + "hotels/" + hotelData.id, {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      });

      if (res.status === 200) {
        setSuccess(true);
        setError(false);
        setTimeout(() => {
          setSuccess(false);
          window.location.href = "/auth/Admin";
        }, 1000);
      }
    }
  };

  const onSubmit = (formData) => {
    if (type === "create") {
      createHotel(formData);
    } else {
      editHotel(formData);
    }
  };

  return (
    <CreateFormStyled onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>{type === "create" ? "Add Hotel" : "Edit Hotel"}</legend>
        {success && (
          <h3>{type === "create" ? "Hotel Created" : "Hotel Edited"}</h3>
        )}
        {error && <h3>Unexpected error</h3>}
        <div>
          <label>Hotel Name</label>
          <input
            {...register("name")}
            defaultValue={hotelData?.attributes.name}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label>Rating</label>
          <div className="row">
            <input
              className="range"
              defaultValue={hotelData?.attributes.rating || 3}
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
              defaultChecked={hotelData?.attributes.featured || false}
            />
          </div>
          {errors.featured && <span>{errors.featured.message}</span>}
        </div>
        <div>
          <label>Main Image</label>
          <input
            {...register("main_img")}
            defaultValue={hotelData?.attributes.main_img || ""}
          />
          {errors.main_img && <span>{errors.main_img.message}</span>}
        </div>
        <div>
          <label>Second Image</label>
          <input
            {...register("second_img")}
            defaultValue={hotelData?.attributes.second_img || ""}
          />
          {errors.second_img && <span>{errors.second_img.message}</span>}
        </div>
        <div>
          <label>Third Image</label>
          <input
            {...register("third_img")}
            defaultValue={hotelData?.attributes.third_img || ""}
          />
          {errors.third_img && <span>{errors.third_img.message}</span>}
        </div>
        <div>
          <label>Fourth Image</label>
          <input
            {...register("fourth_img")}
            defaultValue={hotelData?.attributes.fourth_img || ""}
          />
          {errors.fourth_img && <span>{errors.fourth_img.message}</span>}
        </div>
        <div>
          <label>Description</label>
          <textarea
            rows="10"
            {...register("description")}
            defaultValue={hotelData?.attributes.description || ""}
          />
          {errors.description && <span>{errors.description.message}</span>}
        </div>
        <button className="submit_btn">
          {type === "create" ? "Create" : "Edit"}
        </button>
        {type === "edit" && (
          <div className="delBtn" onClick={deleteHotel}>
            Delete
          </div>
        )}
      </fieldset>
    </CreateFormStyled>
  );
};

export default CreateForm;
