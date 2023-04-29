import React, { useEffect } from 'react';

function NewsUpdateDetails({ title, details, date }) {

    const postData = { title: title, details:details,date:date };
    console.log(postData)

    useEffect(()=>{
        fetch('http://localhost:5000/addNews', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    },{})
    

}

export default NewsUpdateDetails;
