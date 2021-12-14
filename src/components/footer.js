import React from 'react';
import facebook from '../assets/facebook.svg';
import github from '../assets/github.svg';
import ig from '../assets/ig.svg';
import twitter from '../assets/twitter.svg';
import { footer, social } from '../styles/components/footer.module.css';


const links = [
  {
    image: github,
    link: 'https://github.com/r-shafi',
  },
  {
    image: twitter,
    link: 'https://twitter.com/shafiemoji',
  },
  {
    image: facebook,
    link: 'https://www.facebook.com/shafiemoji',
  },
  {
    image: ig,
    link: 'https://www.instagram.com/shafiemoji',
  },
];

export default function Footer() {
  return (
    <footer className={footer}>
      <p>&copy; {new Date().getFullYear()}</p>
      <div className={social}>
        {links.map((obj, i) => (
          <a href={obj.link} key={i} rel="noreferrer" target="_blank">
            <img src={obj.image} alt="" />
          </a>
        ))}
      </div>
    </footer>
  );
}
