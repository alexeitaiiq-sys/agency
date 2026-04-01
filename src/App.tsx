import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Cases from './pages/Cases';

// Использование HashRouter позволяет без проблем развернуть сайт на GitHub Pages
// без дополнительной настройки редиректов (404.html).
export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cases" element={<Cases />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}