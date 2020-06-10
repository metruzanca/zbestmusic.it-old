import React, { useState, useEffect, createContext } from "react"

export const ThemeContext = createContext({
  dark: false,
  toggleDark: (newState) => {},
  isLoading:true,
})

const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

export const ThemeProvider = ({
  children
}) => {

  const [isDark, setDark] = useState(false)
  const [isLoading, setLoading] = useState(true)
  function toggleDark(newState = ""){
    let dark = newState ? newState : !isDark
    localStorage.setItem("dark", JSON.stringify(dark))
    setDark(dark)    
  }

  useEffect(() => {
    const lsDark = localStorage.getItem("dark") || "false" 
    if (lsDark) {
      setDark( JSON.parse(lsDark) )      
    } else if (supportsDarkMode()) {
      setDark( true )
    }
    setLoading(false)
  }, [])
      
  return (
    <ThemeContext.Provider
      value={{
        dark:isDark,
        toggleDark: toggleDark,
        isLoading:isLoading
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
    
}