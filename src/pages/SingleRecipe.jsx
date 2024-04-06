import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SingleRecipe() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/recipies/" + id)
      .then((data) => data.json())
      .then((recipe) => {
        setRecipe(recipe);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="ml-auto mr-auto">
      {recipe && (
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={recipe.img}
            alt=""
            width="384"
            height="512"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">{recipe.method}</p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {recipe.title}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                cookingTime : {recipe.cookingTime}
              </div>
              <div className="flex">
                <p className="mr-10">ingredients :</p>
                <div className="text-slate-700 dark:text-slate-500 flex">
                  {recipe.ingredients.map((item, index) => (
                    <p className="mr-10" key={index}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </figcaption>
          </div>
        </figure>
      )}
    </div>
  );
}

export default SingleRecipe;
