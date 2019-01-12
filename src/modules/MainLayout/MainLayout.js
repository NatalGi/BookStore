import React, { Component } from 'react';
import { Header } from '../Header/Header';
import styles from './MainLayout.scss';

export class MainLayout extends Component {
  render() {
    return (
      <div className="MainContainer">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
