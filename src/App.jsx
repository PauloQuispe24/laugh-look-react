import { RandomJoke, RandomImage } from "./components";
import { useJokeAppLogic } from "./hooks";

export function App() {
  const {
    joke,
    topicJoke,
    longestWord,
    imageUrl,
    imageDescription,
    photographerName,
    isWelcomeScreen,
    isLoading,
    error,
    getNewJoke,
  } = useJokeAppLogic();

  return (
    <main className="app-container">
      <header>
        <h1 className="app-title">Random Jokes App</h1>
      </header>
      <button
        className="btn-joke"
        onClick={getNewJoke}
        disabled={isLoading}
        aria-live="polite"
        aria-busy={isLoading}
      >
        {isLoading
          ? "Loading..."
          : isWelcomeScreen
          ? "Get Joke"
          : "Get Another Joke"}
      </button>
      <RandomJoke
        joke={joke}
        topicJoke={topicJoke}
        longestWord={longestWord}
        isWelcomeScreen={isWelcomeScreen}
        isLoading={isLoading}
        error={error}
      />
      <RandomImage
        imageUrl={imageUrl}
        imageDescription={imageDescription}
        photographerName={photographerName}
      />
    </main>
  );
}
