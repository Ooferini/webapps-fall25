import { useState } from 'react';
import Panel from '../components/Panel';
import Button from '../components/Button';

const CounterStatePage = ({ initialCount }) => {
  // const {initialCount} = props
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + valueToAdd);
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setValueToAdd(value);
  };
  const handleClear = () => {
    setValueToAdd(0);
  };

  return (
    <Panel>
      <h1>Count is currently {count}</h1>
      <div className='flex flex-row'>
        <Button success rounded onClick={handleIncrement} className='mr-4'>
          Increment
        </Button>
        <Button danger rounded onClick={handleDecrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className='p-1 m-4 bg-slate-50 border border-slate-300'
          type='number'
          onChange={handleChange}
          value={valueToAdd || ''}
        ></input>
        <div className='flex flex-row'>
          <Button className='mr-4' danger rounded onClick={handleClear}>
            clear
          </Button>
          <Button primary rounded>
            Add to count!
          </Button>
        </div>
      </form>
    </Panel>
  );
};

export default CounterStatePage;
