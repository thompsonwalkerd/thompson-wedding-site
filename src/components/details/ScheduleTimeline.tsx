import Image from 'next/image';

type Activity = {
  name: string;
  time: string;
  icon: string;
};

type ScheduleTimelineProps = {
  sectionTitle: string;
  activities: Activity[];
};

export default function ScheduleTimeline({ sectionTitle, activities }: ScheduleTimelineProps) {
  return (
    <section className='animate-fade-in-delay-1'>
      <h2 className='text-3xl md:text-5xl font-heading text-heading mb-2 md:mb-4 border-b border-heading/30 pb-4 leading-tight mt-4 md:mt-8'>
        {sectionTitle}
      </h2>

      {/* Timeline Container - Desktop: center-aligned alternating, Mobile: left-aligned list */}
      <div className='max-w-3xl mx-auto py-8 px-4'>
        {/* Mobile: Left-aligned timeline layout */}
        <div className='md:hidden relative max-w-lg mx-auto'>
          {/* Vertical Line on the left */}
          <div className='absolute left-10 top-0 bottom-0 w-px bg-accent' />

          {activities.map((activity, index) => (
            <div key={index} className='relative pb-8 last:pb-0 pl-22'>
              {/* Dot on timeline - centered on vertical line, aligned with icon center */}
              <div className='absolute left-10 top-5 w-2 h-2 rounded-full bg-bg border-accent border z-10 -translate-x-1/2' />

              {/* Horizontal connector line from dot center to content */}
              <div className='absolute left-10 top-5 w-18 h-px bg-accent translate-y-1' />

              <div className='flex items-center gap-6'>
                {/* Icon */}
                <div className='shrink-0'>
                  <Image
                    src={`/schedule/${activity.icon}`}
                    alt={activity.name}
                    width={40}
                    height={40}
                    className='object-contain ml-10'
                  />
                </div>
                {/* Time and Name */}
                <div className='flex-1 -mt-1 -ml-10'>
                  <h3 className='text-xl font-bold font-heading text-text'>{activity.time}</h3>
                  <p className='text-lg font-heading text-text'>{activity.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Alternating timeline layout */}
        <div className='hidden md:block relative'>
          {/* Vertical Center Line */}
          <div className='absolute left-1/2 top-0 bottom-0 w-px bg-accent -translate-x-1/2' />

          {/* Timeline Items */}
          {activities.map((activity, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className='relative h-24'>
                {/* Dot on timeline - absolutely centered */}
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-bg border-accent border z-10' />

                {isEven ? (
                  // Left side layout: [Icon] ─ ● (line extends left from center)
                  <>
                    {/* Connector Line - extends from center to left */}
                    <div className='absolute left-1/2 top-1/2 -translate-y-1/2 w-12 h-px bg-accent origin-left -translate-x-full' />

                    {/* Icon - at the end of the connector line */}
                    <div
                      className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-full flex items-center justify-end'
                      style={{ marginLeft: '-64px', paddingRight: '8px' }}
                    >
                      <Image
                        src={`/schedule/${activity.icon}`}
                        alt={activity.name}
                        width={50}
                        height={50}
                        className='object-contain'
                      />
                    </div>

                    {/* Time and Name - Left side */}
                    <div className='absolute left-0 right-1/2 top-1/2 -translate-y-1/2 pr-35 text-right'>
                      <h3 className='text-3xl font-bold font-heading text-text'>{activity.time}</h3>
                      <p className='text-2xl font-heading text-text mt-2'>{activity.name}</p>
                    </div>
                  </>
                ) : (
                  // Right side layout: ● ─ [Icon] (line extends right from center)
                  <>
                    {/* Connector Line - extends from center to right */}
                    <div className='absolute left-1/2 top-1/2 -translate-y-1/2 w-12 h-px bg-accent origin-left' />

                    {/* Icon - at the end of the connector line */}
                    <div
                      className='absolute left-1/2 top-1/2 -translate-y-1/2 flex items-center justify-start'
                      style={{ marginLeft: '64px', paddingLeft: '8px' }}
                    >
                      <Image
                        src={`/schedule/${activity.icon}`}
                        alt={activity.name}
                        width={50}
                        height={50}
                        className='object-contain'
                      />
                    </div>

                    {/* Time and Name - Right side */}
                    <div className='absolute right-0 left-1/2 top-1/2 -translate-y-1/2 pl-35 text-left'>
                      <h3 className='text-3xl font-bold font-heading text-text'>{activity.time}</h3>
                      <p className='text-2xl font-heading text-text mt-2'>{activity.name}</p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
