import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import ErrorPage from "./pages/notFound";
import HomePage from "./pages/home";
import AnimePage from "./pages/anime";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="anime/:id" element={<AnimePage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
