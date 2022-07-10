import React from "react";

const Menu = (props) => {
  const menuItems = props.menu.map((x) => (
    <div key = {x.id} className="menu-item">


      <img src={x.img} alt={x.title} className="photo" />

      <div className="item-info">
        <header>
          <h4>{x.title}</h4>
          <h4 className="price">{x.price}</h4>
        </header>
        <p className="item-text">{x.desc}</p>
      </div>
    </div>
  ));
  return <div className="section-center">{menuItems}</div>;
};

export default Menu;
