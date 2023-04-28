import React, { useEffect, useState } from 'react';
import { Video } from '../../types';
// import MainPage from '../MainPage/MainPage';

function App(): JSX.Element {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    gapi.load('client', () => {
      gapi.client.setApiKey('AIzaSyAiY71GWJe0d2FNWibz1jK1I9zra9Batp8');
      return gapi.client.load('youtube', 'v3', () => {
        gapi.client.youtube.videos
          .list({
            part: ['id'],
            chart: 'mostPopular',
            regionCode: 'RU',
            maxResults: 10,
          })
          .then(
            function (response) {
              // Handle the results here (response.result has the parsed body).
              console.log(response.result.items);
            },
            function (err) {
              console.error('Ошибка получения данных из API', err);
            }
          );
      });
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
