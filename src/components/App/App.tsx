import React, { useEffect, useState } from 'react';
import { Video } from '../../types';
import VideosList from '../Videos-List/Videos-List';
import apiKey from '../../api-key';
const KEY_WORD = 'санкт+пербург';

// import MainPage from '../MainPage/MainPage';

function App(): JSX.Element {
  const [videos, setVideos] = useState<Video[]>([]);

  // Получаем из API данные по необходимым видео
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${KEY_WORD}+street+live+camera&type=stream&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setVideos(data.items);
        }
      });
  }, []);

  return (
    <div className="main">
      <VideosList videos={videos} />
    </div>
  );
}

export default App;
