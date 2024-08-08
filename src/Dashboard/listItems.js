import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton sx={{ borderLeft: "6px solid #7394FF", color: "#7394FF" }}>
      <ListItemIcon>
        <HomeRoundedIcon sx={{ color: "#7394FF" }} />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton sx={{ paddingLeft: "22px" }}>
      <ListItemIcon>
        <AssessmentOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton sx={{ paddingLeft: "22px" }}>
      <ListItemIcon>
        <InventoryRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton sx={{ paddingLeft: "22px" }}>
      <ListItemIcon>
        <AccountBalanceWalletOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton sx={{ paddingLeft: "22px" }}>
      <ListItemIcon>
        <LocalMallOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <LogoutRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="logout" />
    </ListItemButton>
  </React.Fragment>
);
