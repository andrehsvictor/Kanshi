import { useState, useEffect } from "react";
import { Anime } from "../types/Anime";
import { useNavigate } from "react-router-dom";

const useFetchAnimes = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const apiURL = import.meta.env.VITE_API_URL;
        const token = localStorage.getItem("Kanshi: bearer_token");
        const response = await fetch(
          `${apiURL}/api/1.0/animes?sort=releaseDate,desc`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 403) {
          localStorage.removeItem("Kanshi: bearer_token");
          localStorage.removeItem("Kanshi: expires_at");
          alert("Your session has expired. Please log in again.");
          navigation("/login");
        }
        const data = await response.json();
        setAnimes(data.content);
        setLoading(false);
        setSuccess(true);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setSuccess(false);
      }
    };

    setTimeout(() => {
      fetchAnimes();
    }, 2000);
  }, []);

  return { animes, loading, success };
};

export default useFetchAnimes;
