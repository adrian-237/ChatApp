import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "@/components/app-sidebar";
import { ChatList } from "@/components/chat-list";
import { ChatWindow } from "@/components/chat-window";

export default function Home() {
  const sampleChats = [
    {
      id: "1",
      name: "John Doe",
      avatar: "JD",
      lastMessage: "Hey! How are you doing?",
      timestamp: "2:45 PM",
      unread: true,
    },
    {
      id: "2",
      name: "Sarah Smith",
      avatar: "SS",
      lastMessage: "See you tomorrow!",
      timestamp: "1:30 PM",
      unread: false,
    },
    {
      id: "3",
      name: "Mike Johnson",
      avatar: "MJ",
      lastMessage: "That sounds great",
      timestamp: "Yesterday",
      unread: false,
    },
  ];

  return (
    <main className="flex-1 flex gap-0 overflow-hidden">
      <ChatList chats={sampleChats} />
      <ChatWindow />
    </main>
  );
}
