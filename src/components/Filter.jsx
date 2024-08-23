import React, { useState, useCallback, useEffect } from 'react';
import '../styles/Filter.css';
import { SlArrowDown } from "react-icons/sl";

function Filter({ onFilterChange, proData = [] }) {
  const [openSections, setOpenSections] = useState({
    cat: false,
    price: false,
    brand: false,
    color: false,
  });

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [filteredColors, setFilteredColors] = useState({});
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const toggleSection = useCallback((section) => {
    if (section === 'cat') {
      setOpenSections((prevState) => ({
        cat: !prevState.cat,
        price: !prevState.cat ? true : prevState.price,
        brand: !prevState.cat ? true : prevState.brand,
        color: !prevState.cat ? true : prevState.color,
      }));
    } else {
      setOpenSections((prevState) => ({
        ...prevState,
        [section]: !prevState[section],
      }));
    }
  }, []);

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    onFilterChange('brand', brand);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    onFilterChange('color', color);
  };

  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
    onFilterChange('price', [min, max]);
  };

  const updateFilteredColors = useCallback((brand) => {
    const colorCounts = proData
      .filter((product) =>
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (brand === null || product.brand === brand)
      )
      .reduce((counts, product) => {
        counts[product.color] = (counts[product.color] || 0) + 1;
        return counts;
      }, {});
    setFilteredColors(colorCounts);
  }, [proData, priceRange]);

  useEffect(() => {
    updateFilteredColors(selectedBrand);
  }, [selectedBrand, priceRange, updateFilteredColors]);

  return (
    <div className='procatdir'>
      <div className='pdown'
        onClick={() => toggleSection('cat')}
        aria-controls="cat-filter"
        role="button"
        tabIndex={0}
      >
        <span className='catitle'>Product Categories </span> < SlArrowDown />
      </div>
      {openSections.cat && (
        <div id="cat-filter" className="filter">
          <div className="filter-section">
            <div className='pdown'
              onClick={() => toggleSection('price')}
              aria-controls="price-filter"
              role="button"
              tabIndex={0}
            >
              <span className='catitle'>Filter by Price</span> < SlArrowDown />
            </div>
            {openSections.price && (
              <div className="price-filter">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="1"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(+e.target.value, priceRange[1])}
                  style={{ width: '100%' }}
                />
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="1"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(priceRange[0], +e.target.value)}
                  style={{ width: '100%' }}
                />
                <div className="price-range-labels">
                  <span>Price: ${priceRange[0]}</span>
                  <span> - </span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            )}
          </div>
          <div className="filter-section">
            <div className='pdown'
              onClick={() => toggleSection('brand')}
              aria-controls="brand-filter"
              role="button"
              tabIndex={0}
            >
              <span className='catitle'>Filter by Brand </span>< SlArrowDown />
            </div>
            {openSections.brand && (
              <div className='selectF'>
                {['Apple', 'Boat', 'Dell', 'Hp', 'Samsung', 'LG', 'Canon', 'Asus', 'Xiaomi', 'Fossil'].map((brand) => (
                  <div className='optionFcard' key={brand}>
                    <input
                      type="checkbox"
                      id={brand}
                      name="brand"
                      value={brand}
                      checked={selectedBrand === brand}
                      onChange={() => handleBrandChange(brand)}
                    />
                    <label htmlFor={brand}>
                      {brand} <span>({proData.filter(product => product.brand === brand).length})</span>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          {selectedBrand && (
            <div className="filter-section">
              <div className='pdown'
                onClick={() => toggleSection('color')}
                aria-controls="color-filter"
                role="button"
                tabIndex={0}
              >
                <span className='catitle'>Filter by Color</span> < SlArrowDown />
              </div>
              {openSections.color && (
                <div className='selectF'>
                  {['Red', 'Black', 'Blue', 'Yellow', 'Green', 'Orange'].map((color) => (
                    <div className='optionFcard' key={color}>
                      <input
                        type="radio"
                        id={color}
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => handleColorChange(color)}
                        className={`color-box ${color.toLowerCase()}`}
                      />
                      <label htmlFor={color}>
                        <span>{color}</span><span>({filteredColors[color] || 0})</span>
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Filter;

