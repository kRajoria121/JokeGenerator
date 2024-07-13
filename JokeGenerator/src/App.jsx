import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Button from '@mui/material/Button';
import './App.css';
import useJokes from '../component/useJokes';

function App() {
  const { joke, fetchJoke } = useJokes();
  const [displayJoke, setDisplayJoke] = useState(false);

  const handleClick = () => {
    fetchJoke();
    setDisplayJoke(true);
  };

  return (
    <>
      <div>
        <h1>Joke Generator</h1>
        <Button variant="outlined" onClick={handleClick}>
          Generate
        </Button>
        {displayJoke && joke && (
          <div>
            {Array.isArray(joke.jokes) ? (
              joke.jokes.map((j, index) => (
                <p key={index}>
                  {typeof j === 'string' ? j : j.setup + ' ' + j.delivery}
                </p>
              ))
            ) : (
              <p>
                {typeof joke === 'string' ? joke : joke.setup + ' ' + joke.delivery}
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
