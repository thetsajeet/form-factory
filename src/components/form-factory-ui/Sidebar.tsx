import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Home,
  LayoutDashboard,
  Settings,
  Square,
  User,
  UserCircle,
} from "lucide-react";
import Link from "next/link";

type NavItem = {
  id: number;
  label: string;
  icon: ReactNode;
  url: string;
};

const navItems: NavItem[] = [
  {
    id: Math.random(),
    label: "Profile",
    icon: <User className="size-4" />,
    url: "/",
  },
  {
    id: Math.random(),
    label: "Dashboard",
    icon: <LayoutDashboard className="size-4" />,
    url: "/",
  },
  {
    id: Math.random(),
    label: "Settings",
    icon: <Settings className="size-4" />,
    url: "/",
  },
  {
    id: Math.random(),
    label: "Home",
    icon: <Home className="size-4" />,
    url: "/",
  },
];

export default function Sidebar({
  sidebar,
  toggleSidebar,
  formName,
}: {
  sidebar: boolean;
  toggleSidebar: Dispatch<SetStateAction<boolean>>;
  formName: string;
}) {
  return (
    <Sheet open={sidebar}>
      <SheetContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        side="left"
        toggleSidebar={toggleSidebar}
        className="w-full sm:w-[540px] h-full flex flex-col"
      >
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <Square className="size-6 mr-2 mt-1" />
            <span className="text-xl font-semibold">{formName}</span>
          </SheetTitle>
          <SheetDescription className="hidden"></SheetDescription>
        </SheetHeader>
        <div className="flex-1 flex flex-col my-2">
          <ul className="flex-1 flex flex-col gap-y-2">
            {navItems.map((nav: NavItem) => (
              <Link key={nav.id} href={nav.url}>
                <li className="flex items-center gap-x-3 cursor-pointer group py-2 ">
                  <span>{nav.icon}</span>
                  <span className="group-hover:translate-x-5 duration-200">
                    {nav.label}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex items-center">
            <UserCircle className="size-4 mr-2" />
            <span className="text-lg">Ajeet T S</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
