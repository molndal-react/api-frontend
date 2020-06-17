import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const App = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:3000/customers")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  const handleLogin = () => {
    if (email && password) {
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <>
      <p>Email</p>
      <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <p>Password</p>
      <input
        value={password}
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      <button onClick={handleLogin}>Login</button>
    </>
  );
};

ReactDOM.render(<App count={0} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
