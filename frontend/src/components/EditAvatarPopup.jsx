import { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { useForm } from "react-hook-form";

export default function EditAvatarPopup({
  isOpen,
  onClose,
  changeAvatar,
  buttonText,
}) {
  useEffect(() => {
    reset();
  }, [isOpen]);

  function onSubmit(data) {
    changeAvatar({ avatar: data.avatar });
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  return (
    <PopupWithForm
      name={"avatar"}
      title={"Обновить аватар"}
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      isValid={isValid}
    >
      <input
        placeholder="Добавьте ссылку"
        className="input-text input-text_type_avatar"
        {...register("avatar", {
          required: "Заполните это поле.",
          pattern: {
            value:
              /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
            message: "Введите URL.",
          },
        })}
      />
      <span className="input input_avatar-error input-text__error_active">
        {errors.avatar?.message}
      </span>
    </PopupWithForm>
  );
}
