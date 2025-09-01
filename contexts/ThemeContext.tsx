import { useState, useEffect, createContext, useMemo } from "react";
import { useTheme } from "next-themes";

// Interfaces
interface ValuesTypes {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

export const ThemeContext = createContext<ValuesTypes>({
  theme: "",
  setTheme: () => null,
  isChecked: false,
  setIsChecked: () => null,
});

export function ThemeToggleProvider({ children }: { children: JSX.Element }) {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { systemTheme, setTheme, theme } = useTheme();

  const value: ValuesTypes = useMemo(
    () => ({ theme, setTheme, isChecked, setIsChecked }),
    [theme, isChecked, setIsChecked],
  );

  useEffect(() => {
    setMounted(true);

    if (systemTheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [systemTheme, setTheme]);

  // Sync isChecked with theme
  useEffect(() => {
    if (theme === "dark") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [theme, setIsChecked]);

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
