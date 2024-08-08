import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FormControl from '@mui/material/FormControl';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { mainListItems, secondaryListItems } from "./listItems";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Chart from "./Chart";
import Profit from "./Profit";
import Orders from "./Orders";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import goalImg from "./Images/1.png";
import pDishesImg from "./Images/22.png";
import menusImg from "./Images/33.png";
import profile1 from "./Images/profile11.jpg";
import profile8 from "./Images/profile22.jpg";
import profile3 from "./Images/profile33.jpg";
import menuI from "./Images/menu.png";
import ordersImg from "./Images/t1.png";
import deliversImg from "./Images/t2.png";
import cancelledImg from "./Images/t3.png";
import revenueImg from "./Images/t4.png";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const [days, setDays] = useState(10);

  const handleChange = (event) => {
    setDays(event.target.value);
  };
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={false}>
          <Toolbar
            sx={{
              pr: "24px",
              boxShadow: "none !important",
              backgroundColor: "white !important",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
              }}
            >
              <img src={menuI} width="35px" />
            </IconButton>
            <div style={{ flexGrow: 1 }}>
              <FormControl
                sx={{
                  width: { xs: "50px", md: "20ch", lg: "25ch" },
                  background: "white",
                  borderRadius: { xs: "50%", md: "8px", lg: "4px" },
                  float: "left",
                }}
                variant="outlined"
              >
                <OutlinedInput
                  size="small"
                  id="outlined-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchOutlinedIcon />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-search-helper-text"
                  inputProps={{
                    "aria-label": "search",
                  }}
                  placeholder="search"
                />
              </FormControl>
            </div>

            <IconButton
              size="medium"
              style={{
                backgroundColor: "#f5f5f5",
                color: "#757575",
                marginRight: "12px",
              }}
            >
              <MailOutlineOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="medium"
              style={{
                backgroundColor: "#f5f5f5",
                color: "#757575",
                marginRight: "12px",
              }}
            >
              <SettingsOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="medium"
              style={{
                backgroundColor: "#f5f5f5",
                color: "#757575",
                marginRight: "12px",
              }}
            >
              <Badge color="primary" variant="dot">
                <NotificationsNoneIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Avatar
                alt="Remy Sharp"
                sx={{ width: "36px", height: "36px" }}
                src={profile1}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={false}
          style={{ position: "relative" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            <Grid sx={{ position: "absolute", bottom: "-350px" }}>
              {secondaryListItems}
            </Grid>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 2, mb: 2 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Typography
                  component="h1"
                  variant="h5"
                  color="inherit"
                  noWrap
                  sx={{ fontWeight: "bold !important" }}
                >
                  Dashboard
                </Typography>
              </Grid>
              <Grid item xs={6} md={2} lg={2}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 170,
                  }}
                >
                  <Grid>
                    <Grid>
                      <img src={ordersImg} alt="orders" width={"60px"} />
                    </Grid>
                    <Typography
                      variant="span"
                      sx={{ fontWeight: "bold", fontSize: "small" }}
                    >
                      Total Orders
                    </Typography>
                    <Grid className="TotalCalculation">
                      <Typography
                        className="count"
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: "22px", lg: "28px", md: "28px" },
                        }}
                      >
                        75
                      </Typography>
                      <Typography
                        variant="span"
                        className="percent"
                        style={{ alignSelf: "center" }}
                      >
                        <ArrowDropUpOutlinedIcon className="upArrow" /> 3%
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={6} md={2} lg={2}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 170,
                  }}
                >
                  <Grid>
                    <Grid>
                      <img src={deliversImg} alt="deliverImg" width={"60px"} />
                    </Grid>
                    <Typography
                      variant="span"
                      sx={{ fontWeight: "bold", fontSize: "small" }}
                    >
                      {" "}
                      Total Deliveres
                    </Typography>
                    <Grid className="TotalCalculation">
                      <Typography
                        className="count"
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: "22px", lg: "28px", md: "28px" },
                        }}
                      >
                        70
                      </Typography>
                      <Typography
                        variant="span"
                        className="percent"
                        style={{ alignSelf: "center", color: "#812b32" }}
                      >
                        <ArrowDropDownOutlinedIcon className="downArrow" /> 3%
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={6} md={2} lg={2}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 170,
                  }}
                >
                  <Grid>
                    <Grid>
                      <img src={cancelledImg} alt="cancel" width={"60px"} />
                    </Grid>
                    <Typography
                      variant="span"
                      sx={{ fontWeight: "bold", fontSize: "small" }}
                    >
                      Total Cancelled
                    </Typography>
                    <Grid className="TotalCalculation">
                      <Typography
                        className="count"
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: "22px", lg: "28px", md: "28px" },
                        }}
                      >
                        05
                      </Typography>
                      <Typography
                        variant="span"
                        className="percent"
                        style={{ alignSelf: "center" }}
                      >
                        <ArrowDropUpOutlinedIcon className="upArrow" /> 3%
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={6} md={2} lg={2}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 170,
                  }}
                >
                  <Grid>
                    <Grid>
                      <img src={revenueImg} alt="revenue" width={"60px"} />
                    </Grid>
                    <Typography
                      variant="span"
                      sx={{ fontWeight: "bold", fontSize: "small" }}
                    >
                      {" "}
                      Total Revenue
                    </Typography>
                    <Grid className="TotalCalculation">
                      <Typography
                        variant="span"
                        className="count"
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: "22px", lg: "28px", md: "28px" },
                        }}
                      >
                        $12k
                      </Typography>
                      <Typography
                        variant="span"
                        className="percent"
                        style={{ alignSelf: "center", color: "#812b32" }}
                      >
                        <ArrowDropDownOutlinedIcon className="downArrow" /> 3%
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 170,
                  }}
                >
                  <Profit />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={8}>
                <Paper
                  sx={{
                    p: 2,
                    height: { xs: "auto", md: 360, lg: 360 },
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <Grid>
                    {" "}
                    <Typography variant="span" sx={{ fontWeight: "bold" }}>
                      Activity
                    </Typography>
                  </Grid>
                  <div>
                    <Select
                      size="small"
                      value={days}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      sx={{
                        m: 1,
                        minWidth: 120,
                        position: "absolute",
                        top: 5,
                        right: 1,
                        borderRadius: "50px",
                        height: "25px",
                        backgroundColor: "#f5f5f5",
                        border: "none !important",
                        fontSize: "small",
                      }}
                    >
                      <MenuItem value={10}>Weekly</MenuItem>
                      <MenuItem value={20}>Monthly</MenuItem>
                    </Select>
                  </div>
                  <Chart />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 360,
                  }}
                >
                  <Grid
                    container
                    style={{
                      width: "100%",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <Grid item>
                      <img
                        src={goalImg}
                        alt="goals"
                        style={{
                          marginRight: "18px",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "600",
                          fontSize: { xs: "14px", lg: "16px", md: "14px" },
                        }}
                      >
                        Goals
                      </Typography>
                    </Grid>
                    <Grid item style={{ marginLeft: "auto" }}>
                      <Typography
                        style={{
                          backgroundColor: "#f5f5f5",
                          borderRadius: "50%",
                          padding: "4px 5px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <KeyboardArrowRightIcon style={{ color: "black" }} />
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    style={{
                      width: "100%",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <Grid item>
                      <img
                        src={pDishesImg}
                        alt="goals"
                        style={{
                          marginRight: "18px",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "600",
                          fontSize: { xs: "14px", lg: "16px", md: "14px" },
                        }}
                      >
                        Popular Dishes
                      </Typography>
                    </Grid>
                    <Grid item style={{ marginLeft: "auto" }}>
                      <Typography
                        style={{
                          backgroundColor: "#f5f5f5",
                          borderRadius: "50%",
                          padding: "4px 5px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <KeyboardArrowRightIcon style={{ color: "black" }} />
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    style={{
                      width: "100%",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <Grid item>
                      <img
                        src={menusImg}
                        alt="goals"
                        style={{
                          marginRight: "18px",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "600",
                          fontSize: { xs: "14px", lg: "16px", md: "14px" },
                        }}
                      >
                        Menus
                      </Typography>
                    </Grid>
                    <Grid item style={{ marginLeft: "auto" }}>
                      <Typography
                        style={{
                          backgroundColor: "#f5f5f5",
                          borderRadius: "50%",
                          padding: "4px 5px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <KeyboardArrowRightIcon style={{ color: "black" }} />
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={8}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 300,
                  }}
                >
                  <Orders />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 300,
                    overflowY: "auto",
                  }}
                >
                  <Box>
                    <Typography
                      variant="span"
                      sx={{ fontWeight: "bold", fontSize: "large" }}
                    >
                      Customer's Feedback
                    </Typography>
                    <Grid sx={{ display: "flex", margin: "25px 0 8px 0" }}>
                      <Avatar
                        alt="Remy Sharp"
                        sx={{ width: "36px", height: "36px" }}
                        src={profile1}
                      />
                      <Typography
                        component="span"
                        variant="span"
                        sx={{
                          alignSelf: "center",
                          paddingLeft: "12px",
                          fontWeight: "600",
                        }}
                      >
                        Jenny Wilson
                      </Typography>
                    </Grid>
                    <Grid>
                      <StarRateRoundedIcon sx={{ color: "#edb809" }} />
                      <StarRateRoundedIcon sx={{ color: "#edb809" }} />
                      <StarRateRoundedIcon sx={{ color: "#edb809" }} />
                      <StarHalfRoundedIcon sx={{ color: "#edb809" }} />
                      <StarOutlineRoundedIcon sx={{ color: "#edb809" }} />
                    </Grid>
                    <Typography variant="p" sx={{ pb: 2 }}>
                      There are many variations of passages of Lorem Ipsum
                      available, in some form.
                    </Typography>
                    <hr />

                    <Grid sx={{ display: "flex", margin: "25px 0 8px 0" }}>
                      <Avatar
                        alt="Remy Sharp"
                        sx={{ width: "36px", height: "36px" }}
                        src={profile8}
                      />
                      <Typography
                        component="span"
                        variant="span"
                        sx={{
                          alignSelf: "center",
                          paddingLeft: "12px",
                          fontWeight: "600",
                        }}
                      >
                        Dienne Russell
                      </Typography>
                    </Grid>
                    <Grid>
                      <StarRateRoundedIcon sx={{ color: "#edb809" }} />
                      <StarRateRoundedIcon sx={{ color: "#edb809" }} />
                      <StarRateRoundedIcon sx={{ color: "#edb809" }} />
                      <StarHalfRoundedIcon sx={{ color: "#edb809" }} />
                      <StarOutlineRoundedIcon sx={{ color: "#edb809" }} />
                    </Grid>
                    <Typography variant="p" sx={{ pb: 2 }}>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </Typography>
                    <hr />

                    <Grid sx={{ display: "flex", margin: "25px 0 8px 0" }}>
                      <Avatar
                        alt="Remy Sharp"
                        sx={{ width: "36px", height: "36px" }}
                        src={profile3}
                      />
                      <Typography
                        component="span"
                        variant="span"
                        sx={{
                          alignSelf: "center",
                          paddingLeft: "12px",
                          fontWeight: "600",
                        }}
                      >
                        Devon Lane
                      </Typography>
                    </Grid>
                    <Grid>
                      <StarRateRoundedIcon sx={{ color: "#edb809" }} />
                      <StarRateRoundedIcon sx={{ color: "#edb809" }} />
                      <StarRateRoundedIcon sx={{ color: "#edb809" }} />
                      <StarHalfRoundedIcon sx={{ color: "#edb809" }} />
                      <StarOutlineRoundedIcon sx={{ color: "#edb809" }} />
                    </Grid>
                    <Typography variant="p" sx={{ pb: 2 }}>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
