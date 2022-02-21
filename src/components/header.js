import { Link } from 'gatsby';
import React from 'react';
import create from '../assets/create.svg';
import { active, header } from '../styles/components/header.module.css';

export default function Header() {
  return (
    <header className={header}>
      <Link to="/">
        <h1>Shafi</h1>
      </Link>
      <nav>
        <Link activeClassName={active} to="/">
          Home
        </Link>
        <Link to="/blog" activeClassName={active} partiallyActive>
          Blog
        </Link>
        <Link activeClassName={active} to="/works">
          Works
        </Link>
        <Link activeClassName={active} to="/contact">
          Contact
        </Link>
        <Link to="/admin/" title="Create New Blog Post">
          <img src={create} alt="" />
        </Link>
      </nav>
    </header>
  );
}
