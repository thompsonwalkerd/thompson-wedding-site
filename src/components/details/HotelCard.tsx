type HotelCardProps = {
  name: string;
  details: string;
  image: string;
};

export default function HotelCard({ name, details, image }: HotelCardProps) {
  return (
    <div className='flex flex-col rounded-md overflow-hidden transition-all hover:shadow-lg hover:shadow-text/10 w-full'>
      {/* Background image section */}
      <div
        className='w-full aspect-video bg-cover bg-center shrink-0'
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Details overlay at bottom */}
      <div className='text-text p-3 md:p-4 bg-surface/10 grow flex flex-col'>
        <h3 className='font-heading text-xl md:text-2xl mb-2 md:mb-3 font-semibold'>{name}</h3>
        <p className='text-sm md:text-base font-light grow'>{details}</p>
      </div>
    </div>
  );
}
