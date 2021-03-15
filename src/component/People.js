import React from "react";
import { peopleData } from "./peopleData";

const People = props => {
  const [people, setPeople] = React.useState(peopleData);
  const [number, setNumber] = React.useState(5);

  const removeUser = id => {
    let newUsers = people.filter(user => user.id !== id);
    setPeople(newUsers);
    setNumber(number - 1);
  };
  const removeAll = () => {
    setPeople([]);
    setNumber(0);
  };

  return (
    <>
      <h3>{number} staffs available</h3>
      {people.map(eachPerson => {
        const { id, img, name, role } = eachPerson;
        return (
          <section>
            <article key={eachPerson.id} {...eachPerson} className="person">
              <img src={img} alt="Tobi" />
              <div>
                <h4>{name}</h4>
                <p>{role}</p>
              </div>
              <button className="btn" onClick={() => removeUser(id)}>
                Remove
              </button>
            </article>
          </section>
        );
      })}
      <button className="btn" onClick={removeAll}>
        Remove All
      </button>
    </>
  );
};

export default People;
