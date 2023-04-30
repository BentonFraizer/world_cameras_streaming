import VideoItem from '../Video-Item/VideoItem';
import { Video } from '../../types';

type VideoItemProps = {
  videos: Video[];
};

function VideosList({ videos }: VideoItemProps) {
  return (
    <div className="videos">
      {videos.map((video) => (
        <VideoItem key={video.id.videoId} video={video} />
      ))}
    </div>
  );
}

export default VideosList;
