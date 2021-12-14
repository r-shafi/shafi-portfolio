import { Link } from 'gatsby';
import React from 'react';
import { header } from '../styles/components/header.module.css';

export default function Header() {
  return (
    <header className={header}>
        <Link to="/">
          <h1>Shafi</h1>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/works">Works</Link>
          <Link to="/contact">Contact</Link>
        </nav>
    </header>
  );
}
