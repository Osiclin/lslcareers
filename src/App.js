import { Routes, Route } from "react-router-dom"
import Home from "./pages/Index";
import Details from "./pages/Details";

function App() {
  return (
    <div style={{padding: "2rem 1rem"}}>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path=":id" element={<Details />} />
    </Routes>
    </div>
  );
}

export default App;