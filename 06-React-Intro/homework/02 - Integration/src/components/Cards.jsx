import Card from "./Card";

export default function Cards({ characters }) {
  return (
    <div>
      {characters.map((char) => (
        <Card
          key={char.id}
          name={char.name}
          status={char.status}
          especies={char.especies}
          gender={char.gender}
          origin={char.origin.name}
          image={char.image}
          onClose={() => alert("Emulamos que se cierra la card")}
        />
      ))}
    </div>
  );
}
  