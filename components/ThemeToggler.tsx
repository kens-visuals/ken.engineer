import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

export default function ThemeToggler() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isChecked, setChecked] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  console.log(theme);

  useEffect(() => {
    setMounted(true);

    if (systemTheme === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [systemTheme]);

  if (!mounted) {
    return null;
  }

  const handleCheckedChange = () => {
    if (theme === 'dark') {
      setTheme('light');
      setChecked(true);
    } else {
      setTheme('dark');
      setChecked(false);
    }
  };

  return (
    <label
      htmlFor="default-toggle"
      className="relative inline-flex cursor-pointer items-center"
    >
      <input
        type="checkbox"
        value={`${isChecked}`}
        checked={isChecked}
        onChange={handleCheckedChange}
        id="default-toggle"
        className="peer sr-only"
      />
      <div className="peer h-6 w-11 rounded-full bg-primary-dark after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-primary-dark after:bg-js-yellow after:transition-all peer-checked:bg-primary-dark peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-js-yellow dark:bg-primary-light dark:after:border-primary-light dark:peer-focus:ring-js-yellow" />
    </label>
  );
}
