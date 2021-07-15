/* eslint-disable no-console */
import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';

function FetchingAlbums() {
  const [Albums, setAlbums] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/albums')
      .then(res => {
        console.log(res.data);
        setAlbums(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <Container fluid style={{ background: 'grey' }}>
      <h2>FetchingAlbums</h2>
      <hr typeof="dashed" />
      {Albums.map(Album => (
        <Card body key={Album.id} style={{ margin: '10px' }}>
          {Album.title}
        </Card>
      ))}
    </Container>
  );
}

export default memo(FetchingAlbums);
