import { useState } from "react";
import data from "./data.js";
import List from "./List.jsx";
const App = () => {
  const [people, setPeople] = useState(data);

  const clearPeople = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button type="button" className="btn btn-block" onClick={clearPeople}>
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
