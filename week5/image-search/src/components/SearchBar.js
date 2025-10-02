import { useState } from 'react';

const SearchBar = (props) => {
  const { onSubmit } = props;
  const [term, setTerm] = useState('');

  const handleChange = (event) => {
    // set our local value state here
    setTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    // disable the form input collection built into HTML
    // block the built in page refresh
    event.preventDefault();
    // onSubmit comes in from the form's parent component (App)
    // it is defined there and passed as a prop in order to give APP access
    // to our search bar..?
    onSubmit(term);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {/* 
        every element to be properly bound needs an onChange and a value prop.
        onChange fires every time the use changes the input.
        for a text input, that's every time the user clicks a key.
        value needs to be tied to a piece of local state.
        if you have a multi-input form, each input or form element will need
          a piece of state to bind to the value and a handler function to
          pass into our onChange listener.
        */}
        <input
          style={{ fontFamily: 'Comic Sans MS' }}
          type='text'
          onChange={handleChange}
          value={term}
        />
      </form>
    </div>
  );
};

export default SearchBar;
