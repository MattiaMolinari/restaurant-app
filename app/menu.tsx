import { food } from "./data";
import Image from "next/image";
import { useState } from "react";

// menu component with possibility to filter items
export default function Menu({
  id,
  menu,
  categories,
}: {
  id: string;
  menu: Array<food>;
  categories: Array<string>;
}) {
  const [menuShow, setMenuShow] = useState(menu);

  function filterCategories(category: string) {
    if (category === "all") {
      setMenuShow(menu);
      return;
    }
    const newMenu = menu.filter((food) => food.category === category);
    setMenuShow(newMenu);
  }

  return (
    <>
      <h2 id={id} className="section-title">
        MENU
      </h2>
      <div className="underline"></div>
      <div className="categories-container">
        {categories.map((category) => {
          return (
            <button
              className="categories-btn"
              key={category}
              onClick={() => filterCategories(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="menu-section">
        {menuShow.map((food) => {
          // eslint-disable-next-line react/jsx-key
          return <Food food={food} />;
        })}
      </div>
    </>
  );
}

// food component
function Food({ food }: { food: food }) {
  return (
    <article key={food.id} className="menu-item">
      <figure>
        <img src={food.image} alt={food.name} className="photo" />
      </figure>
      <div className="item-info">
        <header>
          <h4>{food.name}</h4>
          <h4 className="price">${food.price}</h4>
        </header>
        <p className="item-text">{food.description}</p>
      </div>
    </article>
  );
}
