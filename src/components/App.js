import "../pages/index.css";
import {useState} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {
  const [isEditProfilePopupOpen, handleEditProfileClick] = useState(false);
  const [isAddPlacePopupOpen, handleAddPlaceClick] = useState(false);
  const [isEditAvatarPopupOpen, handleEditAvatarClick] = useState(false);
  const [isConfirmPopupOpen, handleConfirmClick] = useState(false);
  const [selectedCard, handleCardClick] = useState(null);

  function  closeAllPopups()  {
    handleEditProfileClick(false);
    handleAddPlaceClick(false);
    handleEditAvatarClick(false);
    handleConfirmClick(false);
    handleCardClick(null);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        text="Сохранить"
      >
        <label className="popup__field">
          <input
            type="text"
            className="popup__item popup__item_type_name"
            id="name-item"
            name="name"
            placeholder="Имя"
            minlength="2"
            maxlength="40"
            required
          />
          <span className="popup__item-error name-item-error"></span>
        </label>
        <label className="popup__field">
          <input
            type="text"
            className="popup__item popup__item_type_info"
            id="job-item"
            name="job"
            placeholder="О себе"
            minlength="2"
            maxlength="200"
            required
          />
          <span className="popup__item-error job-item-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        text="Создать"
      >
        <label className="popup__field">
          <input
            type="text"
            className="popup__item popup__item_type_newname"
            id="newname-item"
            name="newname"
            placeholder="Название"
            minlength="2"
            maxlength="30"
            required
          />
          <span className="popup__item-error newname-item-error"></span>
        </label>
        <label className="popup__field">
          <input
            type="url"
            className="popup__item popup__item_type_link"
            id="link-item"
            pattern="https://.*"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__item-error link-item-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="add-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        text="Сохранить"
      >
        <label className="popup__field">
          <input
            type="url"
            className="popup__item popup__item_type_link"
            id="avatar-item"
            name="avatar"
            placeholder="Ссылка на картинку"
            pattern="https://.*"
            required
          />
          <span className="popup__item-error avatar-item-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        text="Да"
      ></PopupWithForm>
      <ImagePopup 
      card={selectedCard} 
      onClose={closeAllPopups} />
    </div>
  );
}

export default App;
