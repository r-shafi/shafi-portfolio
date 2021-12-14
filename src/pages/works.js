import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import { projectCard, works } from '../styles/pages/work.module.css';

const links = [
  {
    title: 'Progress Steps',
    link: 'https://modest-villani-d0e72a.netlify.app/progress-steps/index.html',
  },
  {
    title: 'Hidden Navigation',
    link: 'https://modest-villani-d0e72a.netlify.app/rotating-navigation/index.html',
  },
  {
    title: 'CSS Spinner Loading',
    link: 'https://modest-villani-d0e72a.netlify.app/css-spinner/index.html',
  },
  {
    title: 'Hidden Search Input',
    link: 'https://modest-villani-d0e72a.netlify.app/hidden-search-input/index.html',
  },
  {
    title: 'Blurry Loading',
    link: 'https://modest-villani-d0e72a.netlify.app/blurry-loading/index.html',
  },
  {
    title: 'CSS Bouncing Balls Loading',
    link: 'https://modest-villani-d0e72a.netlify.app/css-bouncing-balls/index.html',
  },
  {
    title: 'Face Detection (Experimental)',
    link: 'https://modest-villani-d0e72a.netlify.app/face-detection/index.html',
  },
  {
    title: 'Custom Video Controls',
    link: 'https://modest-villani-d0e72a.netlify.app/video-controls/index.html',
  },
  {
    title: 'Slide in on Scroll',
    link: 'https://modest-villani-d0e72a.netlify.app/scroll-animation/index.html',
  },
  {
    title: 'Expand on Hover',
    link: 'https://modest-villani-d0e72a.netlify.app/expanding-cards/index.html',
  },
  {
    title: 'Clock',
    link: 'https://modest-villani-d0e72a.netlify.app/clock/index.html',
  },
  {
    title: 'Form Validation',
    link:
      'https://modest-villani-d0e72a.netlify.app/form-validation/index.html',
  },
  {
    title: 'Guitar',
    link: 'https://modest-villani-d0e72a.netlify.app/guitar/index.html',
  },
  {
    title: 'Memory Card Game',
    link:
      'https://modest-villani-d0e72a.netlify.app/memory-card-game/index.html',
  },
  {
    title: 'Notes',
    link: 'https://modest-villani-d0e72a.netlify.app/notes/index.html',
  },
  {
    title: 'Photo Gallery',
    link: 'https://modest-villani-d0e72a.netlify.app/photo-gallery/index.html',
  },
  {
    title: 'Popup',
    link: 'https://modest-villani-d0e72a.netlify.app/popup/index.html',
  },
  {
    title: 'Progress Bar',
    link: 'https://modest-villani-d0e72a.netlify.app/progress-bar/index.html',
  },
  {
    title: 'Quiz',
    link: 'https://modest-villani-d0e72a.netlify.app/quiz/index.html',
  },
  {
    title: 'Todo List',
    link: 'https://modest-villani-d0e72a.netlify.app/todo-list/index.html',
  },
];

export default function Works() {
  return (
    <Layout>
      <Head title="Works" description="Works and Projects by Shafi Rayhan" />
      <div className={works}>
        {links.map((obj, i) => (
          <a className={projectCard} href={obj.link} key={i} target="_blank" rel="noreferrer">
            {obj.title}
          </a>
        ))}
      </div>
    </Layout>
  );
}
