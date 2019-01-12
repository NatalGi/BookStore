import React from 'react';
import { NavLink } from 'react-router-dom';

import { FiShoppingCart } from 'react-icons/fi';
import './Header.scss';

export const Header = props => {
  return (
    <section className="Header">
      <div className="Brand">
        Czyttam.pl
      </div>
      <nav className="Nav">
        <NavLink exact to='/' className="Link" activeClassName="active">Home</NavLink>
        <NavLink exact to='/faq' className="Link" activeClassName="active">Faq</NavLink>
        <NavLink exact to='/statue' className="Link" activeClassName="active">Regulamin</NavLink>
        <NavLink exact to='/contact' className="Link" activeClassName="active">Kontakt</NavLink>
        <NavLink exact to='/cart' className="Link icon" activeClassName="active">{<FiShoppingCart />}</NavLink>
      </nav>
    </section>
  );
}
