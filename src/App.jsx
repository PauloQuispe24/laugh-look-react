import { useEffect, useState } from "react";
import jokeMock from "./mocks/jokeMock.json";
import imageMock from "./mocks/imageMock.json";

const getMockJoke = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(jokeMock);
    }, 2000);
  });
};

const getImageMock = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(imageMock);
    }, 2000);
  });
};

export default function App() {
  const [joke, setJoke] = useState(null);
  const [longestWord, setLongestWord] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getRandomJoke = async () => {
    setJoke(null);
    setLongestWord(null);
    setImageUrl(null);
    setIsLoading(true);
    try {
      const dataJoke = await getMockJoke();
      setJoke(dataJoke.joke);
      const newLongestWord = dataJoke.joke
        .split(" ")
        .reduce((previousWord, currentWord) =>
          currentWord.length >= previousWord.length ? currentWord : previousWord
        );
      setLongestWord(newLongestWord);

      const dataImage = await getImageMock();
      const newImageUrl = dataImage.photos[0].src.original;
      setImageUrl(newImageUrl);
    } catch (error) {
      setJoke(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  return (
    <>
      <h1>Random Jokes App</h1>
      <button onClick={getRandomJoke} disabled={isLoading}>
        {isLoading ? "Loading..." : "Get Joke"}
      </button>
      {joke ? <p>{joke}</p> : <p>Please wait a moment...</p>}
      {longestWord && <p>--- {longestWord} ---</p>}
      <img src={imageUrl} alt="" />
    </>
  );
}
