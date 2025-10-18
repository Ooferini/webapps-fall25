import EventCardList from '../components/EventCardList';
import { EVENTS } from '../components/event-data';

export default function EventsPage() {
  return (
    <div>
      <EventCardList events={EVENTS} />
    </div>
  );
}
