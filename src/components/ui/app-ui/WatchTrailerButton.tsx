import { PlayIcon } from 'lucide-react';
import { Button } from '../button';

type WatchTrailerProps = {
  videoKey: string;
};

const WatchTrailer = ({ videoKey }: WatchTrailerProps) => {
  const baseYoutubeUrl = import.meta.env.VITE_YOUTUBE_BASE_URL;
  const trailerUrl = `${baseYoutubeUrl}${videoKey}`;

  function handleClick(trailerUrl: string) {
    window.open(trailerUrl, 'blank');
  }
  return (
    <Button onClick={() => handleClick(trailerUrl)}>
      Watch Trailer <PlayIcon />
    </Button>
  );
};

export default WatchTrailer;
