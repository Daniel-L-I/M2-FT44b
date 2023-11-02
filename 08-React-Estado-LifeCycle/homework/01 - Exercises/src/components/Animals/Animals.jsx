import React from "react";
import styledAnimals from "./Animals.module.css";

export default class Animals extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className={styledAnimals.conteainer}>
        {this.props.animals.map((animal) => (
          <div key={animal.name} className={styledAnimals.conteainerAnimals}>
            <h5>{animal.name}</h5>
            <img src={animal.image} alt={animal.name} width={"300px"} />
            <span>{animal.specie}</span>
          </div>
        ))}
      </div>
    );
  }
}
