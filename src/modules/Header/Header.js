import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { FiShoppingCart, FiMenu } from 'react-icons/fi';
import './Header.scss';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
    }

    this.showNav = this.showNav.bind(this);
    this.hideNav = this.hideNav.bind(this);
  }

  showNav() {
    this.setState({showNav: true});
  }

  hideNav() {
    this.setState({showNav: false});
  }

  render() {
    return (
      <section className="Header">
        <div className="brand">
          Czyttam.pl
        </div>
        <button className="menu-btn" onClick={() => this.showNav()}>
          <FiMenu />
        </button>
        <nav className={'nav' + (this.state.showNav ? ' show' : '')}>
          <NavLink exact to='/' className="Link" activeClassName="active" onClick={() => this.hideNav()}>Home</NavLink>
          <NavLink exact to='/faq' className="Link" activeClassName="active" onClick={() => this.hideNav()}>Faq</NavLink>
          <NavLink exact to='/statue' className="Link" activeClassName="active" onClick={() => this.hideNav()}>Regulamin</NavLink>
          <NavLink exact to='/contact' className="Link" activeClassName="active" onClick={() => this.hideNav()}>Kontakt</NavLink>
          <NavLink exact to='/cart' className="Link icon" activeClassName="active" onClick={() => this.hideNav()}>
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
