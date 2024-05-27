import { useState } from "react";
import useFetchAnimes from "../../hooks/useFetchAnimes";
import NavBar from "./components/NavBar";
import AnimeCard from "./components/AnimeCard";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const { animes, loading, success } = useFetchAnimes();
  const [search, setSearch] = useState("");
  const filteredAnimes = animes.filter((anime) =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );
  const navigate = useNavigate();

  const renderAnimes = () => {
    const animesToRender = search.length > 0 ? filteredAnimes : animes;
    return animesToRender.map((anime) => (
      <AnimeCard
        anime={anime}
        onAnimeClick={(anime) => navigate(`/anime/${anime.id}`)}
      />
    ));
  };

  return (
    <>
      <div className="bg-gradient-to-r from-fuchsia-500 to-purple-500 h-screen w-screen fixed top-0 left-0 z-[-1]"></div>
      <NavBar />
      <main className="p-4 mt-24 max-w-3xl mx-auto bg-white rounded-lg shadow-lg h-full">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Animes</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="p-2 border border-gray-300 rounded-lg"
              value={search}
              onInput={(e) => setSearch(e.currentTarget.value)}
            />
          </div>
        </div>
        <hr className="mt-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {!loading && !success && <p>Could not fetch animes</p>}
          {loading && <p>Loading...</p>}
          {renderAnimes()}
        </div>
      </main>
      <footer className="w-full text-white p-4 text-center">
        <p>&copy; 2024 Kanshi. All rights reserved.</p>
      </footer>
    </>
  );
}
