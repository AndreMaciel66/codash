import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import github from "../images/github.png";
import target from "../images/target.png";
import embed from "../images/embed.png";
import { IconButton, Tooltip } from "@material-ui/core";

function manageIcon(params) {
  return (
    <img
      src={params === "github" ? github : params === "embed" ? embed : target}
      alt="logo"
      style={{ width: 30 }}
    />
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 525,
    minWidth: 400,
    maxHeight: 225,
    minHeight: 200,
    borderWidth: "2px",
    borderColor: "white",
    borderStyle: "solid",
    borderRadius: 15,
    "&:hover": {
      borderColor: "#22374D",
    },
  },
  cardActionArea: {
    paddingLeft: 15,
    marginTop: 5,
  },
  cardContent: {
    minHeight: 80,
  },
  media: {
    height: 140,
  },
  linksWrapper: {
    backgroundColor: "#f5f4f5",
    display: "flex",
    flexDirection: "row",
    borderRadius: "25px",
    justifyItems: "center",
  },
});

export default function DashboardCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardActionArea}>
        <Typography variant="h4" color="primary">
          {props.dashboard.title}
        </Typography>
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" color="primary">
          {props.dashboard.description}
        </Typography>
      </CardContent>
      <CardActions>
        <div className={classes.linksWrapper}>
          {props.dashboard.links.map((link, id) => (
            <a
              key={id}
              href={link.title === "embed" ? link.to : link.url}
              target={link.title === "embed" ? null : "_blank"}
              rel={link.title === "embed" ? null : "noreferrer"}
            >
              <Tooltip title={link.title}>
                <IconButton key={id} color="primary" component="span">
                  {manageIcon(link.title)}
                </IconButton>
              </Tooltip>
            </a>
          ))}
        </div>
      </CardActions>

      {console.log(props.dashboard.url)}
    </Card>
  );
}
