import React, { useEffect } from "react";
import "./Style/Login.css";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { useNavigate } from "react-router-dom";

const Login = (props) => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    rollNo: "",
    password: "",
  });

  const handle = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  useEffect(() => {
    const gettoken = Cookies.get("token");
    if (gettoken) {
      props.setLogin(true);
      navigate("/home");
      // window.location.href = "https://www.youtube.com";
      // alert("Hello");
    }
  }, []);

  const clickHandel = () => {
    const options = {
      url: "http://localhost:3001/StudentLogin",
      method: "POST",
      data: user,
    };
    axios(options)
      .then((response) => {
        console.log(response.data.data);
        // let token = response.data.data.token;
        const { rollNo, email, token } = response.data.data;
        // console.log("::::::", rollNo, email);
        props.setcurrent({ rollNo: rollNo, email: email });

        const expirationTime = new Date();
        expirationTime.setSeconds(expirationTime.getSeconds() + 1000000);
        Cookies.set("token", token, { expires: expirationTime });
        props.setLogin(true);
        // localStorage.setItem('token', token);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <>
      <div className="login-box">
        <h4>Student Login</h4>
        <div className="indiv">
          <h6>Roll Number</h6>
          <input
            type="text"
            name="rollNo"
            value={user.rollNo}
            required=""
            onChange={handle}
          />

          <h6>Password</h6>
          <input
            type="password"
            name="password"
            value={user.password}
            required=""
            onChange={handle}
          />
        </div>

        <button className="butt" onClick={clickHandel}>
          Login
        </button>
      </div>
    </>
  );
};
export default Login;
