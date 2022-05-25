import { Routes, Route } from "react-router-dom"
import Home from "./pages/Index";
import Details from "./pages/Details";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path=":id" element={<Details />} />
    </Routes>
  );
}

export default App;