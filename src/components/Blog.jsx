'use strict';

import styles from './Blog.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../actions/articles';
import { Nav } from '../components';

const mapStateToProps = (state) => ({
  articles: state.articles
});

class Blog extends Component {
  static onEnter({ dispatch }) {
    dispatch(fetchArticles());
  }
  render() {
    let { articles, children } = this.props;

    let links = Object.keys(articles).map((key) => {
      let { slug, title } = articles[key];
      return {
        to: `/blog/${slug}`,
        text: title
      };
    });

    return (
      <div className={styles.Blog}>
        <aside className={styles.overview}>
          <h1>Articles:</h1>
          <Nav links={links} />
        </aside>
        <main className={styles.article}>
          {children}
        </main>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Blog);
