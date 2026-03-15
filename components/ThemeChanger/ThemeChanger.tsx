import { useEffect, useState } from 'react';
import { useResumeTheme } from '../../src/contexts';
import styles from './ThemeChanger.module.css';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { themeName, availableThemes, setTheme } = useResumeTheme();

  useEffect(() => setMounted(true), []);

  const handleSelect = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  if (!mounted) return null;

  return (
    <div className={styles.themeContainer}>
      <span className="theme-selector">
        <span className="theme-msg">Theme:</span>
        <span className="select-dropdown">
          <select value={themeName} onChange={(e) => handleSelect(e.target.value)}>
            {availableThemes.map((t) => (
              <option key={t.name} value={t.name}>
                {t.displayName}
              </option>
            ))}
          </select>
        </span>
      </span>
    </div>
  );
};

export default ThemeChanger;