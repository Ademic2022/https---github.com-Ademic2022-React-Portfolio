import React from "react";
import ProjectItems from "./ProjectItems";
import what1 from "../assets/what1.jpeg";
import what2 from "../assets/what2.jpeg";
import school from "../assets/school.png";
import sms from "../assets/sms.png";
import famec from "../assets/famec.png";

const Projects = () => {
  return (
    <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Explore a showcase of my recent projects, each crafted with passion and
        creativity. From web applications simplifying school management to
        innovative WhatsApp reply automation tools, these projects reflect my
        dedication to building impactful solutions. Scroll down to get a glimpse
        of my work.
      </p>
      <div className="grid sm:grid-cols-3 gap-12">
        <ProjectItems img={what1} title={"Whatsapp Replicate"} />
        <ProjectItems img={school} title={"School Application"} />
        <ProjectItems img={what2} title={"Whatsapp Replicate"} />
        <ProjectItems
          img={famec}
          title={"Famec"}
          url={
            "https://ademic.hashnode.dev/famec-your-ally-for-achieving-harmony-in-your-home"
          }
        />
        <ProjectItems
          img={sms}
          title={"School Management"}
          url={"https://school-management-system-ui.vercel.app/"}
        />
      </div>
    </div>
  );
};

export default Projects;
