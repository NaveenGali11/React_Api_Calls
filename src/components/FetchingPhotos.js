import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchingPhotos = () => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        console.log(res);
        setPhoto(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div>
      Fetching Photos
      <ul>
        {photo.map(pics => (
          <li key={pics.id}>
            <h2> {pics.albumId}</h2>
            <br />
            <a href={pics.url}> {pics.title}</a>
            <img src={pics.thumbnailUrl} alt={pics.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchingPhotos;
