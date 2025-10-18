import EventCard from './EventCard';

export default function EventCardList(props) {
  const { events } = props;
  return (
    <div className='p-4 flex flex-row flex-wrap gap-4'>
      {events.map((eventDetails) => {
        return <EventCard eventDetails={eventDetails} />;
      })}
    </div>
  );
}
