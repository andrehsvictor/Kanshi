import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DetailedAnime } from "../types/DetailedAnime";

const useFetchAnime = (id: string | undefined) => {
  const [anime, setAnime] = useState<DetailedAnime | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const url = import.meta.env.VITE_API_URL;
        const response = await fetch(`${url}/api/1.0/animes/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem(
              "Kanshi: bearer_token"
            )}`,
          },
        });

        if (response.status === 403) {
          setError("Your session has expired. Please log in again.");
          navigate("/login");
        } else if (response.status === 404) {
          navigate("/404");
        } else {
          const data = (await response.json()) as DetailedAnime;
          setAnime(data);
        }
      } catch (error) {
        setError("An error occurred while fetching the anime.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchAnime();
    }
  }, [id, navigate]);

  return { anime, loading, error };
};

export default useFetchAnime;
