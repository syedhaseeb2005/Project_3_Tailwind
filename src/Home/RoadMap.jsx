import React from "react";

const RoadMap = () => {
  return (
    <div
      id="roadmap"
      className="max-w-7xl lg:-screen mb-5 relative lg:mt-[500px] mx-auto sm:px-10 lg:px-24"
    >
      <div className="sm:flex md:justify-center md:gap-20 sm:items-center sm:gap-0 lg:gap-36">
        <div>
          <h1 className="lg:text-7xl text-5xl text-center">ROADMap</h1>
        </div>
        <div className="flex mx-5  lg:mx-5 flex-col items-center justify-center gap-2">
          <div className="flex lg:gap-10 gap-5  sm:w-full items-center border sm:transform sm:skew-x-[20deg] p-4 sm:p-2">
            <h1 className="text-3xl sm:skew-x-[-20deg]">#01</h1>
            <h2 className="sm:skew-x-[-20deg]  text-sm sm:text-xs">
              Contract Creation <br /> Prelaunch Marketing <br /> Launching
              $EBOT Token
            </h2>
          </div>

          <div className="flex gap-10 lg:w-full sm:ml-9 sm:w-full lg:ml-16 items-center border sm:transform sm:skew-x-[20deg] p-4">
            <h1 className="text-3xl sm:skew-x-[-20deg]">#02</h1>
            <h2 className="sm:skew-x-[-20deg] text-sm">DASHBOARD REALEASE</h2>
          </div>
          <div className="flex gap-10 lg:w-full sm:w-full sm:ml-20 lg:ml-28 items-center border sm:transform sm:skew-x-[20deg] p-4">
            <h1 className="text-3xl lg:skew-x-[-20deg]">#03</h1>
            <h2 className="lg:skew-x-[-20deg] text-sm">Marketing Campaign</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
