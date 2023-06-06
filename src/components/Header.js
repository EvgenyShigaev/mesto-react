import React from 'react';
import headerLogo from '../images/logo.svg';

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип &quot;Место Россия&quot;" />
    </header>
  )
}