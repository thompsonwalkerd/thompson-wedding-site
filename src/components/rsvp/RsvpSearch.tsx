import { Translations } from '@/lib/translations';

type RsvpSearchProps = {
  t: Translations;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearching: boolean;
  searchError: string;
  onSearch: (e: React.FormEvent) => void;
};

export default function RsvpSearch({
  t,
  searchQuery,
  setSearchQuery,
  isSearching,
  searchError,
  onSearch,
}: RsvpSearchProps) {
  return (
    <div className='space-y-6'>
      <p className='text-wedding-cream font-sans text-xl'>{t.rsvp.searchPrompt}</p>

      <form onSubmit={onSearch} className='space-y-4'>
        <input
          type='text'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={t.rsvp.searchPlaceholder}
          className='w-full px-4 py-3 bg-wedding-cream/10 border border-wedding-cream/30 rounded-lg text-wedding-cream placeholder:text-wedding-cream/50 font-sans focus:outline-none focus:border-wedding-cream/60'
          disabled={isSearching}
        />

        {searchError && <p className='text-red-400 font-sans text-base'>{searchError}</p>}

        <button
          type='submit'
          disabled={isSearching || !searchQuery.trim()}
          className='w-full px-6 py-3 bg-wedding-cream text-wedding-black font-sans rounded-lg hover:bg-wedding-cream/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isSearching ? t.rsvp.searching : t.rsvp.searchButton}
        </button>
      </form>
    </div>
  );
}
