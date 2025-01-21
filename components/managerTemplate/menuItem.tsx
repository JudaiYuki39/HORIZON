import React from "react";
import Link from "next/link";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  active?: boolean;
}

const MenuItem = ({ icon, label, path, active }: MenuItemProps) => {
  return (
    <Link
      href={path}
      className={`flex items-center border-2 rounded-xl border-slate-700 p-2 my-2 ${
        active ? "text-" : "text-amber-700"
      }`}
    >
      <span className="mr-3">{icon}</span>
      <span className="flex-1">{label}</span>
    </Link>
  );
};

export default MenuItem;
