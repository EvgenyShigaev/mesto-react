import React from 'react';

export default function Card({ card, onCardClick }) {
  const handleClick = () => onCardClick(card);

  return (
    <li className="element">
      <button className="element__delete-button" type="button"></button>
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="element__container">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__counter-box">
          <button className="element__like" type="button" aria-label="Лайк"></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}