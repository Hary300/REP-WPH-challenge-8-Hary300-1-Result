import { HeartIcon } from 'lucide-react';
import { Button } from '../button';

const FavoriteButton = () => {
  return (
    <Button className='size-11 lg:size-13 rounded-full border bg-neutral-950/60 flex justify-center items-center shrink-0 cursor-pointer'>
      <HeartIcon className='size-6 text-neutral-400' />
    </Button>
  );
};

export default FavoriteButton;
