import React from "react";
import Nav from "../Components/Nav";
import { Typography } from "@mui/material";
import Logo from "../Assets/landing.png";
import Footer from "../Components/Footer";
import {
  ClassRounded,
  LeaderboardRounded,
  SmartToyRounded,
  TaskAltRounded,
  TextSnippetRounded,
} from "@mui/icons-material";
export const Landing = () => {
  return (
    <>
      <header>
        <Nav page="login" />
      </header>
      <div className="flex pt-24 w-screen flex-row items-center  justify-around bg-white">
        <div className="flex flex-col">
          <Typography
            variant="h2"
            sx={{
              color: "black",
              fontWeight: "bolder",
              lineHeight: "1.5",
              fontFamily: "montserrat",
            }}
          >
            Elevate Your Online
            <br /> Learning Experience
            <br /> with{" "}
            <Typography variant="p" sx={{ color: "#4361EE" }}>
              Brainiac
            </Typography>
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: "montserrat" }}>
            Revolutionize How Institutions Teach
            <br /> and Learn
          </Typography>
          <button className="my-5 btn bg-[#4361EE] w-36 font-montserrat text-white">
            Get Started
          </button>
        </div>
        <img src={Logo} alt="landing_page" height={500} width={800} />
      </div>
      <div className="flex flex-col w-screen items-center content-center py-24">
        <Typography
          variant="h2"
          className="text-black"
          sx={{ fontFamily: "montserrat", fontWeight: "bolder" }}
        >
          Why Choose Us?
        </Typography>
        <Typography
          variant="h6"
          className="p-2"
          sx={{ fontFamily: "montserrat" }}
        >
          Our Commitment to Educational Excellence
        </Typography>
      </div>
      <div className="flex flex-row justify-center content-center">
        <div className="rounded-2xl text-white bg-[#4361EE] bg-gradient-to-b from-[#6c45fe] to-[#604efa] flex flex-col items-center content-center py-8 px-16 m-10">
          <ClassRounded sx={{ width: "100px", height: "100px" }} />
          <Typography variant="h4">Online Class</Typography>
          <Typography variant="h5">with Video Conferencing</Typography>
        </div>
        <div className="rounded-2xl text-white bg-[#4361EE] bg-gradient-to-b from-[#6c45fe] to-[#604efa] flex flex-col items-center content-center py-8 px-16 m-10">
          <SmartToyRounded sx={{ width: "100px", height: "100px" }} />
          <Typography variant="h4">Companion Bot</Typography>
          <Typography variant="h5">with Brainiac AI</Typography>
        </div>
        <div className="rounded-2xl text-white bg-[#4361EE] bg-gradient-to-b from-[#6c45fe] to-[#604efa] flex flex-col items-center content-center py-8 px-24 m-10">
          <TaskAltRounded sx={{ width: "100px", height: "100px" }} />
          <Typography variant="h4">Online Tests</Typography>
          <Typography variant="h5">and Assignments</Typography>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="rounded-2xl text-white bg-[#4361EE] bg-gradient-to-b from-[#6c45fe] to-[#604efa] flex flex-col items-center content-center py-8 px-16 m-10">
          <TextSnippetRounded sx={{ width: "100px", height: "100px" }} />
          <Typography variant="h5">Automated Lecture Notes</Typography>
          <Typography variant="h6">with Brainiac AI</Typography>
        </div>
        <div className="rounded-2xl text-white bg-[#4361EE] bg-gradient-to-b from-[#6c45fe] to-[#5E4FF9] flex flex-col items-center content-center py-8 px-24 m-10">
          <LeaderboardRounded sx={{ width: "100px", height: "100px" }} />
          <Typography variant="h5">Student Dashboard</Typography>
          <Typography variant="h6">with Video Conferencing</Typography>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-36">
        <Typography
          variant="h2"
          className="text-black"
          sx={{ fontFamily: "montserrat",
        fontWeight:'bolder' }}
        >
          How it works?
        </Typography>
        <Typography
          variant="h6"
          className="pb-36"
          sx={{ fontFamily: "montserrat" }}
        >
          Discover the Brainiac Workflow
        </Typography>
        <video
          src="#"
          className="p-24 border-2 border-black rounded-lg"
          height="200px"
          width="700px"
        />
      </div>
      <div className="flex flex-row justify-between bg-[#6E44FF] text-white rounded-xl px-6 py-10 mx-20 my-28">
        <div className="flex flex-col ">
          <Typography
            variant="h4"
            sx={{ fontFamily: "albert", fontWeight: "bolder" }}
          >
            Getting Started with
            <br />
            <u>Brainiac</u> today
          </Typography>
          <Typography
            className="pt-5"
            variant="h6"
            sx={{ fontFamily: "montserrat" }}
          >
            Revolutionize How Institutions Teach and Learn
          </Typography>
        </div>
        <div className="flex flex-col align-middle justify-center">
          <button className="btn glass bg-white text-[#6E44FF] text-2xl">
            Request a Demo
          </button>
        </div>
      </div>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </>
  );
};
