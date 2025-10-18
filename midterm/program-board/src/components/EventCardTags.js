export default function EventCardTags(props) {
  const { committees } = props;
  return (
    <div className='m-1 flex flex-row gap-2'>
      {committees.map((committee) => {
        return (
          <div className='rounded-2xl bg-red-700 text-white py-1 px-2'>
            {committee}
          </div>
        );
      })}
    </div>
  );
}
