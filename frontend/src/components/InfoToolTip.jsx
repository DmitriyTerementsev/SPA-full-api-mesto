import successTip from "../images/Union.svg";
import failTip from "../images/UnionFail.svg";

export default function InfoToolTip({ success, fail, onClose }) {
  const isOpen = success || fail;

  const popupClassName = `popup popup_tip ${isOpen && "popup_active"}`;

  return (
    <div className={popupClassName}>
      <div className="popup__container popup__container_tip">
        <button
          aria-label="закрыть"
          type="button"
          className="popup__close popup__close_form"
          onClick={onClose}
        />
        <img src={success ? successTip : failTip} className="popup__logo" />
        <h2 className="popup__title popup__title_tip">
          {success
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
      </div>
    </div>
  );
}
