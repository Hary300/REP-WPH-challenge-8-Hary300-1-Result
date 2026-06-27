type OverviewSectionProps = {
  overview: string;
};

const OverviewSection = ({ overview }: OverviewSectionProps) => {
  return (
    <section id='overview-detail-page' className='flex flex-col lg:gap-md'>
      <h2 className='font-bold text-xl lg:text-display-md'>Overview</h2>
      <p className='text-sm text-neutral-400 lg:text-md'>{overview}</p>
    </section>
  );
};

export default OverviewSection;
