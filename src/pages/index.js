import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import { almostHidden, anchor, container } from '../styles/pages/index.module.css';

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <div className={container}>
        <h1>Hi, I am Shafi Rayhan!</h1>
        <p>I'm an experienced Web Developer from Sylhet, Bangladesh. <br />
          I was introduced to programming in 2019 but had to let go because of my study.
          But then COVID-19 came and I decided to try it again, and I've been trying ever since.
        </p>
        <p>
          I started building websites with the core web technologies like HTML, CSS, JavaScript.
          Later on, I learned React and Gatsby and built some cool stuff. <br /> After a while, I decided to apply for a job as a Web Developer and to my surprise, I got a job at <a href="https://www.arrowsoft.co/">Arrowsoft</a>.
          There I got to learn some more awesome technologies including but not limited to Angular, NodeJS, Ionic, etc.
        </p>
        <p>I recently graduated as a Power Engineer and Automobile Engineer!</p>
        <p className={almostHidden}>They say I'm caught up in a dream.</p>
        <a className={anchor} href="mailto:rayhanshafi7@gmail.com">Contact Me</a>
      </div>
    </Layout>
  );
}
