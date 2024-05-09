import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import myImg from "../assets/my-img.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className=" w-full bg-gradient-to-b from-black to-gray-800 flex-1"
      style={{
        minHeight: "calc(100vh - 5rem)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{ height: "100%" }}
        className=" h-full mx-auto flex flex-col justify-center items-center px-4 md:flex-row"
      >
        <div
          className=" md:w-6/12 xs:w-12/12 text-white flex flex-col items-center ml-6">
          <h2 className=" font-bold text-4xl md:text-7xl text-center">
            I am a Frontend {" "}
            <span
              className="font-bold text-4xl md:text-7xl "
              style={{ color: "yellow" }}
            >
            Developer
            </span>
          </h2>
          <p
            className=" py-4 text-gray-400 text-xs: "
            style={{ fontSize: "1rem", maxWidth: "80%" }}
          >
Hello and welcome to my Website! I'm Shivam Soni, a dedicated front-end web developer with a passion for crafting engaging user experiences. Currently pursuing my BCA (Honours) from GLA University Mathura, I'm deeply immersed in the world of web development, continually refining my skills and exploring new technologies.          </p>
          <div>
            <div className="flex flex-row">
            <button className="group flex flex-row items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 px-6 py-2">
              <Link to="Portfolio" smooth duration={500}>Portfolio</Link>
              <span>
                <MdKeyboardArrowRight
                  size={25}
                  className=" group-hover:rotate-90 duration-300 "
                />
              </span>
            </button>
            <button className="group flex flex-row items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 px-6 py-2 mx-5">
              <Link to="Contact" smooth duration={500}>Want to Hire?</Link>
              <span>
                <MdKeyboardArrowRight
                  size={25}
                  className=" group-hover:rotate-90 duration-300 "
                />
              </span>
            </button>
            </div>
          </div>
        </div>
        <div className=" h-full md:w-5/12 xs:w-12/12 mt-8" id="hero">
          <img
            className="m-auto rounded-2xl hover:scale-110 duration-[400ms]"
            style={{ height: "50vh", aspectRatio: "45:50", maxWidth: "auto" }}
            src={myImg}
            alt="My Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
