import React from 'react';

// Categories button and now_categories
const Categories = ({categories, filterItems}) => { 
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className='filter-btn'
            key={index}
            onClick={() => filterItems(category)} //event handler
          >
            {category}
          </button>
          )
      })}

    </div>
  )
}

export default Categories;
