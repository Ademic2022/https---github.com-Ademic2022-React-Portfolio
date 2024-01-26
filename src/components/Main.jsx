import React from "react";
import backgroundImage from "../assets/bg-img.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={backgroundImage}
        alt="Background img"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I am Michael Adeeyo
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I am a
            <TypeAnimation
              sequence={[
                " Software Engineer",
                2000,
                " Backend Developer",
                2000,
                " Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://twitter.com/ademic_code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} className="cursor-pointer" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/ademic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} className="cursor-pointer" />
            </a>
            <a
              href="https://github.com/ademic2022"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
