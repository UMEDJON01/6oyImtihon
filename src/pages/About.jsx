import { useState } from "react";
import { Form } from "react-router-dom";
import SubmitBtn from "../components/SubmitBtn";

function About() {
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [method, setMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="align-content">
      <h1 className="text-center font-bold text-3xl -mt-4 ">Add New Recipe</h1>

      <form className="grid lg:ml-72 ml-4" onSubmit={handleSubmit}>
        <label htmlFor="" className="font-medium mb-1">
          Title:
        </label>
        <input
          type="text"
          placeholder="Enter your meal name"
          className="input input-bordered max-w-lg mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="" className="font-medium mb-1">
          Cooking Time:
        </label>
        <input
          type="text"
          placeholder="Enter preparation time of your meal"
          className="input input-bordered max-w-lg mb-2"
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
        />

        <label htmlFor="" className="font-medium mb-1">
          Ingredients:
        </label>
        <input
          type="text"
          placeholder="Enter ingredients of meal"
          className="input input-bordered max-w-lg mb-2"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <label htmlFor="imageUrl" className="font-medium mb-1">
          Image URL:
        </label>
        <input
          type="url"
          id="imageUrl"
          placeholder="Enter imgage URL"
          className="input input-bordered  max-w-lg mb-2"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <label className="font-medium mb-1">Method:</label>
        <textarea
          className="textarea textarea-bordered max-w-lg mt-2 resize-none"
          placeholder="Enter method of meal"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        ></textarea>

        <div className="flex w-full mt-3">
          <button type="submit" className="btn w-64 btn-primary ">
            Apply
          </button>
          <button type="button" className="btn w-64  btn-success">
            Preview
          </button>
        </div>
      </form>
    </div>
  );
}

export default About;
