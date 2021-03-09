import React from "react";

const People = props => {
  const { img, name, role } = props;
  return (
    <article className="person">
      <img src={img} alt="Tobi" />
      <div>
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </article>
  );
};

export default People;
