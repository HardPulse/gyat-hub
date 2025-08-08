import { ReactNode } from "react";
import { Wallet, ShieldCheck, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  user?: { role: "admin" | "user"; balance: number; name: string } | null;
  rightSlot?: ReactNode;
}

const Header = ({ user = { role: "admin", balance: 1000, name: "admin" }, rightSlot }: HeaderProps) => {
  return (
    <header className="w-full glass-card rounded-lg px-4 md:px-6 py-3 mb-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-md bg-primary/15 flex items-center justify-center">
            <span className="font-bold">G</span>
          </div>
          <div>
            <div className="font-semibold">Gyat Panel</div>
            <div className="text-xs text-muted-foreground">Premium Management Panel</div>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden md:flex items-center gap-2 glass-card rounded-full px-3 py-1">
            <span className="text-xs">{user.name}</span>
            <span className="text-[10px] rounded-full px-2 py-0.5 bg-accent/20 border border-accent/30">{user.role === "admin" ? "Admin" : "User"}</span>
            <div className="flex items-center gap-1 text-primary"><Wallet className="size-4" /><span className="text-sm font-semibold">${user.balance.toFixed(2)}</span></div>
          </div>
          {rightSlot}
          <Button variant="surface" className="rounded-full" aria-label="Выйти">
            <LogOut className="size-4" />
            <span className="hidden sm:inline">Выйти</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
