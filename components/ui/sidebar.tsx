"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Users, Menu } from "lucide-react";
import { useAuth } from "@/app/admin/AuthContext";

const allMenuItems = [
  { href: "/dashboard/clients", icon: Users, label: "Clients" },
];

const managerMenuItems = [
  { href: "/dashboard/clients", icon: Users, label: "Clients" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const pathname = usePathname();
  const { isLoggedIn, role, name } = useAuth();

  if (!isLoggedIn) {
    return null; // Не отображаем сайдбар, если пользователь не вошел в систему
  }

  const menuItems = role === "owner" ? allMenuItems : managerMenuItems;
  return (
    <div
      className={cn(
        "border-r bg-card text-card-foreground",
        collapsed ? "w-16" : "w-64",
        "transition-all duration-300"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4">
        {!collapsed && (
          <h1 className="text-lg font-semibold">Car Rental Admin</h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {!collapsed && (
        <p className="text-lg font-semibold px-4">
          {role} {name}
        </p>
      )}

      <nav className="space-y-2 p-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={`/admin/${role}${item.href}`}
            className={cn(
              "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm transition-colors",
              pathname === item.href
                ? "bg-accent text-accent-foreground"
                : "hover:bg-accent hover:text-accent-foreground",
              collapsed && "justify-center"
            )}
          >
            <item.icon className="h-5 w-5" />
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}
