import React from "react";

function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div
      className={
        isOpen ? "popup popup_open-card popup_active" : "popup popup_open-card"
      }
      onClick={onClose}
    >
      <div className="popup__full-pic" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="popup__close popup__close_card"
          aria-label="закрыть попап"
          onClick={onClose}
        ></button>
        <img className="popup__photo" src={card?.link} alt={card?.name} />
        <p className="popup__description">{card?.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
