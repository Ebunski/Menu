import React from "react";

const Categories = (props) => {
  const categories = props.menu.map((x) => x.category);

  // let items = ["all"];
  // for (let i in categories) {
  //   if (items.indexOf(categories[i]) === -1) items.push(categories[i]);
  // }

  const items = ["all", ...new Set(categories)];   //new Set returns object of unique values

  const list = items.map((x, index) => (
    <button
      key={index}
      className="filter-btn"
      onClick={() => props.handleFilter(x)}
    >
      {x}
    </button>
  ));

  // console.log(categories);

  return (
    <section>
      <header className="btn-container">{list}</header>
    </section>
  );
};

export default Categories;
