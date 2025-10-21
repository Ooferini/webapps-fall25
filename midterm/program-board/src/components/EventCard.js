import EventCardTags from './EventCardTags';

export default function EventCard(props) {
  const { eventDetails } = props;
  return (
    <div className='w-[20rem] bg-gray-700 rounded-2xl flex flex-col text-white drop-shadow-xl'>
      <img
        className='aspect-square rounded-t-2xl'
        src='https://placehold.co/400'
        alt='flyer'
      />
      <div className='flex flex-col p-2'>
        <p className='text-xl'>{eventDetails.title}</p>
        <p>{eventDetails.date}</p>
        <p>{eventDetails.location}</p>
        <EventCardTags committees={eventDetails.committees} />
      </div>
    </div>
  );
}
