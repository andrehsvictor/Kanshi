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
        localStorage.setItem("Kanshi: expires_at", response.expiresAt);
        return { success: true };
      } else if (request.status === 401) {
        return { success: false, message: "Invalid credentials" };
      } else {
        return { success: false, message: "An error occurred" };
      }
    } catch (error) {
      return { success: false };
    }
  };

  return { login };
};

export default useLogin;
