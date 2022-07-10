import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [filter, setFilter] = useState([...items]);

  function handleFilter(category) {
    if (category === "all") return setFilter(items);
    setFilter(items.filter((x) => x.category === category));
  }

  return (
    <section className="menu">
      <div className="title">
        <h2> Our Menu</h2>
        <div className="underline"></div>
      </div>

      <Categories menu={items} handleFilter={handleFilter} />
      <Menu menu={filter} />
    </section>
  );
}

export default App;
