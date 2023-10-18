/* eslint-disable @next/next/no-img-element */
"use client";
import { lorem, menu, categories, reviews } from "./data";
import Menu from "./menu";
import Reviews from "./review";
import Reservation from "./reservation";
import HoursAndLocation from "./hours-location";
import { useState } from "react";

export default function Home() {
  const [homePage, setHomePage] = useState();

  return (
    <div id="top" className="font-sans bg-black text-white">
      <div className="flex justify-center py-12">
        <figure className="">
          <img className="w-24" src="favicon.ico" alt="Restaurant's logo" />
        </figure>
        <div className="">
          <h1 className=" uppercase font-bold italic text-8xl">Restaurant</h1>
        </div>
      </div>
      <nav className="uppercase font-lg text-center space-x-2">
        <a className="nav-btn" href="#menu">
          menu
        </a>
        <a className="nav-btn" href="#hours-location">
          hours and location
        </a>
        <a className="nav-btn" href="#reviews">
          reviews
        </a>
        <a className="nav-btn" href="#reservation">
          reservation
        </a>
      </nav>
      <div>
        <h4 className="italic text-2xl text-center align-middle py-10">
          We are a restaurant that doesn{"'"}t exist.
        </h4>
        <img
          alt="restaurant pgoto"
          src="/../images/restaurant.jpg"
          className="w-screen"
        />
        <p className="text-sm text-justify px-10 py-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          venenatis augue consequat, scelerisque ex eget, commodo nisl.
          Pellentesque lacus tortor, rutrum quis iaculis quis, pretium vitae
          eros. Phasellus efficitur eleifend luctus. Morbi auctor auctor dui vel
          volutpat. Donec venenatis mattis odio et maximus. In sapien urna,
          posuere sit amet metus eu, accumsan lacinia arcu. Aliquam a accumsan
          ipsum. Sed lobortis nisl sit amet arcu tincidunt, id sagittis odio
          laoreet. Nam quis euismod felis. Vestibulum consequat porta justo, vel
          tristique ex semper id. Proin arcu metus, auctor nec porta non,
          viverra at sapien. Mauris rhoncus tellus ligula, eu venenatis magna
          rhoncus vel. Fusce iaculis lectus vel dui vehicula, at laoreet dolor
          tincidunt.
        </p>
      </div>

      <Menu id="menu" menu={menu} categories={categories} />
      <HoursAndLocation id="hours-location" />
      <Reviews id="reviews" reviews={reviews} />
      <Reservation id="reservation" />
      <footer>
        <ul>
          <li>Phone number: +00 0000000</li>
          <li>
            <a href="fake@mail.com">Email: fake@mail.com</a>
          </li>
        </ul>
        <p>Created by MATTIA MOLINARI</p>
      </footer>
    </div>
  );
}
