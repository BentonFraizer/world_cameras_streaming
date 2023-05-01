import { Video } from '../../types';
type VideoItemProps = {
  video: Video;
  onClick?: (id: string) => void;
  favouriteVideos?: Video[];
};

function VideoItem({
  video,
  onClick,
  favouriteVideos,
}: VideoItemProps): JSX.Element {
  console.log('favouriteVideos', favouriteVideos);

  const favoriteVideosIDs: string[] = [];
  favouriteVideos?.map((favoriteVideo) =>
    favoriteVideosIDs.push(favoriteVideo.id.videoId)
  );

  const isInFavorites = favoriteVideosIDs.includes(video.id.videoId);

  console.log('favoriteVideosIDs', favoriteVideosIDs);

  return (
    <div className="video-container d-flex flex-column">
      <iframe
        data-video-id={video.id.videoId}
        src={`https://www.youtube-nocookie.com/embed/${video.id.videoId}`}
        title={video.snippet.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      {isInFavorites ? (
        <button
          type="button"
          className="add-to-favourites btn btn-outline-danger"
          onClick={() => (onClick ? onClick(video.id.videoId) : null)}
        >
          Remove from favorites
        </button>
      ) : (
        <button
          type="button"
          className="add-to-favourites btn btn-outline-success"
          onClick={() => (onClick ? onClick(video.id.videoId) : null)}
        >
          Add to favorites
        </button>
      )}
    </div>
  );
}

export default VideoItem;
