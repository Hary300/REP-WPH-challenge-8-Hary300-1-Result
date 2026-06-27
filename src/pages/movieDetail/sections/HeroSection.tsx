import FadeOverlay from '@/components/ui/app-ui/FadeOverlay';
import FavoriteButton from '@/components/ui/app-ui/FavoriteButton';
import WatchTrailer from '@/components/ui/app-ui/WatchTrailerButton';
import { IMAGE_SIZES } from '@/lib/constants';
import {
  getFormattedDate,
  getImageUrl,
  getTrailerYoutubeUrl,
} from '@/lib/utils';
import type { MovieDetailResponse } from '@/types/movie';
import { Calendar1Icon } from 'lucide-react';

type HeroSectionProps = {
  detail: MovieDetailResponse;
  genre: string;
  ageLimit: string;
  videoKey: string;
};
const HeroSection = ({
  detail,
  genre,
  ageLimit,
  videoKey,
}: HeroSectionProps) => {
  const backdropSize = IMAGE_SIZES.backdrop.medium;
  const posterSize = IMAGE_SIZES.poster.medium;
  const backdropPath = detail.backdrop_path;
  const posterPath = detail.poster_path;
  if (!backdropPath) return null;
  if (!posterPath) return null;
  const backdropImageUrl = getImageUrl(backdropPath, backdropSize);
  const posterImageUrl = getImageUrl(posterPath, posterSize);
  const formattedDate = getFormattedDate(detail.release_date);
  return (
    <section id='hero-detail-page'>
      <div className='relative w-full h-98 lg:h-auto -z-1'>
        <img
          src={backdropImageUrl}
          alt={`${detail.title} image`}
          className='size-full object-cover object-center'
        />
        <FadeOverlay
          position='bottom'
          className='h-55.25 lg:h-auto lg:inset-y-0'
        />
      </div>
      <div className='grid grid-cols-[auto_1fr] px-xl gap-x-xl gap-y-3xl'>
        <div className='max-w-29 rounded-xl overflow-hidden lg:max-w-65'>
          <img src={posterImageUrl} alt={`${detail.title} poster`} />
        </div>
        <div className='flex flex-col gap-xs lg:gap-4xl'>
          <p className='font-bold text-xl lg:text-display-xl'>{detail.title}</p>
          <p className='flex text-sm gap-xs items-center lg:text-md'>
            <Calendar1Icon />
            {formattedDate}
          </p>
        </div>
        <div className='flex gap-xl col-span-2 items-center'>
          <WatchTrailer videoKey={videoKey} />
          <FavoriteButton />
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
