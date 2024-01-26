import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import image from "../Assets/login.png";
import Divider from "@mui/material/Divider";
import Nav from "../Components/Nav.js";
import Footer from "../Components/Footer.js";
function Login() {
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
              placeholder="Enter email address"
              className="w-96 rounded-lg border border-black p-3"
              id="outlined-basic"
              label="Username"
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Enter password"
              className="w-96 rounded-lg border border-black p-3 mb-6"
              id="outlined-basic"
              label="Password"
            />
            <br />
            <button className="bg-[#4361EE] w-96 text-white py-3   rounded-md font-montserrat">
              <p>Log in</p>
            </button>
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
