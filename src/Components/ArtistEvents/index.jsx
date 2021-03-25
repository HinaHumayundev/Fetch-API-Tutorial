import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
    width: 400,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
}));

export default function ArtistEvents({ artistEvents }) {
  const classes = useStyles();
  if (!artistEvents || artistEvents.length === 0)
    return (
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          <Typography gutterBottom variant="h6" component="h6">
            No Events
          </Typography>
        </Grid>
      </Container>
    );
  const date = (dateTime) => {
    const setDateTime = new Date(dateTime).toDateString();
    return setDateTime;
  };
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {artistEvents.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Card style={{background: 'linear-gradient(45deg, #29b6f6 30%, #f50057 90%)'}}className={classes.card}>
              <CardContent style={{color: 'white'}} className={classes.cardContent}>
                <Typography gutterBottom variant="h6" component="h6">
                  EVENT DETAILS
                </Typography>
                <Divider />
                <div className="row">
                  <div className="left">
                    <span className="heading">Country</span>
                    <span className="detail">{card.venue.country}</span>
                  </div>
                  <div className="right">
                    <span className="heading">City</span>
                    <span className="detail">{card.venue.city}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="left">
                    <span className="heading">Venue</span>
                    <span className="detail">{card.venue.name}</span>
                  </div>
                  <div className="right">
                    <span className="heading">Date</span>
                    <span className="detail">{date(card.datetime)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
