import { JOKE_API_URL } from "../constants/index.ts";
import type {
  JokeApiSuccessResponse,
  JokeApiErrorResponse,
} from "../types/index.ts";

export async function getRandomJoke(): Promise<JokeApiSuccessResponse | null> {
  try {
    const response = await fetch(JOKE_API_URL);
    if (!response.ok)
      throw new Error(`HTTP error Joke API! status: ${response.status}`);
    const data: JokeApiSuccessResponse | JokeApiErrorResponse =
      await response.json();
    if (data.error) throw new Error(`API Error ${data.code}: ${data.message}`);
    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error ocurred.";
    console.error("Error fetching joke data " + errorMessage);
    return null;
  }
}
