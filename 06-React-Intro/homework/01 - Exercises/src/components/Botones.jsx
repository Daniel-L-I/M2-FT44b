import React from "react";

class Botones extends React.Component {
  render() {
    return (
      <div>
        <button id="m1" onClick={() => alert("Tu mensaje")}>Módulo 1</button>
        <button id="m2" onClick={() => alert("Tu mensaje")}>Módulo 2</button>
      </div>
    );
  }
}

export default Botones;
