import { ArrowDown, ArrowUp, type LucideIcon } from "lucide-react";
import React from "react";

interface StatsInfoCardProps {
  title: string;
  price: number;
  icon: LucideIcon;
  result: number;
  color: string;
  iconsColor: string;
}

const StatsInfoCard: React.FC<StatsInfoCardProps> = ({
  title,
  price,
  icon: Icon,
  result,
  color,
  iconsColor,
}) => {
  return (
    <div className=" bg-white flex p-3 items-center rounded-md h-full">
      <div className="w-1/2">
        <div
          className="h-24 w-24 rounded-full  flex items-center justify-center"
          style={{
            backgroundColor: color,
          }}
        >
          <Icon size={50} color={iconsColor} />
        </div>
      </div>
      <div className="w-1/2">
        <p>{title}</p>
        <h1 className="text-xl font-semibold">${price}k</h1>
        <p>
          {result > 10 ? (
            <span className="text-xs text-green-500 flex items-center">
              <ArrowUp size={15} />
              {result}% this month
            </span>
          ) : (
            <span className="text-xs text-red-500 flex items-center ">
              <ArrowDown size={15} />
              {result}% this month
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default StatsInfoCard;
