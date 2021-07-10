/* eslint-disable */

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchingPhotos = () => {
  const [photo, setPhoto] = useState([]);
  const [photoId, setPhotoId] = useState(1);
  const [photoIdFromBtn, setPhotoIdFromBtn] = useState(1);

  const HandleClick = () => {
    setPhotoIdFromBtn(photoId);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${photoIdFromBtn}`)
      .then(res => {
        console.log(res);
        setPhoto(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [photoIdFromBtn]);

  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      HandleClick;
    }
  };

  return (
    <div>
      <h2 style={{ paddingTop: '20px' }}>Fetching Photos</h2>
      <input
        type="text"
        value={photoId}
        onChange={event => setPhotoId(event.target.value)}
      />
      {/*onClick={HandleClick}*/}
      <button type="button" onKeyPress={handleKeyPress}>
        Fetch Photo
      </button>
      <h2>{photo.title}</h2>
      <img src={photo.thumbnailUrl} alt={photo.title} />
      {/* <ul style={{ listStyle: 'none' }}>*/}
      {/*    {photo.map(pics => (*/}
      {/*      <li key={pics.id}>*/}
      {/*        <h2> {pics.albumId}</h2>*/}
      {/*       <br />*/}
      {/*       <a href={pics.url}> {pics.title}</a>*/}
      {/*       <img src={pics.thumbnailUrl} alt={pics.title} />*/}
      {/*     </li>*/}
      {/*   ))}*/}
      {/* </ul>*/}
    </div>
  );
};

export default FetchingPhotos;
