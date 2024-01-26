import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import image from "../Assets/login.png";
import Divider from "@mui/material/Divider";
import Nav from "../Components/Nav.js";
import Footer from "../Components/Footer.js";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
  if (userEmail && userPassword) {
    fetch('https://brainiac-mcgk.onrender.com/login', {
      method: "POST",
      mode: "cors",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({ "email": userEmail, "password": userPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.error!=="Unauthorised Access"){
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.error(error)
      });
  }
  };

  return (
    <div className="flex flex-col">
      <div className="h-screen flex items-center justify-center">
      <header>
        <Nav page="login"/>
      </header>
      <div className=" p-24">
        <img src={image} alt="Brainiac" />
      </div>
      <div className="p-36">
        <div className="py-24 px-14 rounded-lg text-center">
          <Typography variant="h3">
            <h1 className="p-0 font-montserrat font-black text-slate-800">
              Welcome Back
            </h1>
          </Typography>
          <Typography>
            <h1 className="font-montserrat font-extralight pt-2 pb-8 text-slate-800">
              Access Your Virtual Classroom and Learning Resources
            </h1>
          </Typography>
          <form>
            <input
              type="text"
              value={userEmail}
              onChange={(e) => {
                setEmail(e.target.value)
                if (!e.target.value.includes('@')) {
                  setEmailError('Please enter a valid email address.');
                } else {
                  setEmailError('');
                }}}
              placeholder="Enter email address"
              className="w-96 rounded-lg border border-black p-3"
              id="outlined-basic"
              label="Username"
              required
            />
            <br />
            {emailError && <p>{emailError}</p>}
            <br />
            <input
              type="text"
              value={userPassword}
              onChange={(e) => {setPassword(e.target.value)
                if (e.target.value.length < 6) {
                  setPasswordError('Please enter a password with at least 6 characters.');
                } else {
                  setPasswordError('');
                }}}
              placeholder="Enter password"
              className="w-96 rounded-lg border border-black p-3 mb-6"
              id="outlined-basic"
              label="Password"
              required
            />
            <br />
             {passwordError && <p>{passwordError}</p>}
              <NavLink ><p className="bg-[#4361EE] w-96 text-white py-3 ml-8 rounded-md font-montserrat" onClick={handleLogin}>Log in</p></NavLink>
            <Divider className="mx-16 pt-4 pb-4" />
            <button className="bg-[#1E1E1E] w-96 text-white mt-7 py-3 px-5 rounded-md font-montserrat">
              <AccountCircleIcon /> Login as Administrator
            </button>
          </form>
        </div>
      </div>
      </div>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default Login;
