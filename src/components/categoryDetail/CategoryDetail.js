

import React, { useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import productsData from '../../products-item.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import { Pagination } from 'swiper/modules';
import './categoryDetail.scss';

const CategoryDetail = () => {
  const { category } = useParams();
  const { search } = useLocation();
  const categoryData = productsData[category];

  const query = new URLSearchParams(search).get('search')?.toLowerCase();
  const highlightedProduct = categoryData?.items.find(item => 
    item.name.toLowerCase().includes(query)
  );

  const highlightedProductRef = useRef(null);

  useEffect(() => {
    if (highlightedProductRef.current) {
      const headerHeight = 60; 
      const elementTop = highlightedProductRef.current.getBoundingClientRect().top;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = elementTop + scrollTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [category, query]);

  if (!categoryData) {
    return <h2>Category not found</h2>;
  }

  const categoryItems = categoryData.items || [];

  return (
    <div className="category-detail">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <ul>
        {categoryItems.length > 0 ? (
          categoryItems.map(item => (
            <li
              key={item.id}
              ref={highlightedProduct?.id === item.id ? highlightedProductRef : null}
              className={highlightedProduct?.id === item.id ? 'highlighted' : ''}
            >
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                className="swiper-container"
              >
                {(Array.isArray(item.images) ? item.images : [item.images]).map((image, index) => (
                  <SwiperSlide key={index}>
                    <a href={image} target="_blank" rel="noopener noreferrer">
                      <img src={image} alt={`Slide ${index + 1}`} />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
              <h2>{item.name}</h2>
              <p className='price'>ԳԻՆԸ- {item.price}</p>
              <p>{item.description}</p>
            </li>
          ))
        ) : (
          <p>No products available in this category</p>
        )}
      </ul>
    </div>
  );
};

export default CategoryDetail;
