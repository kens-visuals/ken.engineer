import {
  useState,
  useEffect,
  createContext,
  useMemo,
  SetStateAction,
  Dispatch,
} from 'react';
import { useTheme } from 'next-themes';

// Interfaces
interface ValuesTypes {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ValuesTypes>({
  theme: '',
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
    [theme]
  );

  useEffect(() => {
    setMounted(true);

    if (systemTheme === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [systemTheme]);

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
