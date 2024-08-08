import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import profile1 from "./Images/profile11.jpg";
import profile2 from "./Images/profile22.jpg";
import profile3 from "./Images/profile33.jpg";
import profile5 from "./Images/profile55.jpg";
import profile6 from "./Images/profile66.jpg";
// Generate Order Data
function createData(id, imgSrc, customer, orderno, amount, status) {
  return { id, imgSrc, customer, orderno, amount, status };
}

const rows = [
  createData(0, profile1, "Wade Warren", "15785432", "$124.00", "Delivered"),
  createData(1, profile2, "Wade Warren", "15785432", "$124.00", "Delivered"),
  createData(2, profile3, "Wade Warren", "15785432", "$124.00", "Delivered"),
  createData(3, profile5, "Wade Warren", "15785432", "$124.00", "Delivered"),
  createData(4, profile6, "Wade Warren", "15785432", "$124.00", "Delivered"),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Typography
        variant="span"
        sx={{ fontWeight: "bold", fontSize: "large", marginBottom: "15px" }}
      >
        Recent Orders
      </Typography>
      <Box sx={{ overflowX: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Customer</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Order No.</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={{ display: "flex" }}>
                  <Avatar
                    alt="Remy Sharp"
                    sx={{ width: "26px", height: "26px" }}
                    src={row.imgSrc}
                  >
                    {" "}
                  </Avatar>
                  <Typography sx={{ alignSelf: "center", paddingLeft: "10px" }}>
                    {row.customer}
                  </Typography>
                </TableCell>
                <TableCell>{row.orderno}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell><Typography sx={{fontSize:"14px", color:"white", backgroundColor:"#4DB6AC", borderRadius:"25px", padding:"4px 15px", width:"94px"}}>{row.status}</Typography></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </React.Fragment>
  );
}
