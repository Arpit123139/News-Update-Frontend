import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsUpdateTable.css'

function NewsUpdateTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/getNews')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  function handleDelete(id){
    console.log("id "+id)
    axios.delete(`http://localhost:5000/deleteNews/${id}`)
    .then(response => {
      alert("Successfully Deleted This news ");
      window.location.reload();
      
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
  }


  console.log(data);
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Details</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.details}</td>
            <td>{item.date}</td>
            <td> <button onClick={() => handleDelete(item._id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
      
    </table>
    <br></br>
    <br></br>
    <div class="publish"> <p class="para"><span>Total Published News Count: {data.length}</span></p> </div>
    </>
  );
}

export default NewsUpdateTable;
