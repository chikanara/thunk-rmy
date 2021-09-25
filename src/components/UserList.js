import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../js/action/usersAction";
import UserCard from "./UserCard";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const isLoading = useSelector((state) => state.userReducer.isLoading);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  if (isLoading) {
    return (
      <div className="text-center">
          <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      </div>
    );
  } else
    return (
      <div className="d-flex justify-content-center flex-wrap">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    );
};

export default UserList;
