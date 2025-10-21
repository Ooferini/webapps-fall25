import EventCardList from '../components/EventCardList';
import EventTagSearch from '../components/EventTagSearch';
import { EVENTS } from '../components/event-data';
import { useState } from 'react';
import { COMMITTEES } from '../components/event-data';

export default function EventsPage() {
  const [activeTags, setActiveTags] = useState(COMMITTEES);
  const handleTagChange = (e) => {
    if (!activeTags.includes(e)) {
      setActiveTags([...activeTags, e]);
      console.log(activeTags);
    } else {
      setActiveTags(activeTags.filter((a) => a !== e));
    }
  };
  return (
    <div className=''>
      <EventTagSearch activeTags={activeTags} handleClick={handleTagChange} />
      <EventCardList activeTags={activeTags} events={EVENTS} />
    </div>
  );
}
