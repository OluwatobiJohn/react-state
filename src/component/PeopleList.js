import React from "react";

import People from "./People";
import { peopleData } from "./peopleData";

const PeopleList = () => {
  const [users, setUsers] = React.useState(peopleData);
  let number = 5;
  const removeAll = () => {
    number = 0;
  };
  return (
    <section>
      <h3>{number} staffs available</h3>
      {peopleData.map(eachPerson => {
        return <People key={eachPerson.id} {...eachPerson}></People>;
      })}
      <button className="btn" onClick={removeAll}>
        Remove All
      </button>
    </section>
  );
};

export default PeopleList;
