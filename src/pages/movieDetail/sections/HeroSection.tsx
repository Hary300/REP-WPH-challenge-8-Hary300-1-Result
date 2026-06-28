import MovieDetailGrid from '@/components/features/MovieDetailGrid';
import Container from '@/components/layouts/Container';
import FadeOverlay from '@/components/ui/app-ui/FadeOverlay';
import { statsConfig } from '@/config/stats.config';
import { IMAGE_SIZES } from '@/lib/constants';
import { getFormattedDate, getImageUrl } from '@/lib/utils';
import type { MovieDetailResponse } from '@/types/movie';

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

  const statsValue = {
    rating: detail.vote_average,
    genre: genre,
    ageLimit: ageLimit,
  };

  const stats = statsConfig.map((item) => ({
    ...item,
    value: statsValue[item.key],
  }));

  return (
    <section id='hero-detail-page'>
      <div className='relative w-full h-98 lg:h-202.5 -z-1'>
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
      <Container>
        <MovieDetailGrid
          detail={detail}
          formattedDate={formattedDate}
          posterImageUrl={posterImageUrl}
          videoKey={videoKey}
          stats={stats}
        />
      </Container>
    </section>
  );
};

export default HeroSection;
