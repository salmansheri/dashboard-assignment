"use client";

import { routes, routesType } from "@/lib/constants/routes";
import { ChevronDown, ChevronRight, Hexagon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className=" text-foreground bg-primary w-full h-full p-6 overflow-y-auto">
      <span className="flex flex-row gap-x-2 items-center text-[#ffffff]">
        <Hexagon size={30} />
        <h1 className="text-xl font-semibold ">Dashboard</h1>
      </span>
      <div className="flex flex-col h-full mt-10  justify-between">
        <div className="flex flex-col gap-10">
          {routes.map((route: routesType) => {
            const isActive =
              route.href === pathname || pathname.includes(route.href);

            return (
              <Link
                className={cn(
                  "flex items-center justify-between p-2",
                  isActive && "bg-blue-300/20 rounded-md text-[#ffffff]"
                )}
                key={route.id}
                href={route.href}
              >
                <span className="flex gap-2 items-center">
                  {<route.icons />}
                  {route.title}
                </span>
                {route.title !== "Dashboard" && <ChevronRight />}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center bg-blue-300/20 p-2 rounded-md -mx-3 cursor-pointer text-[#ffffff]">
          <div className="relative h-8 w-9 rounded-full overflow-hidden">
            <Image
              src="/images/girl.png"
              alt="photo"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="flex items-center justify-between w-full pl-2">
            <div>
              <p className="font-medium text-base">Kalaivani</p>
              <p className="text-xs">Project Manager</p>
            </div>
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
