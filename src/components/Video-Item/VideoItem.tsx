import { Video } from '../../types';
type VideoItemProps = {
  video: Video;
};

function VideoItem({ video }: VideoItemProps) {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube-nocookie.com/embed/${video.id.videoId}`}
      title={video.snippet.title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
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
