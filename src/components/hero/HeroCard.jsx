import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagePath = `/assets/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row g-0 ">
          <div className="col-4 ">
            <img src={imagePath} className="img-fluid row-12 " alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>
                {
                    (alter_ego!== characters) && <p className="text-muted">{characters}</p>
                }
                <p className="card-text">
                    <small className="text-muted"> {first_appearance}</small>
                </p>

                <Link to={`/hero/${id}`}>Màs...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
