const useLogin = () => {
  const login = async (email: string, password: string) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    try {
      const request = await fetch(`${apiUrl}/api/1.0/authenticate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (request.ok) {
        const response = await request.json();
        localStorage.setItem("Kanshi: bearer_token", response.token);
        return { success: true };
      } else {
        const error = await request.json();
        return { success: false, message: error.message };
      }
    } catch (error) {
      return { success: false };
    }
  };

  return { login };
};

export default useLogin;
