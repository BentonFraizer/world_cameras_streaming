import React, { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { Video } from '../../types';
import VideosList from '../VideosList/VideosList';
import Layout from '../Layout/Layout';
import apiKey from '../../api-key';

// import mockVideos from '../../mock/mock-videos';

// const KEY_WORD = '';

function App(): JSX.Element {
  const [page, setPage] = useState('home');
  const [videos, setVideos] = useState<Video[]>([]);
  const [favouriteVideos, setFavouriteVideos] = useState<Video[]>([]);
  const [query, setQuery] = useState('');

  // Получаем из API данные по необходимым видео
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}+live+camera&type=stream&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setVideos(data.items);
        }
      });
  }, [query]);

  const onAddFavoriteBtnClick = (gettedStringId: string) => {
    const favoriteVideo = videos.filter(
      (video) => gettedStringId === video.id.videoId
    );

    if (!favouriteVideos.includes(favoriteVideo[0])) {
      const newFavouriteVideos = [...favouriteVideos, favoriteVideo[0]];
      console.log('newFavouriteVideos', newFavouriteVideos);

      setFavouriteVideos(newFavouriteVideos);
    }

    console.log('favoriteVideos', favoriteVideo);
  };

  const onMenuButtonClick = (buttonText: string) => {
    setPage(buttonText);
  };

  const onChoosePlaceInputChange = (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    evt.preventDefault();
    setQuery(evt.target.value);
  };

  const debouncedOnChange = debounce(onChoosePlaceInputChange, 400);

  return (
    <Layout onClick={onMenuButtonClick} onSubmit={debouncedOnChange}>
      {page === 'home' && (
        <VideosList
          videos={videos}
          onClick={onAddFavoriteBtnClick}
          favouriteVideos={favouriteVideos}
        />
      )}

      {page === 'favourites' && (
        <VideosList
          videos={favouriteVideos}
          onClick={onAddFavoriteBtnClick}
          favouriteVideos={favouriteVideos}
        />
      )}
    </Layout>
  );
}

export default App;

// Дела
//! 1. Изменение кнопок "Добавить в избранное" на "Удалить из избранного"
//! 2. Реализовать поиск
// 3. Реализовать select с выбором количества выводимых видео
// 4. Реализовать анимированный фон (https://codepen.io/alvarotrigo/pen/gOddjdL)
// 5. Заставку на время входа на сайт
