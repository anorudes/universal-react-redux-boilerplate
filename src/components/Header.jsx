'use strict';

import styles from './Header.css';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Nav from './Nav';

const Header = ({ title, navLinks }) => (
  <header className={styles.Header}>
    <Link to="/">{title}</Link>
    <Nav links={navLinks} />
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  navLinks: PropTypes.array.isRequired
};

export default Header;
