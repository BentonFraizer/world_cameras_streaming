import { Video } from '../../types';
type VideoItemProps = {
  video: Video;
  onClick?: (id: string) => void;
};

function VideoItem({ video, onClick }: VideoItemProps): JSX.Element {
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
      <button
        type="button"
        className="add-to-favourites btn btn-outline-light"
        onClick={() => (onClick ? onClick(video.id.videoId) : null)}
      >
        Add to favorites
      </button>
    </div>
  );
}

export default VideoItem;

{
  /* <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/St7aTfoIdYQ"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
/> */
}
