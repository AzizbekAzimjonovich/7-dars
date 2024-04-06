import { useState } from "react";
import { Link } from "react-router-dom";

function Create() {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");

  const addCard = () => {
    const newRecipe = {
      img: imageUrl,
      title: title,
      method: method,
    };

    fetch("http://localhost:3000/recipies", {
      method: "POST",
      body: JSON.stringify(newRecipe),
    })
      .then(() => {
        setImageUrl("");
        setTitle("");
        setMethod("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const isAddButtonDisabled = !imageUrl || !title || !method;

  return (
    <div>
      <div className="card w-96 glass flex gap-10 p-9 ml-auto mr-auto mt-3">
        <input
          type="text"
          placeholder="Image URL*"
          className="input input-bordered w-full max-w-xs"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Food title*"
          className="input input-bordered w-full max-w-xs"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="textarea textarea-bordered"
          placeholder="Method*"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        ></textarea>

        {isAddButtonDisabled ? (
          <button
            className="btn btn-disabled"
            tabIndex="-1"
            role="button"
            aria-disabled="true"
          >
            ADD
          </button>
        ) : (
          <Link to={"/"} className="btn btn-accent" onClick={addCard}>
            ADD
          </Link>
        )}
      </div>
      <Link to={"/"} className="btn btn-accent mt-3">
        Back Home
      </Link>
    </div>
  );
}

export default Create;
