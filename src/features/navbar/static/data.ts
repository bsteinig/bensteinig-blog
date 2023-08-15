import { Icon, IconChartAreaLine, IconCrane, IconSchool } from "@tabler/icons-react";

interface navbarItem {
    label: string;
    value: string;
    color: string;
    href: string;
    icon: Icon;
}

export const navbarData : navbarItem[] = [
    {
      label: "About Me",
      value: "About",
      color: "blue.5",
      href: "/about",
      icon: IconSchool,
    },
    {
      label: "Archive",
      value: "Archive",
      color: "blue.5",
        href: "/archive",
      icon: IconCrane,
    },
    {
      label: "Tags",
      value: "Tags",
      color: "blue.5",
        href: "/tags",
      icon: IconChartAreaLine,
    },
  ];

  

