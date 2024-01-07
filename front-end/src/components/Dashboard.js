import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="mx-6 text-xs flex font-family:'Times New Roman' mt-5 font-bold">
        <div className="p-1 flex-none md:p-2 border border-black border-2 rounded-lg">
            <Link to="/translate">translate</Link>
        </div>
        <div className="p-1 ml-2 flex-none md:p-2 border-black border-2 rounded-lg">
            <Link to="/paraphrase">paraphrase</Link>
        </div>
        <div className="p-1 ml-2 flex-none md:p-2 border-black border-2 rounded-lg">
            <Link to="/summarize">summarize</Link>
        </div>

        <div className="grow "></div>
        {/* <div className="flex-none p-1">d</div> */}
      </div>
    </>
  );
};

export default Dashboard;
