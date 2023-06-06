import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

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
        title="Редактировать профиль"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__form" name="profile_form" noValidate>
          <input className="popup__input" id="name-input" type="text" name="name" placeholder="Ваше имя" minLength="2"
            maxLength="40" required />
          <span className="popup__input-error name-input-error"></span>
          <input className="popup__input" id="job-input" type="text" name="job" placeholder="Ваш вид деятельности"
            minLength="2" maxLength="200" required />
          <span className="popup__input-error job-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__form" name="cards_form" noValidate>
          <input className="popup__input" id="place-input" type="text" name="place" placeholder="Название" minLength="2"
            maxLength="30" required />
          <span className="popup__input-error place-input-error"></span>
          <input className="popup__input" id="link-input" type="url" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error link-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__form" name="avatar_form" noValidate>
          <input className="popup__input" id="avatar-input" type="url" name="avatar" placeholder="Ссылка на картинку"
            required />
          <span className="popup__input-error avatar-input-error"></span>
        </div>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      ></ImagePopup>

    </div>
  )
}

export default App;
