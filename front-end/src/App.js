import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import Paraphrase from "./pages/Paraphrase";
import Translate from "./pages/Translate";
import Summarize from "./pages/Summarize";

function App() {
  return (
    <>
        <Dashboard />

        <Routes>
        <Route exact path="/"  element={<Translate />}/>
        <Route path="/paraphrase" element={<Paraphrase />} />
        <Route path="/summarize" element={<Summarize />} />
        <Route path="/translate" element={<Translate />}/>
        </Routes>
        
    </>
  );
}

export default App;
