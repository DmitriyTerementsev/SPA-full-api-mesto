import PopupWithForm from "./PopupWithForm";

export default function DeleteCardPopup({
  isOpen,
  onClose,
  deleteCard,
  buttonText,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    deleteCard();
  }
  return (
    <PopupWithForm
      title={"Вы уверены?"}
      name={"delCard"}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={buttonText}
      onSubmit={handleSubmit}
      isValid={true}
    />
  );
}
