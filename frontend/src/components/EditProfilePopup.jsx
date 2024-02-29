import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({
  isOpen,
  onClose,
  setUserInfo,
  buttonText,
}) {
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    reset();
    setValue("name", currentUser?.name);
    setValue("about", currentUser?.about);
  }, [isOpen, currentUser]);

  function onSubmit(data) {
    setUserInfo({ name: data.name, about: data.about });
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setValue,
  } = useForm({ mode: "onChange" });

  return (
    <PopupWithForm
      title={"Редактировать профиль"}
      name={"edit-info"}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={buttonText}
      onSubmit={handleSubmit(onSubmit)}
      isValid={isValid}
    >
      <input
        placeholder="Введите имя"
        className="input-text input-text_type_name"
        maxLength={40}
        {...register("name", {
          required: "Заполните это поле.",
          minLength: {
            value: 2,
            message: "Минимальная длина 2 символа.",
          },
        })}
      />
      <span className="input input_name-error input-text__error_active">
        {errors.name?.message}
      </span>
      <input
        placeholder="О себе"
        className="input-text input-text_type_about"
        maxLength={200}
        {...register("about", {
          required: "Заполните это поле.",
          minLength: {
            value: 2,
            message: "Минимальная длина 2 символа.",
          },
        })}
      />
      <span className="input input_about-error input-text__error_active">
        {errors.about?.message}
      </span>
    </PopupWithForm>
  );
}
