import EventCard from './EventCard';

export default function EventCardList(props) {
  const { activeTags, events } = props;
  return (
    <div className='p-4 flex flex-row flex-wrap gap-4'>
      {events.map((e) => {
        let active = false;
        e.committees.forEach((eventTag) => {
          active =
            active || activeTags.some((tag) => tag.value === eventTag.value);
        });
        return active && <EventCard eventDetails={e} />;
      })}
    </div>
  );
}
