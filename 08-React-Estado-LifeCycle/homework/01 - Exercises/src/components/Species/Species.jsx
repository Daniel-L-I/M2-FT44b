import React from "react";
import styledSpecies from "./Species.module.css";

export default function Species({ species, handleSpecies, handleAllSpecies }) {
  // console.log(species);
  return (
    <div className={styledSpecies.divContent}>
      <h2>Species</h2>
      {
      species.map((specie) => (
        <button key={specie} onClick={handleSpecies} value={specie} className={styledSpecies.divContent.button}>
          {specie}
        </button>
      ))
      }
      <button onClick={handleAllSpecies} className={styledSpecies.divContent.button}>All Animals</button>
    </div>
  );
}
