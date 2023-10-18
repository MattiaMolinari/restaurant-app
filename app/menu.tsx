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
      <div className="space-x-2 text-center h-20">
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
      <div className="grid grid-cols-2 gap-10 px-24 justify-items-center content-center">
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
    <article key={food.id} className="py-4 text-justify">
      <figure className="">
        <img
          src={food.image}
          alt={food.name}
          className="object-cover h-96 w-screen border border-white rounded-lg"
        />
      </figure>
      <div className="">
        <header className="flex justify-between py-4 font-bold">
          <h4 className="">{food.name}</h4>
          <h4 className="">${food.price}</h4>
        </header>
        <p className="italic text-sm w-fit ">{food.description}</p>
      </div>
    </article>
  );
}
