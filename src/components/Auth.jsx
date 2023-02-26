import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../ui/NavBar";

function Login(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function handleInput(e) {
    const { name, value } = e.target;
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function submit(e) {
    e.preventDefault();
    var details = {
      email: user.email,
      password: user.password,
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    console.log(formBody);
    fetch("/api/auth/" + props.method, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        navigate("/");
      }
    });
  }

  return (
    <Fragment>
      <NavBar />

      <form className="auth-form" onSubmit={submit}>
        <h1 className="text-center">{props.method.toUpperCase()}</h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control my-3"
            onChange={handleInput}
            name="email"
            value={user.email}
            placeholder="email"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            className="form-control my-3"
            onChange={handleInput}
            name="password"
            value={user.password}
            placeholder="password"
            type={props.method === "login" ? "password" : "text"}
          />
        </div>
        <div className="text-center mt-5">
          <button className="btn btn-dark btn-lg" onMouseDown={submit}>
            {props.method.toUpperCase()}
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default Login;
