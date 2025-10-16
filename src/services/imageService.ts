import { IMAGE_API_URL, IMAGE_API_KEY } from "../constants/index.ts";
import type {
  ImageApiSuccessResponse,
  ImageApiNoResultsResponse,
} from "../types/index.ts";

export async function getRandomImage(
  query: string,
  signal: AbortSignal
): Promise<ImageApiSuccessResponse | ImageApiNoResultsResponse | null> {
  try {
    const response = await fetch(IMAGE_API_URL + `?per_page=1&query=${query}`, {
      headers: {
        Authorization: IMAGE_API_KEY,
      },
      signal,
    });
    if (!response.ok)
      throw new Error(`HTTP error Pexels API! status: ${response.status}`);
    const data: ImageApiSuccessResponse | ImageApiNoResultsResponse =
      await response.json();
    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error ocurred.";
    console.error("Error fetching image data " + errorMessage);
    return null;
  }
}
