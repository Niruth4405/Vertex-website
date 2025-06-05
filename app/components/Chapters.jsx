import React from "react";

function Chapters() {
  return (
    <div className="max-w-[1000px] mx-auto px-5">
      <div className='cursor-pointer flex justify-between'>
        <h1 className="capitalize mb-3 text-xl sm:text-3xl font-semibold w-[400px] md:mb-0">
          The latest chapters in our vertex journey
        </h1>
        {/* <button className='rounded bg-purple-950 text-purple-800'>view all</button> */}
      </div>
    </div>
  );
}

export default Chapters;
