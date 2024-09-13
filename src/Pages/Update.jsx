import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";




const Update = () => {

    const [userFName, setUserFName] = useState("");
    const [userLName, setUserLName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [UserPassword, setUserPassword] = useState("");
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
  
      const newUser = {
        fname: userFName,
        lname: userLName,
        email: userEmail,
        password: UserPassword,
        gender: userGender,
        height: userHeight,
        weight: userWeight,
        course: userCourse,
        role: userRole,
      };
  
      try {
        const response = await fetch(
          `https://66d806e137b1cadd8053106b.mockapi.io/Users/${user}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
          }
        );
        if (response.ok) {
          toastDealing("User registered successfully!", "success");
        } else {
          throw new Error("Failed to register user.");
        }
      } catch (error) {
        toastDealing(error.message, "danger");
      }
    };

    
  
    const fetchCourses = async () => {
      try {
        const response = await fetch("https://66d806e137b1cadd8053106b.mockapi.io/Courses");
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
  




  return (<>
    <div className="container mt-5">
      <h2 className=" text-start">Update Form</h2>
      <form  onSubmit={handleSubmit}>
        <div class="mb-3 mt-5 row">
          <div className="col">
            <label for="exampleInputPassword1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="SomeOne"
              onChange={(e) => setUserFName(e.target.value)}
            />
          </div>
          <div className="col">
            <label for="exampleInputPassword1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Also SomeOne"
              onChange={(e) => setUserLName(e.target.value)}
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="someone@something.whatever"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="********"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <div class="mb-3 row">
          <div className="col">
            <label for="exampleInputPassword1" className="form-label">
              Height
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="155CM"
              onChange={(e) => setUserHeight(e.target.value)}
            />
          </div>
          <div className="col">
            <label for="exampleInputPassword1" className="form-label">
              Weight
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="60Kg"
              onChange={(e) => setUserWeight(e.target.value)}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <div className="col">
            <label for="exampleInputPassword1" className="form-label">
              Gender
            </label>
            <select class="form-select" aria-label="Default select example"  onChange={(e) => setUserGender(e.target.value)}>
              <option selected>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="col">
            <label for="exampleInputPassword1" className="form-label">
              Role
            </label>
            <select class="form-select" aria-label="Default select example"  onChange={(e) => setUserRole(e.target.value)}>
              <option selected>Role</option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
            </select>
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Courses
          </label>
          <select class="form-select" aria-label="Default select example" onChange={(e) => setUserCourses(e.target.value)}>
            <option selected>Courses</option>
            {courses.map((courses, index) => (
                <option key={index} value={courses.C_name}>
                  {courses.C_name}
                </option>
              ))}
          </select>{" "}
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