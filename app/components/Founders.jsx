import Image from "next/image";
import React from "react";
import darshil from "../public/founders/darshil.png";
import { GoArrowUpRight } from "react-icons/go";

const founders = [
  { name: "Pranjal", designation: "Overall Lead", image: darshil },
  { name: "Darshil", designation: "Technical Lead", image: darshil },
  { name: "Amogh", designation: "Media Lead", image: darshil },
];

function Founders() {
  return (
    <div className='max-w-[1000px] mx-auto px-5'>
      <div className='flex flex-col md:flex-row justify-between items-center p-4 mb-3'>
        <h1 className='mb-3 text-2xl sm:text-3xl font-semibold capitalize md:w-[200px] md:mb-0'>Meet the Founders</h1>
        <p className='max-w-[265px] text-sm text-gray-300'>
          {
            "A team of passionate visionaries united by creativity, leadership, and a shared mission to shape a vibrant, inclusive community at Vertex."
          }
        </p>
      </div>
      <div className='flex flex-col md:flex-row md:gap-8 md:justify-center md:items-center'>{founders.map((d)=>(
        <div key={d.name} className='cursor-pointer w-[300px]'>
          <Image src={d.image} alt={d.name} className='w-full rounded-2xl'/>
          <div className='relative bottom-18 flex justify-between items-center p-4 '>
            <div className='flex flex-col'>
              <p className='text-md font-semibold'>{d.name}</p>
              <p className='text-purple-400'>{d.designation}</p>
            </div>
            <button className='cursor-pointer rounded-full p-1 text-purple-400 border border-purple-400 hover:bg-purple-300 hover:text-black'><GoArrowUpRight size={20}/></button>
          </div>
        </div>

      ))}</div>
    </div>
  );
}

export default Founders;
