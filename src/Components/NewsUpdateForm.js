import React, { useState } from 'react';
import './NewsUpdateForm.css'

function NewsUpdateForm({ onPublish }) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [date, setDate] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      title,
      details,
      date,
    };


    fetch('http://localhost:5000/addNews', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

    console.log("On publish")

    setTitle('');
    setDetails('');
    setDate('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        News Update Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          maxLength="100"
          required
        />
      </label>
      <br />
      <label>
        News Update Details:
        <textarea
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          maxLength="500"
          required
        />
      </label>
      <br />
      <label>
        Date of Update:
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          min={new Date().toISOString().slice(0, 10)}
          required
        />
      </label>
      <br />
      <button type="submit">Publish News</button>
    </form>
  );
}

export default NewsUpdateForm;
