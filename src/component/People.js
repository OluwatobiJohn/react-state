import React, { useState } from "react";
import { peopleData } from "./peopleData";

const People = props => {
  const [users, setUsers] = useState(peopleData);

  const removeUser = id => {
    let newUsers = users.filter(user => user.id !== id);
    console.log(newUsers);
    setUsers(null);
  };

  const { id, img, name, role } = props;
  return (
    <article className="person">
      <img src={img} alt="Tobi" />
      <div>
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
      <button className="btn" onClick={() => removeUser(id)}>
        Remove
      </button>
    </article>
  );
};

export default People;
