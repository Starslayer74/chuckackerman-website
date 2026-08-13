import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Shop from './pages/Shop';
import Software from './pages/Software';
import CallAudit from './pages/CallAudit';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Podcast from './pages/Podcast';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="books" element={<Books />} />
          <Route path="shop" element={<Shop />} />
          <Route path="software" element={<Software />} />
          <Route path="audit" element={<CallAudit />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="podcast" element={<Podcast />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
