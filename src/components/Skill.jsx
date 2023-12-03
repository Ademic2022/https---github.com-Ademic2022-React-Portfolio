import React from 'react';
import SkillsItem from './SkillsItem';

const data = [
    {
        year:2020,
        title:'Backend Developer',
        duration:'2 Years',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium, illo ipsam nostrum repellat quam deleniti at commodi beatae facere praesentium aut perspiciatis magni doloremque est, dolorem quo animi iste.'
    },
    {
        year:2017,
        title:'Software Engineer',
        duration:'3 Years',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium, illo ipsam nostrum repellat quam deleniti at commodi beatae facere praesentium aut perspiciatis magni doloremque est, dolorem quo animi iste.'
    },
    {
        year:2015,
        title:'Content Creator',
        duration:'1 Years',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium, illo ipsam nostrum repellat quam deleniti at commodi beatae facere praesentium aut perspiciatis magni doloremque est, dolorem quo animi iste.'
    },
    {
        year:2012,
        title:'Backend Developer',
        duration:'2 Years',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusantium, illo ipsam nostrum repellat quam deleniti at commodi beatae facere praesentium aut perspiciatis magni doloremque est, dolorem quo animi iste.'
    }
]

const Skill = () => {
  return (
    <div id='skills' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Skill</h1>
        {data.map((item, idx)=>(
            <SkillsItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details} />
        ))}
    </div>
  );
};

export default Skill;