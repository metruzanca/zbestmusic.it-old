export type Theme = {
  themeName:string;
  bgPrimary:string;
  fgPrimary:string;
  bgHeader:string;
  fgHighlight:string;
  fgLink:string;
  fgLinkVisited:string;
}

const darkTheme:Theme = {
  themeName:"dark",
  bgPrimary:"#211e31",
  bgHeader:"#342f52",
  fgPrimary:"white",
  fgHighlight:"#f6df4c",
  fgLink:"#6883fd",
  fgLinkVisited:"#8D77FFs",
}

const lightTheme:Theme = {
  themeName:"light",
  bgPrimary: "white",
  bgHeader: "#5e8cc4",
  fgPrimary: "black",
  fgHighlight: "#f6df4c",
  fgLink: "#6883fd",
  fgLinkVisited: "#8D77FFs",
}

export const Themes = {
  dark:darkTheme,
  light:lightTheme
}