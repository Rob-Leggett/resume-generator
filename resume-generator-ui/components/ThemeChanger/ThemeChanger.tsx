import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styles from './ThemeChanger.module.css';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, themes, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleSelect = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  if (!mounted) return null;

  return (
    <div className={styles.themeContainer}>
      <span className="theme-selector">
        <span className="theme-msg">Resume Theme:</span>
        <span className="select-dropdown">
          <select value={theme} onChange={(e) => handleSelect(e.target.value)}>
            {themes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </span>
      </span>
    </div>
  );
};

export default ThemeChanger;