interface MessageBubbleProps {
  content: string;
  sender: "user" | "other";
  timestamp?: string;
  avatar?: string;
}

export function MessageBubble({
  content,
  sender,
  timestamp,
  avatar,
}: MessageBubbleProps) {
  const isUser = sender === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && avatar && (
        <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary/80 to-primary/40 shrink-0 flex items-center justify-center text-primary-foreground text-xs font-semibold">
          {avatar}
        </div>
      )}

      <div className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}>
        <div
          className={`px-4 py-2 rounded-lg max-w-xs ${
            isUser
              ? "bg-primary text-primary-foreground rounded-br-none"
              : "bg-secondary text-foreground rounded-bl-none"
          }`}
        >
          <p className="text-sm">{content}</p>
        </div>

        {timestamp && (
          <span className="text-xs text-muted-foreground mt-1">
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
}
