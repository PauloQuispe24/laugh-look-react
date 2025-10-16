import type { JokeApiSuccessResponse, MappedJoke } from "../types/index.ts";

export function mappedJokeData(
  apiData: JokeApiSuccessResponse | null
): MappedJoke | undefined {
  if (!apiData?.joke) return;
  const mappedJoke: MappedJoke = {
    jokeText: apiData.joke,
    topicJoke: apiData.category || "No Topic",
  };
  return mappedJoke;
}
