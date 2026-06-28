import { PlayIcon } from 'lucide-react';
import { Button } from '../button';
import { getTrailerYoutubeUrl } from '@/lib/utils';

type WatchTrailerProps = {
  videoKey: string;
};

const WatchTrailerButton = ({ videoKey }: WatchTrailerProps) => {
  const trailerUrl = getTrailerYoutubeUrl(videoKey);

  function handleClick(trailerUrl: string) {
    window.open(trailerUrl, 'blank');
  }
  return (
    <Button onClick={() => handleClick(trailerUrl)}>
      Watch Trailer <PlayIcon />
    </Button>
  );
};

export default WatchTrailerButton;
