import EventTag from './EventTag';

export default function EventCardTags(props) {
  const { committees } = props;
  return (
    <div className='my-1 flex flex-row gap-2'>
      {committees.map((tag) => {
        return <EventTag tag={tag} />;
      })}
    </div>
  );
}
