import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLikeAnime = (animeId: string | undefined) => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const likeAnime = async () => {
    try {
      const url = import.meta.env.VITE_API_URL;
      const response = await fetch(`${url}/api/1.0/animes/${animeId}/like`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(
            "Kanshi: bearer_token"
          )}`,
        },
      });
      if (response.status === 401) {
        localStorage.removeItem("Kanshi: bearer_token");
        localStorage.removeItem("Kanshi: expires_at");
        alert("Your session has expired. Please log in again.");
        navigate("/login");
      }
      if (response.status === 404) {
        alert("Anime not found.");
        
      }
      setSuccess(true);
    } catch (error) {
      console.error(error);
      setSuccess(false);
    }
  };

  likeAnime();

  return { success };
};

export default useLikeAnime;
