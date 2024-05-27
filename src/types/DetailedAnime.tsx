export type DetailedAnime = {
  id: number;
  title: string;
  description: string;
  episodes: number;
  seasons: number;
  finished: boolean;
  releaseDate: string;
  imageUrl: string;
  likedBy: { id: number; username: string }[];
  genres: { id: number; name: string }[];
  recommendations: {
    id: number;
    user: { id: number; username: string };
    comment: string;
    rating: number;
  }[];
};
