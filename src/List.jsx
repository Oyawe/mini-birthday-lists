import React from "react";
import Person from "./Person";

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        // return <Person key={person.id} {...person} />;
        return (
          <Person
            key={person.id}
            image={person.image}
            name={person.name}
            age={person.age}
          />
        );
      })}
    </section>
  );
};

export default List;
