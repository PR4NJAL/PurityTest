import { Routes, Route } from "react-router-dom";
import Questions from "./components/Questions";
import Results from "./components/Results"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Questions />} />
        <Route path="/results" element={<Results />} />
      </Routes>
  );
}

export default App;