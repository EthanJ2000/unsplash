import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./screens/Dashboard/Dashboard";
import PreviewModal from "./components/PreviewModal/PreviewModal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/image/:id" element={<PreviewModal />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
