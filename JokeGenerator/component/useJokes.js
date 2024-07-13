import { useState, useEffect } from 'react';

const useJokes = () => {
  const [joke, setJoke] = useState(null);

  const fetchJoke = () => {
    fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=sexist')
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.joke || data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { joke, fetchJoke };
};

export default useJokes;
