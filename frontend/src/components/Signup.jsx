import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./SingupValidation";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-block vh-100">
        <div className="bg-white p-3 rounded-0 w-25">
          <h2>Sing-Up</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control rounded-0"
                name="name"
                onChange={handleInput}
              />
              {errors.name && (
                <span className="text-danger"> {errors.name}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control rounded-0"
                name="email" 
                onChange={handleInput}
              />
              {errors.email && (
                <span className="text-danger"> {errors.email}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control rounded-0"
                name="password"
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-danger"> {errors.password}</span>
              )}
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              <strong>Sign up</strong>
            </button>
            <p>You are agree to out terms and policies</p>
            <Link
              to="/"
              className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
