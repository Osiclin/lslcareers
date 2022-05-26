import { Routes, Route } from "react-router-dom"
import Home from "./pages/Index";
import Details from "./pages/Details";

function App() {
  return (
    <div style={{padding: "2rem 1rem"}}>
      <h1 style={{maxWidth: "1024px", margin: "0 auto 4rem"}}>Movies</h1>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path=":id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;