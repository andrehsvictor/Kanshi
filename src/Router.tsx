import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import ErrorPage from "./pages/notFound";
import HomePage from "./pages/home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="home" element={<HomePage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
