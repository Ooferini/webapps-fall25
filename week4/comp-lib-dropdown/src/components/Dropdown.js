import { useState } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import Panel from './Panel';

const Dropdown = (props) => {
  const { options, onChange, value } = props;
  // local state
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptClick = (option) => {
    setIsOpen(false);
    // need some other function defined by the parent component passed in as a prop to call here
    onChange(option);
  };

  const renderedOptions = options.map((opt, index) => {
    return (
      <div
        onClick={() => handleOptClick(opt)}
        key={index}
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
      >
        {opt.label}
      </div>
    );
  });
  return (
    <div className='w-48 relative'>
      <Panel
        onClick={handleClick}
        className='flex justify-between items-center cursor-pointer'
      >
        {value?.value ? value.value : 'Select...'}
        {isOpen ? <GoChevronUp /> : <GoChevronDown />}
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  );
};

// default export (usually the file name should give you a hint about what to be the default export)
export default Dropdown;
