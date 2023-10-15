import React from "react";
import Heading from "../../heading";
import PieChart from "./chart/pie-chart";

const Customers = () => {
  return (
    <div className="p-3 col-span-5 lg:col-span-2 bg-white space-y-4 rounded-md shadow min-h-[300px] w-full">
      <Heading title="Customers" subtitle="Customers That buy products" />
      <div className="flex items-center justify-center">
        <PieChart />
      </div>
    </div>
  );
};

export default Customers;
