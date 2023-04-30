import VideoItem from '../VideoItem/VideoItem';
import { Video } from '../../types';

type VideoItemProps = {
  videos: Video[];
  onClick: (id: string) => void;
};

function VideosList({ videos, onClick }: VideoItemProps): JSX.Element {
  return (
    <div className="videos">
      {videos.map((video) => (
        <VideoItem key={video.id.videoId} video={video} onClick={onClick} />
      ))}
    </div>
  );
}

export default VideosList;
