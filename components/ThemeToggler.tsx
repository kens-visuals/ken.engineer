import { useContext } from 'react';
import { motion, Variants } from 'framer-motion';

// Contexts
import { ThemeContext } from '../contexts/ThemeContext';

export default function ThemeToggler() {
  const { theme, setTheme, isChecked, setIsChecked } = useContext(ThemeContext);

  const handleCheckedChange = () => {
    if (theme === 'dark') {
      setTheme('light');
      setIsChecked(true);
    } else {
      setTheme('dark');
      setIsChecked(false);
    }
  };

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 20,
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
      <div
        data-checked={isChecked}
        className="flex h-6 w-11 items-center justify-start rounded-full bg-primary-dark p-0.5 focus:ring-4 focus:ring-js-yellow peer-focus:ring-4 peer-focus:ring-js-yellow data-[checked='true']:justify-end dark:bg-primary-light"
      >
        <motion.span
          layout
          transition={spring}
          className="inline-block h-5 w-5 rounded-full border border-primary-light bg-js-yellow  dark:border-primary-dark"
        />
      </div>
    </label>
  );
}
