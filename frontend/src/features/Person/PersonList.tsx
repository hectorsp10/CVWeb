import { useEffect, useState } from "react";
import { getPersons } from "../../api/personApi";

export default function PersonList() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPersons().then(setPeople);
  }, []);

  return (
    <div>
      <h2 className="">Personas</h2>
      <ul>
        {people.map((p: any) => (
          <li key={p.id}>{p.nombre} - {p.edad} años</li>
        ))}
      </ul>
    </div>
  );
}