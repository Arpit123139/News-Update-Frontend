import React, { useState, useEffect } from 'react';
import './NewsUpdates.css'
function NewsUpdates() {
  const [newsUpdates, setNewsUpdates] = useState([]);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/getNews')
      .then(res => res.json())
      .then(data => setNewsUpdates(data))
      .catch(err => console.error(err));

    const intervalId = setInterval(() => {
      const now = new Date();
      const options = { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      };
      setCurrentTime(now.toLocaleString('en-US', options));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1 class="heading">Latest News Updates</h1>
      <table>
        <thead>
          <tr>
            <th>News Update Title</th>
            <th>News Update Details</th>
            <th>Date of Update</th>
          </tr>
        </thead>
        <tbody>
          {newsUpdates.map(newsUpdate => (
            <tr key={newsUpdate.id}>
              <td>{newsUpdate.title}</td>
              <td>{newsUpdate.details}</td>
              <td>{newsUpdate.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Current Time: {currentTime}</p>
    </div>
  );
}

export default NewsUpdates;
