import { useState } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

/*
const Props = {
  label: string,
  content: string,
  onClick: function
  isExpanded: boolean,
}

const state = {
  isExpanded: false,
};
*/

const DUMMYDATA = {
  id: 'alskjdf',
  label: 'start diggin in yo',
  content: 'butt twin. twun. twan. twon. twen.',
};

const Accordion = (props) => {
  // pull out our props with destructuring
  // const { items } = props;

  // state
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);

    // NEVER EVER EVER
    // isExpanded = !isExpanded
    // page won't update
  };

  const icon = (
    <span className='text-2xl'>
      {isExpanded ? <GoChevronUp /> : <GoChevronDown />}
    </span>
  );

  // JSX returned and rendered tot he user
  return (
    <div key={DUMMYDATA.id}>
      <div
        onClick={handleClick}
        className='flex justify-between p-3 bg-gray-100 border-b cursor-pointer'
      >
        {DUMMYDATA.label}
        {icon}
      </div>
      {
        // conditional Rendering
        // the content div will only render when isExpanded is true
        isExpanded && <div className='border-b p-5'>{DUMMYDATA.content}</div>
      }
    </div>
  );
};

export default Accordion;
