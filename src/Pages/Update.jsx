import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {
  const { userId } = useParams();
  console.log(userId);

  const [userFName, setUserFName] = useState("");
  const [userLName, setUserLName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userHeight, setUserHeight] = useState("");
  const [userWeight, setUserWeight] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userCourse, setUserCourses] = useState("");
  const [courses, setCourses] = useState([]);

  const toastDealing = (message, type) => {
    if (type === "danger") {
      toast.error(message, {
        position: "bottom-right",
      });
    } else {
      toast.success(message, {
        position: "bottom-right",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      fname: userFName,
      lname: userLName,
      email: userEmail,
      password: userPassword,
      gender: userGender,
      height: userHeight,
      weight: userWeight,
      course: userCourse,
      role: userRole,
    };

    try {
      const response = await fetch(
        `https://66d806e137b1cadd8053106b.mockapi.io/Users/${userId}`,
        {
          method: "PUT", // Use PUT for updating the user
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedUser),
        }
      );
      if (response.ok) {
        toastDealing("User updated successfully!", "success");
      } else {
        throw new Error("Failed to update user.");
      }
    } catch (error) {
      toastDealing(error.message, "danger");
    }
  };

  const [userSingle, setUserSingle] = useState([]);

  useEffect(() => {
    const fetchUserSingle = async () => {
      try {
        const response = await fetch(
          "https://66d806e137b1cadd8053106b.mockapi.io/Users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setUserSingle(data);
      } catch (error) {
        console.error("Error fetching user", error);
      }
    };
    fetchUserSingle();
  });

  const fetchCourses = async () => {
    try {
      const response = await fetch(
        "https://66d806e137b1cadd8053106b.mockapi.io/Courses"
      );
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      } else {
        throw new Error("Failed to fetch courses.");
      }
    } catch (error) {
      toastDealing(error.message, "danger");
    }
  };

  useEffect(() => {
    fetchCourses();
    }, []);

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-start">Update Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-5 row">
            <div className="col">
              <label htmlFor="exampleInputPassword1" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="SomeOne"
                value={userFName}
                onChange={(e) => setUserFName(e.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Also SomeOne"
                value={userLName}
                onChange={(e) => setUserLName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="someone@something.whatever"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="********"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Height
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="155CM"
                value={userHeight}
                onChange={(e) => setUserHeight(e.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Weight
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="60Kg"
                value={userWeight}
                onChange={(e) => setUserWeight(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Gender
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={userGender}
                onChange={(e) => setUserGender(e.target.value)}
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Role
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
              >
                <option value="">Role</option>
                <option value="admin">Admin</option>
                <option value="student">Student</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Courses
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={userCourse}
              onChange={(e) => setUserCourses(e.target.value)}
            >
              <option value="">Courses</option>
              {courses.map((course, index) => (
                <option key={index} value={course.C_name}>
                  {course.C_name}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Update;
