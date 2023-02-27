import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const myData = [
    { id: 1, name: "Ishaan" },
    { id: 2, name: "Bansal" },
    { id: 3, name: "Vin" },
    { id: 4, name: "Ayak" },
  ];

  // const addItem = (id) => {
  //   let newPeople = people.fill((person) => person.id);
  //   setPeople(newPeople);
  // };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        console.log(people);
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
            {/* <button onClick={() => addItem(id)}>add</button> */}
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
      <button className="btn" onClick={() => setPeople([myData])}>
        add all
      </button>
    </>
  );
};

export default UseStateArray;
