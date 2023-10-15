import React from "react";
import StatsInfoCard from "../../cards/stats-info-card";
import { statsData } from "@/lib/constants/data";

const Stats = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 gap-5 h-[150px]">
      {statsData.map((data) => (
        <StatsInfoCard
          key={data.id}
          title={data.title}
          price={data.price}
          icon={data.icon}
          result={data.result}
          color={data.color}
          iconsColor={data.iconsColor}
        />
      ))}
    </section>
  );
};

export default Stats;
