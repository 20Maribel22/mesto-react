function Card({ onCardClick, card: { name, link, likes } }) {
  function handleClick() {
    onCardClick(link);
  }

  return (
    <li className="cards__item">
      <img
        className="cards__image"
        src={link}
        alt={name}
        onClick={handleClick}
      />
      <div className="cards__description">
        <h2 className="cards__title">{name}</h2>
        <div className="cards__like-gpoup">
          <button
            type="button"
            className="cards__button cards__button_type_like"
          ></button>
          <span className="cards__like-number">{likes.length}</span>
        </div>
      </div>
      <button
        type="button"
        className="cards__button cards__button_type_del"
        title="Удалить карточку"
      ></button>
    </li>
  );
}

export default Card;
