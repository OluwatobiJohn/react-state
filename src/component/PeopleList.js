// import React from "react";

// import People from "./People";
// import { peopleData } from "./peopleData";

// const PeopleList = () => {
//   const [users, setUsers] = React.useState(peopleData);
//   let number = 5;
//   const removeAll = () => {
//     setUsers([]);
//   };
//   return (
//     <section>
//       <h3>{number} staffs available</h3>
//       {users.map(eachUser => {
//         return <People key={eachUser.id} {...eachUser}></People>;
//       })}
//       <button className="btn" onClick={removeAll}>
//         Remove All
//       </button>
//     </section>
//   );
// };

// export default PeopleList;
