import VideoItem from '../VideoItem/VideoItem';
import { Video } from '../../types';

type VideoItemProps = {
  videos: Video[];
  onClick: (id: string) => void;
  favouriteVideos?: Video[];
};

function VideosList({
  videos,
  onClick,
  favouriteVideos,
}: VideoItemProps): JSX.Element {
  return (
    <div className="videos">
      {videos.map((video) => (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onClick={onClick}
          favouriteVideos={favouriteVideos}
        />
      ))}
    </div>
  );
}

export default VideosList;
