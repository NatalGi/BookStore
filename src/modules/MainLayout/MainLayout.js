import React, { Component } from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import './MainLayout.scss';

export class MainLayout extends Component {
  render() {
    return (
      <div className="MainContainer">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
