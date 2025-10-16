import type { Dispatch, SetStateAction } from "react";

export interface JokeApiSuccessResponse {
  error: false;
  category: string;
  type: "single" | "twopart";
  joke?: string;
  setup?: string;
  delivery?: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
}

export interface JokeApiErrorResponse {
  error: true;
  internalError: boolean;
  code: number;
  message: string;
  causedBy: string[];
  additionalInfo: string;
  timestamp: number;
}

export interface ImageApiSuccessResponse {
  page: 1;
  per_page: 1;
  photos: [
    {
      id: number;
      width: number;
      height: number;
      url: string;
      photographer: string;
      photographer_url: string;
      photographer_id: number;
      avg_color: string;
      src: {
        original: string;
        large2x: string;
        large: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
      };
      liked: boolean;
      alt: string;
    }
  ];
  total_results: number;
  next_page: string;
}

export interface ImageApiNoResultsResponse {
  page: number;
  per_page: number;
  photos: [];
  total_results: number;
}

export interface MappedJoke {
  jokeText: string;
  topicJoke: string;
}

export interface MappedImage {
  imageUrl: string;
  imageDescription: string;
  photographerName: string | null;
}

export type PexelsPhoto = ImageApiSuccessResponse["photos"][number];

export interface UseJokeAppLogic {
  jokeData: MappedJoke | null;
  longestWord: string | null;
  imageData: MappedImage | null;
  isWelcomeScreen: boolean;
  isLoading: boolean;
  error: Error | null;
  getNewJoke: () => void;
}

export interface UseRandomJokeProps {
  resetStates: () => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setJokeData: Dispatch<SetStateAction<MappedJoke | null>>;
  setIsWelcomeScreen: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<Error | null>>;
}

export interface RandomJokeProps {
  jokeData: MappedJoke | null;
  longestWord: string | null;
  isWelcomeScreen: boolean;
  isLoading: boolean;
  error: Error | null;
}

export interface RandomImageProps {
  imageData: MappedImage | null;
}
