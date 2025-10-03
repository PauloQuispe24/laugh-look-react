import { useEffect, useState } from "react";

const getMockJoke = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_JOKE_API_URL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data " + error);
    return null;
  }
};

const getImageMock = async (query) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_IMAGE_API_URL + `?per_page=1&query=${query}`,
      {
        headers: {
          Authorization:
            "CqHZdmjuakes4aa4y0lXzLraSTGNGi419eU2yIbPNhG8rtJyAI7eNYXV",
        },
      }
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data " + error);
    return null;
  }
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

      const dataImage = await getImageMock(newLongestWord);
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
