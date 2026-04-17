import {
  Home,
  MessageCircle,
  Users,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  activeTab?: string;
}

export function Sidebar({ activeTab = "messages" }: SidebarProps) {
  return (
    <aside className="w-16 bg-primary flex flex-col items-center py-4 gap-4">
      <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center font-bold text-primary text-sm">
        CM
      </div>

      <nav className="flex-1 flex flex-col gap-4">
        <NavIcon icon={<Home size={24} />} active={activeTab === "home"} />
        <NavIcon
          icon={<MessageCircle size={24} />}
          active={activeTab === "messages"}
        />
        <NavIcon icon={<Users size={24} />} active={activeTab === "contacts"} />
        <NavIcon icon={<Menu size={24} />} active={activeTab === "menu"} />
      </nav>

      <div className="flex flex-col gap-4">
        <NavIcon icon={<Settings size={24} />} />
        <NavIcon icon={<LogOut size={24} />} />
      </div>
    </aside>
  );
}

interface NavIconProps {
  icon: React.ReactNode;
  active?: boolean;
}

function NavIcon({ icon, active = false }: NavIconProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={
        active
          ? "bg-primary-foreground text-primary"
          : "text-primary-foreground hover:bg-white/20"
      }
    >
      {icon}
    </Button>
  );
}
