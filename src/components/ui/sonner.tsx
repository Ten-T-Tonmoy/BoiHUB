"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group
             [&_[data-sonner-toast]]:bg-blue-600
             [&_[data-sonner-toast]]:text-white
             [&_[data-sonner-toast]]:border-blue-700
             [&_[data-sonner-toast-title]]:font-semibold
             [&_[data-sonner-toast-description]]:text-sm [&_[data-sonner-toast-description]]:text-black"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
