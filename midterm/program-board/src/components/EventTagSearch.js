import EventTag from './EventTag';
import { COMMITTEES } from '../components/event-data';

export default function EventTagSearch(props) {
  const { activeTags, handleClick } = props;
  return (
    <div className='px-4 pt-4 flex flex-row gap-1'>
      <div className='text-white text-2xl mr-2'>Committee filter:</div>
      {COMMITTEES.map((tag) => {
        return (
          activeTags.includes(tag) && (
            <EventTag
              active
              className='cursor-pointer'
              onClick={() => handleClick(tag)}
              tag={tag}
              activeTags={activeTags}
            />
          )
        );
      })}
      <div className='h-9 rounded bg-white w-2' />
      {COMMITTEES.map((tag) => {
        return (
          !activeTags.includes(tag) && (
            <EventTag
              inactive
              className='cursor-pointer'
              onClick={() => handleClick(tag)}
              tag={tag}
              activeTags={activeTags}
            />
          )
        );
      })}
    </div>
  );
}
