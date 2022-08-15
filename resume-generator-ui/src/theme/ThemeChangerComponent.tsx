import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'
import './ThemeChanger.css';

const ThemeChangerComponent = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="theme-container">
      <span className="theme-msg">The current theme is: {theme}</span>
      <button className="button" onClick={() => setTheme('modern')}>Modern Mode</button>
    </div>
  )
}

export default ThemeChangerComponent;