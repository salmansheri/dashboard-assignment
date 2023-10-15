import {
  BadgePercent,
  Box,
  HelpCircle,
  Key,
  LucideIcon,
  Touchpad,
  UserSquare2,
} from "lucide-react";

export type routesType = {
  id: number;
  title: string;
  href: string;
  icons: LucideIcon;
};

export const routes: routesType[] = [
  {
    id: 1,
    title: "Dashboard",
    href: "/",
    icons: Key,
  },
  {
    id: 2,
    title: "Product",
    href: "/product",
    icons: Box,
  },
  {
    id: 3,
    title: "Customer",
    href: "/customer",
    icons: UserSquare2,
  },
  {
    id: 4,
    title: "Income",
    href: "/income",
    icons: Touchpad,
  },
  {
    id: 5,
    title: "Promote",
    href: "/promote",
    icons: BadgePercent,
  },
  {
    id: 6,
    title: "Help",
    href: "/help",
    icons: HelpCircle,
  },
];
