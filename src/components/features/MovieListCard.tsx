import { Star } from 'lucide-react';
import WatchTrailerButton from '../ui/app-ui/WatchTrailerButton';
import FavoriteButton from '../ui/app-ui/FavoriteButton';
// import { useMovieStore } from '@/store/useMovieStore';
import type { MovieFullDetails } from '@/types/movie';

type MovieListCardProps = {
  posterUrl: string;
  // title: string;
  // rating: number;
  // overview: string;
  // videoKey: string | undefined;
  data: MovieFullDetails;
};

const MovieListCard = ({
  posterUrl,
  data,
  // title,
  // overview,
  // rating,
  // videoKey,
}: MovieListCardProps) => {
  // const favorite = useMovieStore((state) => state.favorite);
  // const addFavorite = useMovieStore((state) => state.addFavorite);
  // const removeFavorite = useMovieStore(state => state.removeFavorite)

  // const isFavorite = favorite.some(
  //   (movie) => movie.detail.id === data.detail.id
  // );
  return (
    <div className='grid grid-cols-[auto_1fr_auto] gap-x-xl gap-y-3xl lg:gap-x-3xl pb-4xl lg:pb-6xl'>
      {/* grid 1 */}
      <div className='max-w-26 rounded-md lg:max-w-45.5 lg:rounded-xl overflow-hidden lg:row-span-2 lg:order-1'>
        <img src={posterUrl} alt={`${data.detail.title} image`} />
      </div>

      {/* grid 2 */}
      <div className='col-span-2 flex flex-col gap-xs lg:gap-lg lg:col-span-1 lg:max-w-193 lg:order-2'>
        <p className='font-bold text-md lg:text-display-xl'>
          {data.detail.title}
        </p>
        <div className='flex gap-xs items-center'>
          <Star className='fill-[#E4A802] text-[#E4A802]' />
          <p>{data.detail.vote_average.toFixed(1)}/10</p>
        </div>
        <p className='text-sm text-neutral-400 lg:text-md line-clamp-2'>
          {data.detail.overview}
        </p>
      </div>

      {/* grid 3 */}
      <div className='col-span-2 lg:col-span-1 lg:max-w-50 lg:order-4'>
        {data.videoKey && <WatchTrailerButton videoKey={data.videoKey} />}
      </div>

      {/* grid 4 */}
      <div className='col-span-1 lg:order-3'>
        <FavoriteButton data={data} />
      </div>
    </div>
  );
};

export default MovieListCard;
