import { RandomJoke, RandomImage } from "./components";
import { useJokeAppLogic } from "./hooks";

export default function App() {
  const {
    joke,
    topicJoke,
    imageUrl,
    imageDescription,
    photographerName,
    isLoading,
    error,
    getNewJoke,
  } = useJokeAppLogic();

  return (
    <>
      <h1>Random Jokes App</h1>
      <button onClick={getNewJoke} disabled={isLoading}>
        {isLoading ? "Loading..." : "Get Joke"}
      </button>

      <RandomJoke
        joke={joke}
        topicJoke={topicJoke}
        isLoading={isLoading}
        error={error}
      />
      <RandomImage
        imageUrl={imageUrl}
        imageDescription={imageDescription}
        photographerName={photographerName}
      />
    </>
  );
}
