"use client";

import { chartData } from "@/lib/constants/data";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <BarChart width={500} height={400} data={chartData}>
      <Bar dataKey="Sales" fill="#5a32ea" />
      <XAxis dataKey="name" />
    </BarChart>
  );
};

export default Chart;
