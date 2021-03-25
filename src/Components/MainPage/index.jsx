import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import BrandingWatermarkTwoToneIcon from "@material-ui/icons/BrandingWatermarkTwoTone";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import ArtistEvents from "../ArtistEvents/index";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"DATE: "}
      <Link color="inherit" href="https://material-ui.com/">
        Thursday, 25th March,
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    background: "linear-gradient(45deg, #29b6f6 30%, #f50057 90%)",
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    cursor: "pointer",
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
  colorTextSecondary: {
    color: "#fff",
    fontStyle: "italic",
  },
}));

export default function SearchComponent() {
  const classes = useStyles();

  const [state, setState] = useState(null);
  const [artistEvents, setArtistEvents] = useState(null);
  const [searchField, setSearchField] = useState("");

  const handleOnchange = async (e) => {
    setSearchField(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (searchField === "") return null;
    const response = await fetch(
      `https://rest.bandsintown.com/artists/${encodeURI(
        searchField
      )}?app_id=test`
    );
    const data = await response.json();
    setState(data);
    setArtistEvents(null);
  };

  const handleEventsClick = async (e) => {
    e.preventDefault();
    if (searchField === "") return null;
    const response = await fetch(
      `https://rest.bandsintown.com/artists/${encodeURI(
        searchField
      )}/events?app_id=test&date=all`
    );
    const data = await response.json();
    setArtistEvents(data);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <BrandingWatermarkTwoToneIcon
            style={{ background: "#0d47a1" }}
            className={classes.icon}
          />
          <Typography variant="h6"   className="heading" noWrap>
            WEB DEVELOPMENT TASK
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <div className="center-align">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="#fff"
                gutterBottom
                className="main-heading"
              >
                Find the Artist
              </Typography>
              <Paper component="form" className={classes.root}>
                <InputBase
                  className={classes.input}
                  placeholder="Search artist"
                  inputProps={{ "aria-label": "search an artist" }}
                  onChange={(e) => {
                    handleOnchange(e);
                  }}
                />
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                  onClick={(e) => {
                    handleClick(e);
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </div>
          </Container>
        </div>
        {state && (
          <Container
            className={classes.cardGrid}
            maxWidth="md"
            onClick={(e) => {
              handleEventsClick(e);
            }}
          >
            {/* End hero unit */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8} md={6}>
                <Card
                  style={{
                    background:
                      "linear-gradient(45deg, #29b6f6 30%, #f50057 90%)",
                  }}
                  className={classes.root}
                >
                  <Avatar alt={state.name} src={state.image_url} />
                  <div className={classes.details}>
                    <CardContent
                      style={{ color: "white" }}
                      className={classes.content}
                    >
                      <Typography component="h5" variant="h5">
                        {state.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        className={classes.colorTextSecondary}
                      >
                        {state.facebook_page_url}
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Container>
        )}

        {artistEvents && <ArtistEvents artistEvents={artistEvents} />}
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Submitted by:
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          fontStyle= "italic"
          color="textSecondary"
          component="p"
        >
          Hina Humayun
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
