import React from "react";
import Botones from "./Botones.jsx";

const studentName = "Daniel";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  // * con esta variable se puede acer lo mismo 
  // const listItems = techSkills.map((techSkills) => <li>{techSkills}</li>);
  return (
    <div>
      <h1>Primer Lorem ipsum</h1>
      <h3>{studentName}</h3>
      <ul>{techSkills.map(value =><li>{value}</li>)}</ul>
      {/* <Botones alerts={}/> */}
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
// export default Bienvenido;