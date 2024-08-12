import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; 
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Products from './components/products/Products';
import Info from './components/info/Info';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import CategoryDetail from './components/categoryDetail/CategoryDetail';
import './App.scss';

const App = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const showSlider = !location.pathname.startsWith('/category');

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      {showSlider && <Slider />}
      <Routes>
        <Route path="/" element={<Products searchQuery={searchQuery}/>} />
        <Route path="/category/:category" element={<CategoryDetail />} />
      </Routes>
      <Info />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;



