import React, { useContext, useEffect, useState} from "react"
import { Link } from "gatsby"
import { Themes } from "theme";
import { ThemeContext } from "contexts";

interface HeaderProps{
  siteTitle?: string;
}

export const Header:React.FC<HeaderProps> = ({ siteTitle }) => {

  const { dark, toggleDark } = useContext(ThemeContext)

  const theme = dark ? Themes.dark : Themes.light

  const handleClick = (state:boolean) => {
    toggleDark(state);
  }

  return (
    <header
      style={{
        background: theme.bgHeader, 
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display:'flex',
          flexDirection:'row'
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  );
}