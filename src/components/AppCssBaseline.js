import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  "@global": {
    body: {
      ...theme.typography.body1,
      padding: 0,
      margin: 0,
      backgroundColor: "white",
    },
  },
});

function AppCssBaseline() {
  return null;
}

AppCssBaseline.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppCssBaseline);
