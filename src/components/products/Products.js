

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../products-item.json';
import './products.scss';
import { useTranslation } from '../../contexts/TranslationContext'; 
const Products = ({ searchQuery }) => {
  const { t } = useTranslation(); 
  const categories = Object.keys(productsData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(productsData); 

  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="products" className="products-section">
      <h1>{t('productsTitle')}</h1> 
      <ul className="categories-list">
        {filteredCategories.length > 0 ? (
          filteredCategories.map(category => (
            <li key={category} className="category-item">
              <Link to={`/category/${category}`}>
                <img 
                  src={productsData[category].image} 
                  alt={category} 
                  className="category-image" 
                />
                <h2>{category}</h2>
              </Link>
            </li>
          ))
        ) : (
          <p>{t('noMatchingProducts')}</p> 
        )}
      </ul>
    </section>
  );
};

export default Products;
