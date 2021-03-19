import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './components/AppTheme'
import StartMenu from './views/StartMenu.view';

// ROUTER IMPORTS
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboards from './views/Dashboards.view';
import AppCssBaseline from './components/AppCssBaseline'
import ResponsiveIframe from './components/ResponsiveIframe';

function App() {
  return (
    <MuiThemeProvider theme={theme} >
      
      <AppCssBaseline />

      <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboards" exact>
            <Dashboards />
          </Route>
          <Route path="/dashboards/:DashName">
            <ResponsiveIframe />
          </Route>
          <Route path="/">
            <StartMenu />
          </Route>
        </Switch>
      </div>
    </Router>

    </MuiThemeProvider>
  );
}

export default App;