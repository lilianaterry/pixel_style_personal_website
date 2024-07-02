import React from "react";
import { Link } from "react-router-dom";
import RetroWindowWrapper from "./components/RetroWindowWrapper";
import { recipeData } from "./data/data";

const IndexPage = () => {
  const recipeIds = Object.keys(recipeData);

  return (
    <RetroWindowWrapper activeTab="Index">
      <div className="grid grid-cols-4 gap-4 mb-4">
        {recipeIds.slice(0, 4).map((id) => (
          <Link key={id} to={`/recipe/${id}`}>
            <div className="aspect-square overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <img
                src={recipeData[id].images.color}
                alt={recipeData[id].name}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
      {recipeIds.length > 4 && (
        <div className="grid grid-cols-4 gap-4">
          <Link to={`/recipe/${recipeIds[4]}`}>
            <div className="aspect-square overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <img
                src={recipeData[recipeIds[4]].images.color}
                alt={recipeData[recipeIds[4]].name}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        </div>
      )}
    </RetroWindowWrapper>
  );
};

export default IndexPage;
