import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.scss';

export const Footer = props => {
  return (
    <section className="Footer">
      <div className="rights">
        All rights reserved
      </div>
      <nav className="nav">
        <NavLink exact to='/' className="Link" aria-label="Otwórz stronę główną" activeClassName="active">Home</NavLink>
        <NavLink exact to='/faq' className="Link" aria-label="Otwórz FAQ" activeClassName="active">Faq</NavLink>
        <NavLink exact to='/statue' className="Link" aria-label="Otwórz regulamin" activeClassName="active">Regulamin</NavLink>
        <NavLink exact to='/contact' className="Link" aria-label="Otwórz informacje kontaktowe" activeClassName="active">Kontakt</NavLink>
      </nav>
    </section>
  );
}
