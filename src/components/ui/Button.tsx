"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = ({ 
  variant = "primary", 
  size = "md", 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors text-zinc-400 hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button 
      className={cn(variants[variant], sizes[size], className)} 
      {...props}
    >
      {children}
    </button>
  );
};
