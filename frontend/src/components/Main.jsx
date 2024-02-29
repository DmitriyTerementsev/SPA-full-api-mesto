import editOverlay from "../images/edit-profile.svg";
import Card from "./Card";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditProfile,
  addCard,
  onEditAvatar,
  onImgClick,
  onTrashClick,
  onLikeClick,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              src={currentUser?.avatar}
              alt={currentUser?.name}
              onClick={onEditAvatar}
            />
            <img
              className="profile__avatar profile__avatar_edit"
              src={editOverlay}
              alt="Аватар"
              onClick={onEditAvatar}
            />
          </div>
          <div className="profile__info">
            <div className="profile__description">
              <h1 className="profile__name" id="profile__name">
                {currentUser?.name}
              </h1>
              <p className="profile__about" id="profile__about">
                {currentUser?.about}
              </p>
            </div>
            <button
              type="button"
              className="profile__edit-btn"
              aria-label="Кнопка редактирования профиля"
              onClick={onEditProfile}
            ></button>
          </div>
          <button
            type="button"
            className="profile__add-btn"
            aria-label="Кнопка добавления фото"
            onClick={addCard}
          ></button>
        </section>

        <section className="elements">
          {cards?.map((card) => (
            <Card
              key={card._id}
              card={card}
              onImgClick={onImgClick}
              onLikeClick={onLikeClick}
              onTrashClick={onTrashClick}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;