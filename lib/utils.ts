import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatData(data: string | Date) {
  return new Date().toLocaleDateString("en-Us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
