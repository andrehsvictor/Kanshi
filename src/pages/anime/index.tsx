import { useParams } from "react-router-dom";
import useFetchAnime from "../../hooks/useFetchAnime";
import NavBar from "../home/components/NavBar";
import useLikeAnime from "../../hooks/useLikeAnime";

export default function AnimePage() {
  const { id } = useParams();
  const { anime, loading, error } = useFetchAnime(id);

  const handleLike = async () => {
    const { success } = useLikeAnime(id);
    if (success) {
      alert("Anime liked!");
    } else {
      alert("An error occurred while liking the anime.");
    }
  }

  return (
    <>
      <div className="bg-gradient-to-r from-fuchsia-500 to-purple-500 h-screen w-screen fixed top-0 left-0 z-[-1]"></div>
      <NavBar />
      <main className="p-4 mt-24 max-w-3xl mx-auto bg-white rounded-lg shadow-lg h-full">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {anime && (
          <>
            <div className="flex justify-between items-center mb-4 gap-4 p-4">
              <img
                src={anime.imageUrl}
                alt={anime.title}
                className="w-1/3 rounded-lg"
              />
              <div className="flex flex-col gap-4 w-2/3">
                <p className="w-2/3">Title: {anime.title}</p>
                <p className="w-2/3">Episodes: {anime.episodes}</p>
                <p className="w-2/3">Seasons: {anime.seasons}</p>
                <p className="w-2/3">
                  Finished: {anime.finished ? "Yes" : "No"}
                </p>
                <p className="w-2/3">Release Date: {anime.releaseDate}</p>
                <p className="w-2/3">
                  Genres: {anime.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p className="w-2/3">
                  Liked By:{" "}
                  {anime.likedBy.map((user) => user.username).join(", ")}
                </p>
                <button className="bg-fuchsia-500 text-white p-2 rounded-lg" onClick={() => handleLike()}>
                  Like
                </button>
              </div>
            </div>
          </>
        )}
        <hr />
        <div className="p-4">
          <h2 className="text-xl font-semibold">Description</h2>
          <p>{anime?.description}</p>
        </div>
        <hr />
        <div className="p-4">
          <h2 className="text-xl font-semibold">Recommendations</h2>
          <ul className="shadow-lg rounded-lg p-4 bg-gray-100">
            {anime?.recommendations.map((recommendation) => (
              <li key={recommendation.id}>
                <p>User: {recommendation.user.username}</p>
                <p>Comment: {recommendation.comment}</p>
                <p>Rating: {recommendation.rating}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="w-full text-white p-4 text-center">
        <p>&copy; 2024 Kanshi. All rights reserved.</p>
      </footer>
    </>
  );
}
