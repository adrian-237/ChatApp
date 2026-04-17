import {
  Phone,
  Video,
  MoreVertical,
  Send,
  Paperclip,
  Smile,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatWindowProps {
  contact?: {
    name: string;
    status: string;
    avatar: string;
  };
}

export function ChatWindow({
  contact = {
    name: "Chat Room",
    status: "Active now",
    avatar: "JM",
  },
}: ChatWindowProps) {
  return (
    <div className="flex-1 bg-card flex flex-col h-full">
      <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-card">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary/80 to-primary/40 flex items-center justify-center text-primary-foreground font-semibold text-sm">
            {contact.avatar}
          </div>
          <div>
            <h2 className="font-semibold text-foreground">{contact.name}</h2>
            <p className="text-xs text-muted-foreground">{contact.status}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="p-2">
            <Phone size={20} className="text-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="p-2">
            <Video size={20} className="text-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="p-2">
            <MoreVertical size={20} className="text-foreground" />
          </Button>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center bg-linear-to-b from-background to-background">
        <div className="w-16 h-16 bg-linear-to-br from-primary/80 to-primary/40 rounded-full flex items-center justify-center mb-4">
          <span className="text-primary-foreground text-2xl">💬</span>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Welcome to ChatMe
        </h3>
        <p className="text-muted-foreground text-center max-w-sm">
          Connect and chat with friends easily, securely, fast and free
        </p>
      </div>

      <div className="px-6 py-4 border-t border-border bg-card">
        <div className="flex items-end gap-3">
          <Button variant="ghost" size="icon" className="p-2 shrink-0">
            <Paperclip size={20} className="text-foreground" />
          </Button>

          <Input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-secondary rounded-lg text-sm text-foreground placeholder-muted-foreground"
          />

          <Button variant="ghost" size="icon" className="p-2 shrink-0">
            <Smile size={20} className="text-foreground" />
          </Button>

          <Button variant="default" size="icon" className="shrink-0">
            <Send size={20} className="text-primary-foreground" />
          </Button>
        </div>
      </div>
    </div>
  );
}
