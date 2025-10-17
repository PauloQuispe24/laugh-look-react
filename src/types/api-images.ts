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

export type PexelsPhoto = ImageApiSuccessResponse["photos"][number];
