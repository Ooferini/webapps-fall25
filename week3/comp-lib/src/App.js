import Button from './components/Button';

function App() {
  return (
    <div className='App items-center h-screen flex flex-row justify-around flex-wrap gap-8'>
      <Button primary>Rise Up!</Button>
      <Button primary outline>
        Rise Up!
      </Button>

      <Button secondary>Vote Now</Button>
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
  );
}

export default App;
