import Button from '@/components/ui/Button';

type HotelCardProps = {
  name: string;
  image: string;
  onToggle: () => void;
};

export default function HotelCard({ name, image, onToggle }: HotelCardProps) {
  return (
    <div className='flex flex-col rounded-md overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-text/10 w-full'>
      {/* Background image section */}
      <div
        className='w-full aspect-video bg-cover bg-center shrink-0'
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Details overlay at bottom */}
      <div className='text-text p-3 md:p-4 bg-surface/10 grow flex flex-col'>
        <h3 className='font-heading text-2xl mb-4 font-semibold'>{name}</h3>

        {/* See Details Button */}
        <div className='mt-auto mb-auto'>
          <Button as='button' variant='secondary' onClick={onToggle}>
            Details
          </Button>
        </div>
      </div>
    </div>
  );
}
