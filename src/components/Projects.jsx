import React from 'react';
import ProjectItems from './ProjectItems';
import what1 from '../assets/what1.jpeg'
import what2 from '../assets/what2.jpeg'
import school from '../assets/school.png'

const Projects = () => {
  return (
    <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam aperiam accusantium provident officia blanditiis, deleniti, est placeat magni laudantium nam commodi nihil expedita et illum neque quibusdam ab. Temporibus, quod!</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItems img={what1} title={'Whatsapp Rep'} />
        <ProjectItems img={school} title={'School'}/>
        <ProjectItems img={what2} title={'Whatsapp Rep'}/>
      </div>
    </div>
  );
};

export default Projects;