import { useEffect, useState } from "react";
import jokes from "./mocks/jokes.json";

const getMockJoke = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(jokes);
    }, 2000);
  });
};

export default function App() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const getRandomJoke = async () => {
    setJoke(null);
    setLoading(true);
    try {
      const data = await getMockJoke();
      setJoke(data.joke);
      const largeWord = data.joke
        .split(" ")
        .reduce((previousWord, currentWord) =>
          currentWord.length > previousWord.length ? currentWord : previousWord
        );
      console.log(largeWord);
    } catch (error) {
      setJoke(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  return (
    <>
      <h1>Random Jokes App</h1>
      <button onClick={getRandomJoke} disabled={loading}>
        {loading ? "Loading..." : "Get Joke"}
      </button>
      {joke ? <p>{joke}</p> : <p>Please wait a moment...</p>}
    </>
  );
}
