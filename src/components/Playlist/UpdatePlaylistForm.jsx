import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { playlistFormValidation } from "../../utils/formValidations";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorText from "../ErrorText";
import useUpdatePlaylist from "../../hooks/useUpdatePlaylist";
import Textarea from "../Textarea";
import { closeModal } from "../../store/slices/modalsSlice";

const UpdatePlaylistForm = () => {
  const { currentPlaylist } = useSelector((store) => store.playlist);
  const { mutate, status, data } = useUpdatePlaylist();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(playlistFormValidation),
  });

  const submitHandler = async (data) => {
    mutate({ playlistId: currentPlaylist?._id, data });
  };

  useEffect(() => {
    let timer;
    if (status === "success") {
      console.log(data);
      
      timer = setTimeout(() => {
        dispatch(closeModal());
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="my-4 flex flex-col gap-4"
      >
        <div className="space-y-1">
          <Input
            label={"Name"}
            placeholder="Playlist name"
            defaultValue={currentPlaylist?.name}
            {...register("name")}
          />
          {errors?.name && <ErrorText>{errors?.name?.message} </ErrorText>}
        </div>

        <div className="space-y-1">
          <Textarea
            label="Description"
            defaultValue={currentPlaylist?.description}
            {...register("description")}
          />
          {errors?.description && (
            <ErrorText>{errors?.description?.message} </ErrorText>
          )}
        </div>

        {status === "success" && (
          <p className="text-black font-semibold text-sm">Playlist updated</p>
        )}

        <button
          disabled={status === "pending"}
          className="disabled:bg-primary-dark/60 transition py-2.5 text-sm font-semibold font-Roboto bg-primary-dark rounded-md"
        >
          Update
        </button>
      </form>
    </>
  );
};

export default UpdatePlaylistForm;
