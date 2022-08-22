import React from "react";

export default function NavBar({ FilterItem, menuList }) {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((currEl, indx) => {
            return (
              <button
                key={indx}
                className="btn-group__item"
                onClick={() => FilterItem(currEl )}
              >
                {currEl}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
