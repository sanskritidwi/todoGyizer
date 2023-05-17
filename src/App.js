import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Header from "./components/Header";
import '../src/styles/css/all.css';
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
      </>
    
  );
}

export default App;
