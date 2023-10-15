import React from "react";
import Heading from "../../heading";
import Chart from "./chart/chart";

const Overview = () => {
  return (
    <div className="p-6 col-span-5 lg:col-span-3  bg-white shadow rounded-md space-y-4 h-[500px]">
      <div className="flex flex-row items-center justify-between">
        <Heading title="Overview" subtitle="Monthly Earning" />
        <div>
          <select className="text-foreground p-1 rounded-md text-sm">
            <option>Quarterly</option>
            <option>Halferly</option>
            <option>Annually</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Chart />
      </div>
    </div>
  );
};

export default Overview;
