import React, { useState } from "react";
import MenuCard from "../Components/MenuCard";
import NavBar from "../Components/Navbar";
import Menu from "../MenuApi";

import "../Pages/styleSheet.css";

const UniqueCategory = [
  ...new Set(
    Menu.map((currEl) => {
      return currEl.category;
    })
  ),
  "All",
];
export default function Resturant() {
  const [menuCard, setMenuCard] = useState(Menu);
  const [menuList, _setMenuLlist] = useState(UniqueCategory);
  console.log(Menu);
  const FilterItem = (category) => {
    if (category === "All") {
      setMenuCard(Menu);
      return;
    }
    const updatedList = Menu.filter((value) => {
      return value.category === category;
    });
    setMenuCard(updatedList);
  };
  return (
    <>
      <NavBar FilterItem={FilterItem} menuList={menuList} />

      <MenuCard menuCard={menuCard} />
    </>
  );
}
