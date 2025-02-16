import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export const cn = (...classVal: ClassValue[]) => {
  return twMerge(clsx(...classVal));
};
