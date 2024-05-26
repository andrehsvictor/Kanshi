const useLogin = () => {
  const login = async (email: string, password: string) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const request = await fetch(`${apiUrl}/api/1.0/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (request.ok) {
      const response = await request.json();
      localStorage.setItem("token", response.token);
      return true;
    }
    alert("Invalid credentials");
  };

  return { login };
};

export default useLogin;
