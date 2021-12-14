import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import {
  form, formContainer, hero, invalidMessage, page
} from '../styles/pages/contact.module.css';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, name, message } = this.state;
    if (!validateEmail(email)) {
      // todo: add error message
      document.querySelector('#invalid').style.display = 'block';
      setTimeout(() => {
        document.querySelector('#invalid').style.display = 'none';
      }, 5000);
    } else {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('name', name);
      formData.append('message', message);

      fetch('https://getform.io/f/41699d4b-d123-4239-929b-5612601d261f', {
        method: 'POST',
        body: formData,
      })
      // todo: add success/failure message
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className={formContainer}>
        <h2>Contact</h2>
        <form
          name="contact"
          method="POST"
          action="google.com"
          onSubmit={this.handleSubmit}
          className={form}
        >

          <label htmlFor="name">
            Name:
          </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              onChange={this.handleChange}
              value={name}
            />

          <label htmlFor="email">
            Email:
          </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              onChange={this.handleChange}
              value={email}
            />

          <p id="invalid" className={invalidMessage}>Invalid Email!</p>

          <label htmlFor="message">
            Message:
          </label>
            <textarea
              required
              id="message"
              name="message"
              onChange={this.handleChange}
              value={message}
            />

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

const links = [
  {
    link: 'https://www.github.com/r-shafi',
  },
  {
    link: 'https://www.twitter.com/shafiemoji',
  },
  {
    link: 'https://www.facebook.com/shafiemoji',
  },
  {
    link: 'https://www.instagram.com/shafiemoji',
  },
];

export default function ContactPage() {
  return (
    <Layout>
      <Head title="Contact" description="Contact Shafi Rayhan." />
      <div className={page}>
        <div className={hero}>
          {links.map((obj, i) => (
            <a href={obj.link} key={i} rel="noreferrer" target="_blank">
              {obj.link.split('//www.')[1]}
            </a>
          ))}
        </div>
        <Form />
      </div>
    </Layout>
  );
}
