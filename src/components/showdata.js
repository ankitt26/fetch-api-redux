import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchdata } from "../redux/UsersSlice";

const ShowData = () => {
  const data = useSelector((state) => state.users);
  const { users, isLoading, error } = data;
  console.log(users, isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdata());
    console.log(users, isLoading);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (users.length !== 0) {
    return (
      <ul>
        {users.map((user, id) => (
          <li
            key={`user${id}`}
            id={`user${id}`}
          >{`${user.name.first} ${user.name.last}`}</li>
        ))}
      </ul>
    );
  }
};

export default ShowData;
