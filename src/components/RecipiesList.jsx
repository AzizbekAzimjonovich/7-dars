import React from "react";
import { Link } from "react-router-dom";

function RecipiesList({ recipes }) {
  return (
    <div className="grid grid-cols-3 gap-5">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card w-80 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={recipe.img} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{recipe.title}</h2>
            <p className="line-clamp-3">{recipe.method}</p>
            <div className="card-actions">
              <Link
                to={`./SingleRecipe/${recipe.id}`}
                className="btn btn-primary"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipiesList;
