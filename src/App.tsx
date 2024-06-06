import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Projects from "./pages/Projects";
import Layout from "./pages/Layout";
import Bio from "./pages/Bio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="projects" element={<Projects />} />
          <Route path="bio" element={<Bio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
