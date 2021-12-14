import React from 'react';
import { container, content } from '../styles/components/layout.module.css';
import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
  return (
    <div className={container}>
        <Header />
        <div className={content}>{children}</div>
        <Footer />
    </div>
  );
}
