import { MoreVertical, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
interface UserProfileProps {
  name?: string;
  username?: string;
  avatar?: string;
}

export function UserProfile({
  name = "Jade Mcfarland",
  username = "@jademcfar",
  avatar = "JM",
}: UserProfileProps) {
  return (
    <div className="w-80 bg-card border-r border-border p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground">{name}</h3>
        <Button variant="ghost" size="icon" className="p-1.5">
          <MoreVertical size={18} className="text-foreground" />
        </Button>
      </div>

      <p className="text-sm text-muted-foreground">{username}</p>

      <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary/80 to-primary/40 flex items-center justify-center text-primary-foreground font-semibold">
        {avatar}
      </div>

      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <span className="text-sm text-foreground">Active now</span>
      </div>
    </div>
  );
}
