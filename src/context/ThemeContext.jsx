import React, {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'

const STORAGE_KEY = 'redflag-theme'

/** @returns {'light' | 'dark' | null} */
function readStoredTheme() {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'light' || v === 'dark') return v
  } catch {
    /* ignore */
  }
  return null
}

function applyDomTheme(theme) {
  const root = document.documentElement
  if (theme === 'light' || theme === 'dark') {
    root.setAttribute('data-theme', theme)
  } else {
    root.removeAttribute('data-theme')
  }
}

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => readStoredTheme())
  const [systemDark, setSystemDark] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false,
  )

  useLayoutEffect(() => {
    applyDomTheme(theme)
    try {
      if (theme === 'light' || theme === 'dark') {
        localStorage.setItem(STORAGE_KEY, theme)
      } else {
        localStorage.removeItem(STORAGE_KEY)
      }
    } catch {
      /* ignore */
    }
  }, [theme])

  useLayoutEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => setSystemDark(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const resolvedDark =
    theme === 'dark' ? true : theme === 'light' ? false : systemDark

  const toggleTheme = useCallback(() => {
    setTheme(resolvedDark ? 'light' : 'dark')
  }, [resolvedDark])

  const value = useMemo(
    () => ({
      theme,
      resolvedDark,
      toggleTheme,
    }),
    [theme, resolvedDark, toggleTheme],
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

/* Hook colocated with provider — fast refresh keeps both */
// eslint-disable-next-line react-refresh/only-export-components -- useTheme pairs with ThemeProvider
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
