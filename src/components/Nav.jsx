'use strict';

import styles from './Nav.css';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Nav = ({ links }) => (
  <nav className={styles.Nav}>
    <ul>
      {links.map(({ to, text, onlyActiveOnIndex = false }, i) => (
        <li key={i}>
          <Link to={to} onlyActiveOnIndex={onlyActiveOnIndex} activeClassName="is-active">{text}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

Nav.propTypes = {
  links: PropTypes.array.isRequired
};

export default Nav;
