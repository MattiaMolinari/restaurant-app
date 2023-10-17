"use client";
import { menu, categories } from "./data";
import Menu from "./menu";
import HoursAndLocation from "./hours-location";
import { useState } from "react";

export default function Home() {
  const [homePage, setHomePage] = useState();

  return (
    <>
      <img src="logo" alt="Restaurant's logo" />
      <h1>Restaurant{"'"}s name</h1>
      <nav>
        <a href="#menu">MENU</a>
        <a href="#hours-location">HOURS AND LOCATION</a>
        <a href="#reviews">REVIEWS</a>
        <a href="#reservation">RESERVATION</a>
      </nav>
      <p>We are a restaurant that doesn{"'"}t exist </p>
      <Menu id="menu" menu={menu} categories={categories} />
      <HoursAndLocation id="hours-location" />
      <footer>
        <ul>
          <li>Phone number: +00 0000000</li>
          <li>
            <a href="fake@mail.com">Email: fake@mail.com</a>
          </li>
        </ul>
        <p>Created by MATTIA MOLINARI</p>
      </footer>
    </>
  );
}
