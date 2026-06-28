import MovieList from '@/components/features/MovieList';
import Container from '@/components/layouts/Container';
import MainLayout from '@/components/layouts/MainLayout';

const FavoritePage = () => {
  return (
    <MainLayout position='sticky'>
      <section id='favorite-list'>
        <Container className='pt-3xl pb-19.25 lg:pt-7xl lg:pb-41.5 '>
          <h1 className='font-bold text-display-xs lg:text-display-lg mb-4xl lg:mb-6xl'>
            Favorite
          </h1>
          <MovieList />
        </Container>
      </section>
    </MainLayout>
  );
};

export default FavoritePage;
