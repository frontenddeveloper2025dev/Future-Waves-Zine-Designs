// src/lib/utils.ts

import { type ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"; // ✅ corregido: tailwind-merge, no tailwind-variants

// 🧠 Helper universal para unir clases Tailwind de forma inteligente
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 📅 Formateador de fechas (alemán)
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
