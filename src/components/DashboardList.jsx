import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { dashboardList } from "../constants/dashboardList";
import DashboardCard from "./DashboardCard";

const useStyles = makeStyles({
  pageTitle: {
    marginTop: "2rem",
  },
});

function DashboardList() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={8}
    >
      <Grid item>
        <Typography className={classes.pageTitle} variant="h1">
          {">"}_ Dashboard List
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={4}
        >
          {dashboardList.map((dashboard, id) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <DashboardCard dashboard={dashboard} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DashboardList;
