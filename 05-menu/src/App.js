import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'
// Get all unique categories : ['all', 'breakfast', 'lunch', 'shakes']
const allCategories = ['all', ...new Set(items.map((item) => item.category))]



function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filteritems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu section">
        
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        <Categories categories={allCategories} filterItems={filteritems} />

        <Menu items={menuItems} />

      </section>
    </main>
  )
}

export default App;
