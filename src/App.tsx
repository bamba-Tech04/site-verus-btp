import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Realizations from './pages/Realizations';
import Team from './pages/Team';
import Partners from './pages/Partners';
import Quote from './pages/Quote';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/realisations" element={<Realizations />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/partenaires" element={<Partners />} />
            <Route path="/devis" element={<Quote />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;