import { useState } from 'react';
import Dropdown from '../components/Dropdown';
// import {Panel} from '../components/Dropdown'
const OPTIONS = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
];

const COLOR_MAP = {
  red: 'bg-red-500',
  green: 'bg-green-400',
  blue: 'bg-blue-500',
};

// template literal
// const colorClass = `bg-${value?.value}-500`;
// instead of
// const colorClass = 'bg-' + value?.value + '-500';

const DATA_TO_FILTER = [
  { id: 1, name: 'katie', team: 'red' },
  { id: 2, name: 'josef', team: 'green' },
  { id: 3, name: 'amelie', team: 'blue' },
  { id: 4, name: 'leah', team: 'blue' },
  { id: 5, name: 'sam', team: 'green' },
  { id: 6, name: 'collin', team: 'blue' },
];

const DropdownPage = () => {
  // this piece of state is where we recieve our dropdown selected value
  // we keep track of it in the parent component so that it and all children
  // have access to this piece of state's value and can update and re-render when it changes
  const [value, setValue] = useState(null);

  let filteredData = DATA_TO_FILTER;
  //if the user selected an option from our dropdown, find the value key if it exists
  if (value?.value) {
    // filter our array by value of selected option
    filteredData = DATA_TO_FILTER.filter(
      (student) => student.team === value.value
    );
  }

  const handleChange = (option) => {
    setValue(option);
  };
  return (
    <div>
      <h1 className={COLOR_MAP[value?.value]}>
        Dropdown page with user selected value of: {value?.value}
      </h1>
      <Dropdown
        className='m-2'
        options={OPTIONS}
        onChange={handleChange}
        value={value}
      />
      <h2 className={COLOR_MAP[value]}>
        {filteredData.map((student) => {
          return (
            <p key={student.id} className={COLOR_MAP[student.team]}>
              {student.name}
            </p>
          );
        })}
      </h2>
    </div>
  );
};

export default DropdownPage;
