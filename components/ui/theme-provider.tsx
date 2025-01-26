"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Используем ComponentProps для получения типов пропсов от NextThemesProvider
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

interface Props extends ThemeProviderProps {
  children: React.ReactNode; // Явно указываем, что будет передаваться свойство `children`
}

export function ThemeProvider({ children, ...props }: Props) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
