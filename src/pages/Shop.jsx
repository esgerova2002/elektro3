import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter';
import '../styles/Shop.css';
import HomeS6 from '../components/HomeS6';
import { SlArrowDown } from "react-icons/sl";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


function ProductPage() {
  const [proData, setProData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [filters, setFilters] = useState({ price: 5000, brand: '', color: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  useEffect(() => {
    fetch('/data/proData.json')
      .then(response => response.json())
      .then(data => {
        setProData(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    let updatedProducts = proData.filter(product =>

      product.price <= filters.price &&
      (filters.brand === '' || product.brand === filters.brand) &&
      (filters.color.length === 0 || filters.color.includes(product.color))
    );
    setFilteredProducts(updatedProducts);

  }, [filters, proData]);


  const onFilterChange = (filterName, filterValue) => {
    if (filterName === 'color') {
      let colors = filters.color.includes(filterValue)
        ? filters.color.filter(color => color !== filterValue)
        : [...filters.color, filterValue];
      setFilters({ ...filters, color: colors });
    } else {
      setFilters({ ...filters, [filterName]: filterValue });
    }
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className='container'>
      <div className='apro'>
        <span>Shop</span><img src='./images/apro.svg' alt=''></img><span>All Products</span>
      </div>
      <div className='filterproductList'>
      <Filter onFilterChange={onFilterChange} proData={proData} />
        <div className='proListtop'>
          <div className='listop'>
            <div className='listop-img-img-span'>
              <img src="./images/grid 02.svg" alt="" />
              <img src="./images/list view-circle.svg" alt="" />
              <span>Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} results</span>
            </div>
            <div className='listop-rigt'>
              <span>Sort by latest</span>
              <SlArrowDown />
            </div>
          </div>
          <div className="product-list">
            {currentProducts.map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="product-item-link">
                <div className="product-item">
                  <img className='pro-item-img' src={product.imgSrc} alt={product.name} />
                  <div className='proItemBottom'>
                    <p>{product.name}</p>
                    <div className='s3-card-star'>
                      <img src="./images/star.png" alt="star" />
                      <img src="./images/star.png" alt="star" />
                      <img src="./images/star.png" alt="star" />
                      <img src="./images/star.png" alt="star" />
                      <img src="./images/star.png" alt="star" />
                    </div>
                    <p>${product.price.toFixed(2)}</p>
                  </div>
                  <div className='proItem-hover'>
                    <div className='proItem-hover-circle'><img src="./images/star.svg" alt="" /></div>
                    <div className='proItem-hover-circle'><img src="./images/arrow sort.svg" alt="" /></div>
                    <div className='proItem-hover-circle'><img src="./images/eye.svg" alt="" /></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="pagination">
          <FaArrowLeft className='pagIcon' onClick={handlePrevClick} />
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
          <FaArrowRight className='pagIcon' onClick={handleNextClick} />
        </div>
      </div>
      <HomeS6 />
    </div>
  );
}

export default ProductPage;
