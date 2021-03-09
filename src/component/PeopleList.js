import React from "react";

import People from "./People";
import { peopleData } from "./peopleData";

const PeopleList = () => {
  return (
    <section>
      {peopleData.map(eachPerson => {
        return <People key={eachPerson.id} {...eachPerson}></People>;
      })}
    </section>
  );
};

export default PeopleList;
