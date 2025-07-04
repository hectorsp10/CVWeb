import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
