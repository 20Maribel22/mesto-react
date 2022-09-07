import { api } from "../utils/api";
import { useEffect, useState } from "react";
import Card from "./Card";

function Main(props) {
  const [userName, setuserName] = useState("");
  const [userDescription, setuserDescription] = useState("");
  const [userAvatar, setuserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const initialPromises = Promise.all([
      api.getUserInfo(),
      api.getInitialCards(),
    ]);

    initialPromises
      .then(([user, card]) => {
        setuserName(user.name);
        setuserDescription(user.about);
        setuserAvatar(user.avatar);
        setCards(card);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img
            className="profile__image"
            style={{ backgroundImage: `url(${userAvatar})` }}
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__description">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__button profile__button_type_edit"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__text">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__button profile__button_type_add"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="places">
        <ul className="cards">
          {cards.map((card) => (
            <Card onCardClick={props.onCardClick} card={card} key={card._id} />
          ))}
        </ul>
      </section>
    </main>
  );
}
export default Main;
