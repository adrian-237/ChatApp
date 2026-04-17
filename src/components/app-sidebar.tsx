import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { MessageCircle, Users, Settings } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="none"
      style={{ "--sidebar-width": "5rem" } as React.CSSProperties}
      className="min-h-full bg-sidebar text-sidebar-foreground"
    >
      <SidebarContent className="flex flex-col items-center justify-between px-1 py-3 h-full">
        <SidebarMenu className="gap-2 flex flex-col items-center">
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive
              tooltip="Messages"
              size="lg"
              className="justify-center h-10 w-10"
            >
              <MessageCircle />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Contacts"
              size="lg"
              className="justify-center h-10 w-10"
            >
              <Users />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenu className="gap-2 flex flex-col items-center">
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Settings"
              size="lg"
              className="justify-center h-10 w-10"
            >
              <Settings />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
