import { GuestGroup } from '@/lib/mocks/rsvp';
import { Translations } from '@/lib/translations';

type RsvpResultsProps = {
  t: Translations;
  searchResults: GuestGroup[];
  onSelectGuest: (group: GuestGroup) => void;
  onBackToSearch: () => void;
};

export default function RsvpResults({
  t,
  searchResults,
  onSelectGuest,
  onBackToSearch,
}: RsvpResultsProps) {
  return (
    <div className='space-y-6'>
      <p className='text-text font-sans text-xl mb-4'>{t.rsvp.resultsPrompt}</p>

      <div className='space-y-3'>
        {searchResults.map(group => (
          <button
            key={group.group_id}
            onClick={() => onSelectGuest(group)}
            className='w-full text-left px-6 py-4 bg-surface/10 border border-text/30 rounded-lg text-text font-sans hover:bg-surface/20 hover:border-text/50 transition-all group'
          >
            <div className='flex items-center justify-between'>
              <div>
                {/* Show group name for multi-person groups, just names for singles */}
                {group.guests.length > 1 && group.group_name !== 'None' ? (
                  <>
                    <p className='text-xl font-heading'>{group.group_name}</p>
                    <p className='text-base text-text/70 mt-1'>
                      {group.guests.map(g => g.name).join(', ')}
                    </p>
                  </>
                ) : (
                  <p className='text-xl font-heading'>{group.guests.map(g => g.name).join(', ')}</p>
                )}
              </div>
              <span className='text-text/50 group-hover:text-text group-hover:translate-x-1 transition-all'>
                →
              </span>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={onBackToSearch}
        className='text-text/70 hover:text-text font-sans text-base transition-colors'
      >
        ← Back to search
      </button>
    </div>
  );
}
