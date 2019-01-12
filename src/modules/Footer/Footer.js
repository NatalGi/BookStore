import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.scss';

export const Footer = props => {
  return (
    <section className="Footer">
      <div className="Rights">
        All rights reserved
      </div>
      <nav className="Nav">
        <NavLink exact to='/' className="Link" activeClassName="active">Home</NavLink>
        <NavLink exact to='/faq' className="Link" activeClassName="active">Faq</NavLink>
        <NavLink exact to='/statue' className="Link" activeClassName="active">Regulamin</NavLink>
        <NavLink exact to='/contact' className="Link" activeClassName="active">Kontakt</NavLink>
      </nav>
    </section>
  );
}
