'use strict';

import styles from './App.css';

import React, { Component } from 'react';

import { Header } from '../components';

class App extends Component {
  render() {
    let { children } = this.props;

    let title = 'Universal React + Redux Boilerplate';
    let navLinks = [
      { to: '/', text: 'Home', onlyActiveOnIndex: true },
      { to: '/blog', text: 'Blog' }
    ];

    return (
      <div className={styles.container}>
        <Header title={title} navLinks={navLinks} />
        {children}
      </div>
    );
  }
}

export default App;
