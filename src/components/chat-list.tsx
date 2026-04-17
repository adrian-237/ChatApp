import { Search, MoreVertical } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread?: boolean;
}

interface ChatListProps {
  chats?: Chat[];
}

export function ChatList({ chats = [] }: ChatListProps) {
  return (
    <div className="w-80 bg-card border-r border-border flex flex-col h-full">
      <div className="p-4 border-b border-border">
        <h2 className="text-2xl font-bold text-foreground mb-4">Messages</h2>

        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="search"
            placeholder="Search messages..."
            className="pl-10 pr-4 bg-secondary rounded-lg text-sm text-foreground placeholder-muted-foreground"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {chats.length === 0 ? (
          <div className="p-4 text-center text-muted-foreground">
            <p className="text-sm">No messages yet</p>
          </div>
        ) : (
          chats.map((chat) => <ChatItem key={chat.id} chat={chat} />)
        )}
      </div>
    </div>
  );
}

interface ChatItemProps {
  chat: Chat;
}

function ChatItem({ chat }: ChatItemProps) {
  return (
    <div className="px-4 py-3 border-b border-secondary hover:bg-secondary/50 cursor-pointer transition-colors flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary/80 to-primary/40 shrink-0 flex items-center justify-center text-primary-foreground font-semibold">
        {chat.avatar}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-foreground text-sm">{chat.name}</h3>
          <span className="text-xs text-muted-foreground">
            {chat.timestamp}
          </span>
        </div>
        <p className="text-sm text-muted-foreground truncate">
          {chat.lastMessage}
        </p>
      </div>

      {chat.unread && (
        <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
      )}
    </div>
  );
}
