"use client";
import React from "react";
import { FloatingNav } from "../../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Blogs",
      link: "/blogs",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Events",
      link: "/events",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Members",
      link: "/members",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
        name: "Gallary",
        link: "/gallary",
        icon: (
          <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
