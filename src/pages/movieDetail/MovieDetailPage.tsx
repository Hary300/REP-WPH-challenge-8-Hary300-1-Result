import MainLayout from '@/components/layouts/MainLayout';
// import HeroSection from './sections/HeroSection';
import OverviewSection from './sections/OverviewSection';
// import CastSection from './sections/CastSection';
import Container from '@/components/layouts/Container';
import { useMovieFullDetails } from '@/hooks/useMovies';
import { useParams } from 'react-router-dom';

console.log('MovieDetailPage loaded');

const MovieDetailPage = () => {
  const { id } = useParams();
  console.log('id dari params:', id); // cek apakah id terbaca
  console.log('Number(id):', Number(id)); // cek apakah jadi NaN

  const { data, isLoading, error } = useMovieFullDetails(Number(id));
  console.log('data:', data, 'isLoading:', isLoading, 'error:', error);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!data) return null;
  return (
    <MainLayout>
      <Container>
        <h2>Detail</h2>
        <main>
          {/* <HeroSection /> */}
          <OverviewSection overview={data?.detail.overview} />
          {/* <CastSection /> */}
        </main>
      </Container>
    </MainLayout>
  );
};

export default MovieDetailPage;
