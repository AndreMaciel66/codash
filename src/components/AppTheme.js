import { createMuiTheme } from "@material-ui/core/styles";

let primary = "#22374D";
let secundary = "#7B9CBD";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secundary,
    },
  },
  typography: {
    fontFamily: ['"Source Code Pro"'],
  },
});

theme.typography.h1 = {
  fontFamily: ['"Source Code Pro"'],
  fontSize: "1.5rem",
  fontWeight: 300,
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.6rem",
  },
};

theme.typography.h3 = {
  fontFamily: ['"Source Code Pro"'],
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

theme.typography.h4 = {
  fontFamily: ['"Source Code Pro"'],
  fontSize: "1.3rem",
  fontWeight: 500,
  "@media (min-width:600px)": {
    fontSize: "1.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

theme.typography.h5 = {
  fontFamily: ['"Source Code Pro"'],
  fontSize: "0.8rem",
  fontWeight: 200,
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
  },
};

export default theme;
