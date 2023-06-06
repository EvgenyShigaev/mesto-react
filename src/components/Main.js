import React from 'react';
import Card from './Card';
import { api } from '../utils/Api';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [userName, setUserName] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserData()])
      .then(([initialCards, user]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  })

  const cardElements = cards.map((card) => (
    <Card card={card} onCardClick={onCardClick} key={card._id} />
  ));

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          <button className="profile__avatar-button" type="button" onClick={onEditAvatar}></button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" aria-label="Редактирование профиля" onClick={onEditProfile}></button>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавлене элементов" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__container">{cardElements}</ul>
      </section>
    </main>
  )
}