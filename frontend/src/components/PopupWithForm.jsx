import React from "react";

function PopupWithForm({
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  isValid,
  children,
}) {
  const popupClassName = `popup popup_${name} ${isOpen && "popup_active"}`;
  const saveButtonClassName = `popup__save-btn ${
    !isValid && "popup__save-btn_inactive"
  }`;

  return (
    <div className={popupClassName} onClick={onClose}>
      <button
        type="button"
        className="popup__close popup__close_form"
        aria-label="Закрыть попап"
        onClick={onClose}
      />
      <form
        className={`popup__container popup__container_${name}`}
        name={name}
        onSubmit={onSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="popup__title">{title}</h3>
        {children}
        <button
          type="submit"
          className={saveButtonClassName}
          disabled={!isValid}
          aria-label="Сохранить данные"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default PopupWithForm;
