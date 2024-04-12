import React from "react";
import SkillsItem from "./SkillsItem";
import { skills } from "../data/skills";

const Skill = () => {
  return (
    <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Skill</h1>
      {skills.map((skill, idx) => (
        <SkillsItem key={idx} skill={skill} />
      ))}
    </div>
  );
};

export default Skill;
