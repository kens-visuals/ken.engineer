import { useContext } from "react";
import { motion } from "framer-motion";

import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggler() {
  const { theme, setTheme, isChecked } = useContext(ThemeContext);

  const handleCheckedChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const spring = {
    type: "spring",
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
        id="default-toggle"
        checked={isChecked}
        className="peer sr-only"
        value={isChecked.toString()}
        onChange={handleCheckedChange}
      />
      <div
        data-checked={isChecked}
        className="flex h-6 w-11 items-center justify-start rounded-full bg-primary-dark p-0.5 data-[checked='true']:justify-end dark:bg-primary-light"
      >
        <motion.span
          layout
          transition={spring}
          className="inline-block h-5 w-5 rounded-full border border-primary-light bg-js-yellow dark:border-primary-dark"
        />
      </div>
    </label>
  );
}
