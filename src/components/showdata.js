import { useSelector } from "react-redux";
import React from "react";

const ShowData = () => {
  const data = useSelector((state) => state.users);
const { users, isLoading, error } = data ;
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {`${user.firstName} ${user.lastName}`}
        </li>
      ))}
    </ul>
  );
};

export default ShowData;
