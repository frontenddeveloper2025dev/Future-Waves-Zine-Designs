// src/lib/utils.ts

// ✅ Helper para clases condicionales (necesario para shadcn/ui o Tailwind)
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// ✅ Tu formateador de fechas en alemán
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
