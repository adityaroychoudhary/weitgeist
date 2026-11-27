"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "./ui/menu";

export function FontToggle() {
  function setFont(font: "sans" | "mono") {
    document.documentElement.dataset.font = font;
    document.cookie = `font=${font}; path=/; max-age=31536000; samesite=lax`;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            className="relative cursor-pointer"
          />
        }
      >
        <MenuIcon />
        <span className="sr-only">Font selection</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setFont("sans")}>
          <span style={{ fontFamily: "var(--font-inter)" }}>Inter</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setFont("mono")}>
          <span style={{ fontFamily: "var(--font-geist-mono)" }}>
            Geist Mono
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
