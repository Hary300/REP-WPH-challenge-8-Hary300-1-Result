// import { useMovieFullDetails, useTrendingMovies } from '@/hooks/useMovies';
import MovieListCard from './MovieListCard';
import { getImageUrl } from '@/lib/utils';
import { IMAGE_SIZES } from '@/lib/constants';
import { useMovieStore } from '@/store/useMovieStore';
import clapperBoard from '@/assets/clapper-board-data-empty-image.svg';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const MovieList = () => {
  const favorite = useMovieStore((state) => state.favorite);

  const navigate = useNavigate();
  function handleExploreMovieClick() {
    navigate('/');
  }

  const size = IMAGE_SIZES.poster.medium;
  if (favorite.length === 0)
    return (
      <div className='flex items-center justify-center h-152'>
        <div className='w-full flex flex-col items-center'>
          <div className='flex mb-lg'>
            <img src={clapperBoard} alt='clapperboard image' className='' />
          </div>
          <div className='flex flex-col gap-md mb-3xl'>
            <p className='font-semibold text-md text-center'>Data Empty</p>
            <p className='text-sm text-neutral-400'>
              You don't have a favorite movie yet
            </p>
          </div>
          <div className='w-full max-w-50 lg:max-w-75'>
            <Button onClick={handleExploreMovieClick}>Explore Movie</Button>
          </div>
        </div>
      </div>
    );

  return (
    <div className='flex flex-col gap-4xl lg:gap-6xl min-h-152 divide-y'>
      {favorite.map((movie) => {
        const posterPath = movie.detail.poster_path;
        if (!posterPath) return null;
        const posterUrl = getImageUrl(posterPath, size);
        return (
          <MovieListCard
            key={movie.detail.id}
            posterUrl={posterUrl}
            data={movie}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
