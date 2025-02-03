'use client'; // Mark this as a Client Component since it uses React hooks

import { useState } from 'react';
import styles from './Form.module.css'; // Import CSS module

export default function Home() {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    phone: '',
    subject: '',
    resume: '',
    url: '',
    about: '',
  });

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values); // Replace with API call if needed
  };

  const resetFunction = () => {
    setValues({
      firstname: '',
      lastname: '',
      email: '',
      gender: '',
      phone: '',
      subject: '',
      resume: '',
      url: '',
      about: '',
    });
  };

  return (
    <div className={styles.container}>
      <h1>Form in Next.js</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name*</label>
        <input
          type="text"
          placeholder="Enter your first name"
          name="firstname"
          onChange={handleChanges}
          required
          value={values.firstname}
        />

        <label htmlFor="lastName">Last Name*</label>
        <input
          type="text"
          placeholder="Enter your last name"
          name="lastname"
          onChange={handleChanges}
          required
          value={values.lastname}
        />

        <label htmlFor="email">Email*</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleChanges}
          required
          value={values.email}
        />

        <label htmlFor="phone">Phone*</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          name="phone"
          onChange={handleChanges}
          required
          value={values.phone}
        />

        <label htmlFor="gender">Gender</label>
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChanges}
            checked={values.gender === 'Male'}
          />{' '}
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChanges}
            checked={values.gender === 'Female'}
          />{' '}
          Female
        </div>

        <label htmlFor="subject">Subject</label>
        <select
          name="subject"
          id="subject"
          onChange={handleChanges}
          value={values.subject}
        >
          <option value="dev">Development</option>
          <option value="net">Networking</option>
          <option value="ds">Data Science</option>
          <option value="ai">Artificial Intelligence</option>
          <option value="other">Other..</option>
        </select>

        <label htmlFor="resume">Resume</label>
        <input
          type="file"
          name="resume"
          onChange={handleChanges}
          value={values.resume}
        />

        <label htmlFor="url">Your Website</label>
        <input
          type="url"
          name="url"
          placeholder="Enter Your URL"
          onChange={handleChanges}
          value={values.url}
        />

        <label htmlFor="about">About</label>
        <textarea
          name="about"
          id="about"
          cols={30}
          rows={10}
          placeholder="Describe Yourself"
          onChange={handleChanges}
          value={values.about}
        ></textarea>

        <button type="button" onClick={resetFunction}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}