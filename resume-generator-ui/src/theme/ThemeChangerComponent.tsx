import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'
import './ThemeChanger.css';

const ThemeChangerComponent = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, themes, setTheme } = useTheme()

  async function handleSelect(theme: string) {
    setTheme(theme); // Does not re-render yet
    // React will only re-render once at the end (that's batching!)
  }

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="theme-container">
      <span className="theme-selector">
        <span className="theme-msg">Resume Theme:</span>
        <span className="select-dropdown">
          <select defaultValue={theme} onChange={(event) => handleSelect(event.target.value)}>
            {themes.map(i => {
              return (
                <option key={i} value={i}>{i}</option>
              )
            })}
          </select>
        </span>
      </span>
    </div>
  )
}

export default ThemeChangerComponent;