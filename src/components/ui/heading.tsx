import React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="text-foreground text-sm font-medium">{subtitle}</p>
    </div>
  );
};

export default Heading;
