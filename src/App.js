// src/App.js

import './App.css';
import Header from './homepage/Header';
import SampleTTS from './homepage/SampleTTS';
import Middle from './homepage/Middle';
import Testimonial from './homepage/Testimonial';
import FAQ from './homepage/FAQ';
import Footer from './homepage/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <SampleTTS />
        <Middle />
        <Testimonial />
        <FAQ />
        <Footer />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/pricing" element={<FAQs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
