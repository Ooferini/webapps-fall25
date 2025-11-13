import { useReducer } from 'react';
import { produce } from 'immer';
import Panel from '../components/Panel';
import Button from '../components/Button';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
// this is best practice/community standard to avoid typos in strings
const SET_VALUE_TO_ADD = 'set-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      // wrapping our useReducer call in immer produce allows us to directly mutate state
      // because immer takes care of the rest in the background
      state.count++;
      return;
    case DECREMENT_COUNT:
      state.count--;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count += state.valueToAdd;
      return;
    default:
      return state;
  }
};

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const handleIncrement = () => {
    dispatch({ type: INCREMENT_COUNT });
  };

  const handleDecrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: ADD_VALUE_TO_COUNT });
    dispatch({ type: SET_VALUE_TO_ADD, payload: 0 });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };
  return (
    <Panel>
      <h1>Count is currently {state.count}</h1>
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
          value={state.valueToAdd || ''}
        />
        <Button primary rounded>
          Add Custom Amount!
        </Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
