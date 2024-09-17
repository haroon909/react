import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [userList, setUserList] = useState([]);

  // Fetching the user list when the component mounts
  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await fetch(
          "https://66d806e137b1cadd8053106b.mockapi.io/Users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setUserList(data);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };

    fetchUserList();
  }, []);

  // Function to delete a user
  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `https://66d806e137b1cadd8053106b.mockapi.io/Users/${userId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Remove the user from the user list after successful deletion
        setUserList(userList.filter((user) => user.id !== userId));
      } else {
        throw new Error("Failed to delete user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container mt-5">
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Course</th>
            <th scope="col">Gender</th>
            <th scope="col">Height</th>
            <th scope="col">Weight</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.fname} {user.lname}</td>
              <td>{user.email}</td>
              <td>{user.course}</td>
              <td>{user.gender}</td>
              <td>{user.height}</td>
              <td>{user.weight}</td>
              <td>{user.role}</td>
              <td>
                <Link className="btn btn-primary btn-sm m-2" to={`/Update/${user.id}`}>
                  Update
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
