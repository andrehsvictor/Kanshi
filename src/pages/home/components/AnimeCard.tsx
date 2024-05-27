import { Anime } from "../../../types/Anime";

interface AnimeCardProps {
  anime: Anime;
  onAnimeClick: (anime: Anime) => void;
}

export default function AnimeCard({ anime, onAnimeClick }: AnimeCardProps) {
  return (
    <>
      <div key={anime.id} className="bg-gray-200 p-4 rounded-lg">
        <img
          src={anime.imageUrl}
          alt={anime.title}
          className="w-full h-48 object-contain rounded-lg"
        />
        <h2 className="text-lg font-bold mt-2">{anime.title}</h2>
        <p className="text-gray-500">{anime.description}</p>
        <div className="mt-4 flex justify-end items-center">
          <a
            href="#"
            className="text-fuchsia-700 font-bold"
            onClick={(e) => {
              e.preventDefault();
              onAnimeClick(anime);
            }}
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
}
