import { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { useForm } from "react-hook-form";

export default function AddNewCardPopup({
  isOpen,
  onClose,
  addCard,
  buttonText,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  function onSubmit(data) {
    addCard({ name: data.name, link: data.link });
  }

  return (
    <PopupWithForm
      name={"card"}
      title={"Новое место"}
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      isValid={isValid}
    >
      <input
        placeholder="Название"
        className="input-text input-text_type_place"
        maxLength={30}
        {...register("name", {
          required: "Заполните это поле.",
          minLength: {
            value: 2,
            message: "Минимальная длина 2 символа.",
          },
        })}
      />
      <span className="input input_place-error input-text__error_active">
        {errors.name?.message}
      </span>
      <input
        placeholder="Добавьте ссылку"
        className="input-text input-text_type_link"
        {...register("link", {
          required: "Заполните это поле.",
          pattern: {
            value:
              /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
            message: "Введите URL.",
          },
        })}
      />
      <span className="input input_link-error input-text__error_active">
        {errors.link?.message}
      </span>
    </PopupWithForm>
  );
}
