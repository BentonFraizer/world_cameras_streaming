import React, { useEffect, useState } from 'react';
import { Video } from '../../types';
import apiKey from '../../api-key';

// import MainPage from '../MainPage/MainPage';

function App(): JSX.Element {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&part=snippet&maxResults=10`
    )
      .then((response) => response.json())
      .then((data: any) => {
        // кладём массив в переменную состояния drinks
        console.log(data);

        setVideos(data);
      });
  }, []);

  return (
    <div className="main">
      <h1>Всё до сих пор работает</h1>
      <p>Hello, world!</p>
      {/* <MainPage videos={videos} /> */}
    </div>
  );
}

export default App;
