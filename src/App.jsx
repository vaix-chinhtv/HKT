import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quest from "./pages/Quest";
import CreateQuest from "./pages/CreateQuest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quest" element={<Quest />} />
        <Route path="/quest/create" element={<CreateQuest />} />
      </Routes>
    </Router>
  );
}

export default App;
