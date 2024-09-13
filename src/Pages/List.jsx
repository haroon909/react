import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [userList, setUserList] = useState([]);

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
            <th scope="col">role</th>
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
                <Link className="btn btn-primary btn-sm m-2" to={`/Update/${user.id}`} >Update</Link>
                <button className="btn btn-danger btn-sm" >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
