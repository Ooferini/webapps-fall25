import { useReducer } from 'react';
import Panel from '../components/Panel';
import Button from '../components/Button';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'set-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';
const CLEAR_VALUE_TO_ADD = 'clear-value-to-add';

const reducer = (state, action) => {
  // state is now an object with key value pairs as state variables
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        // always copy in entire state object as is first
        ...state,
        // then override/update individual key/values
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      return { ...state, valueToAdd: action.payload };
    case ADD_VALUE_TO_COUNT:
      return { ...state, count: state.count + state.valueToAdd };
    case CLEAR_VALUE_TO_ADD:
      return { ...state, valueToAdd: 0 };
    default:
      console.log('not a recognized action');
  }

  /*
  if (action.type === INCREMENT_COUNT) {
    // NEVER DO THIS
    // state.count = state.count + 1;
    return {
      // always copy in entire state object as is first
      ...state,
      // then override/update individual key/values
      count: state.count + 1,
    };
  } else if (action.type === SET_VALUE_TO_ADD) {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }
  // make sure you at least return the existing state as a default/fallback option
  // if not, you'll probably accidentally clear it a lot
  return state;
  */
};

const CounterPage = ({ initialCount }) => {
  // const {initialCount} = props
  // create a piece of state var called count and its setter function
  // this time we are recieving a prop from the parent and setting it as the initial count
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  // useReducer instead of useState--no var/setVar, instead state and dispatch
  // useReducer takes a reducer and an object of initial values with variable: value

  const handleIncrement = () => {
    // setCount(count + 1);

    // dispatch is how we update our state object, it only ever takes one argument, an action object
    // an action object always needs a type key
    dispatch({ type: INCREMENT_COUNT });
  };
  const handleDecrement = () => {
    // setCount(count - 1);
    dispatch({ type: DECREMENT_COUNT });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_VALUE_TO_COUNT });
    // setCount(count + valueToAdd);
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    console.log(value);
    // setValueToAdd(value);
    // payload is optional second key
    // we only get type and payload--payload can be an object if you need to pass more
    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };
  const handleClear = () => {
    // setValueToAdd(0);
    dispatch({ type: CLEAR_VALUE_TO_ADD });
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

export default CounterPage;
