import React from 'react';
import Button from '../components/Button';

const ButtonPage = () => {
  return (
    <>
      <h1>Button Page!</h1>
      <div className='App items-center h-screen flex flex-row justify-around flex-wrap gap-8'>
        <Button primary>Rise Up!</Button>
        <Button
          primary
          onClick={() => {
            console.log('im next level so legit');
          }}
        >
          Rise Up!
        </Button>

        <Button secondary className='fixed top-0 right-0'>
          Vote Now
        </Button>
        <Button secondary pill>
          Vote Now
        </Button>
        <Button danger>Delete</Button>
        <Button danger outline pill>
          Delete
        </Button>

        <Button warning>Ninajirachi</Button>
        <Button success pill>
          Bruh
        </Button>
        <Button success outline>
          Bruh
        </Button>
      </div>
    </>
  );
};

export default ButtonPage;
