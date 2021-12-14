import React from 'react';
import { show, snackbar } from '../styles/components/snackbar.module.css';

export default function Snackbar() {
  return (
    <div className={snackbar} id="sb">
      <p />
    </div>
  );
}

export function toggleSnackBar(message) {
  const sb = document.querySelector('#sb');

  sb.querySelector('p').innerHTML = message;

  sb.classList.toggle(`${show}`);
  setTimeout(() => {
    sb.classList.toggle(`${show}`);
  }, 3000);
}
