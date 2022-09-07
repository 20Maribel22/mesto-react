function ImagePopup(props) {
  const { card, onClose } = props;

  return (
    <div className={`popup popup_theme_image ${card ? "popup_opened" : ""}`}>
      <div className="popup__image-container">
        <button
          type="button"
          className="popup__button-close popup__button-close_theme_image"
          onClick={onClose}
        />
        <div className="popup__description">
          <img src={card} className="popup__photo" alt={card} />
        </div>
      </div>
    </div>
  );
}
export default ImagePopup;
