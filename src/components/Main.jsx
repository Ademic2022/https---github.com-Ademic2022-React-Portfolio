import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { userInfo } from "../data/user";
import { createSequenceFromRoles } from "../utils/helperFunctions";

const Main = () => {
  //create the sequence array
  const sequenceFromRoles = createSequenceFromRoles(userInfo.roles, 2000);

  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="/images/bg-img.jpg"
        alt="Background img"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I am {userInfo.name}
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I am a
            <TypeAnimation
              sequence={sequenceFromRoles}
              wrapper="span"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href={userInfo.socials.twitter || ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} className="cursor-pointer" />
            </a>
            <a
              href={userInfo.socials.facebook || ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} className="cursor-pointer" />
            </a>
            <a
              href={userInfo.socials.linkedin || ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} className="cursor-pointer" />
            </a>
            <a
              href={userInfo.socials.github || ""}
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
