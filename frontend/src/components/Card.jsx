import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

function Card({ card, onImgClick, onLikeClick, onTrashClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser?._id;
  const isLiked = card.likes.some((i) => i._id === currentUser?._id);

  function handleClick() {
    onImgClick(card.name, card.link);
  }
  function handleLikeClick() {
    onLikeClick(card, isLiked);
  }
  function handleDelClick() {
    onTrashClick(card._id);
  }

  return (
    <article className="element">
      {isOwn && (
        <button
          type="button"
          className="element__delete-btn"
          aria-label="Удаление фото"
          onClick={handleDelClick}
        ></button>
      )}
      <img
        className="element__pic"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="element__group">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__like-group">
          <button
            type="button"
            className={`element__like-btn ${
              isLiked && "element__like-btn_active"
            }`}
            onClick={handleLikeClick}
            aria-label="Кнопка лайка"
          ></button>
          <div className="element__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </article>
  );
}

export default Card;