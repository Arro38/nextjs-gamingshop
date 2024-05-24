"use client";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
export default function MyToast({
  description,
  title,
  destructive,
}: {
  description: string;
  title: string;
  destructive?: boolean;
}) {
  const { toast } = useToast();
  useEffect(() => {
    console.log("toast", toast);
    toast({
      title,
      duration: 5000,
      description,
      variant: destructive ? "destructive" : "default",
    });
  }, [toast, description, title, destructive]);

  return null;
}
