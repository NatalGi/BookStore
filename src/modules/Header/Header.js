import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import toggleBodyScroll from '../../util/toggleBodyScroll';

import { FiShoppingCart, FiMenu } from 'react-icons/fi';
import './Header.scss';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
    }

    this.toggleNav = this.toggleNav.bind(this);
    //this.hideNav = this.hideNav.bind(this);
  }

  toggleNav(showNav) {
    toggleBodyScroll();
    this.setState({showNav,});
  }

  /*hideNav() {
    toggleBodyScroll();
    this.setState({showNav: false});
  }*/

  render() {
    return (
      <section className="Header">
        <div className="brand">
          Czyttam.pl
        </div>
        <button className="menu-btn" aria-label="Pokaż menu" onClick={() => this.toggleNav(true)}>
          <FiMenu />
        </button>
        <nav className={'nav' + (this.state.showNav ? ' show' : '')}>
          <NavLink exact to='/' className="Link" aria-label="Otwórz stronę główną" activeClassName="active" onClick={() => this.toggleNav(false)}>Home</NavLink>
          <NavLink exact to='/faq' className="Link" aria-label="Otwórz FAQ" activeClassName="active" onClick={() => this.toggleNav(false)}>Faq</NavLink>
          <NavLink exact to='/statue' className="Link" aria-label="Otwórz regulamin" activeClassName="active" onClick={() => this.toggleNav(false)}>Regulamin</NavLink>
          <NavLink exact to='/contact' className="Link" aria-label="Otwórz informacje kontaktowe" activeClassName="active" onClick={() => this.toggleNav(false)}>Kontakt</NavLink>
          <NavLink exact to='/cart' className="Link icon" aria-label="Otwórz koszyk" activeClassName="active" onClick={() => this.toggleNav(false)}>
            {<FiShoppingCart />}
            {this.props.productsInCart > 0 ?
              <div className="products-in-cart">{this.props.productsInCart}</div>
              : ""
            }
          </NavLink>

        </nav>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsInCart: Object.values(state.cart.products).length,
  }
}

export default connect(mapStateToProps)(Header);
