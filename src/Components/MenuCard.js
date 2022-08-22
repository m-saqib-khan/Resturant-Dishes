import React from "react";

export default function MenuCard({ menuCard }) {
  return (
    <>
      <section className="main-card-container">
        {menuCard.map((currEl) => {
          return (
            <div className="card-container" key={currEl.id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">
                    {currEl.id}
                  </span>
                  <span className="card-author subtle">{currEl.category}</span>
                  <h2 className="card-title">{currEl.name}</h2>
                  <span className="card-description subtle">
                    {currEl.description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img src="" alt="images" className="card-media" />
                <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
