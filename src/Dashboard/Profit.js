import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Title from "./Title";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { secondaryListItems } from "./listItems";

function preventDefault(event) {
  event.preventDefault();
}

export default function Profit() {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "row" }, // Stack items vertically on small screens
          width: "100%",
          gap: 2, // Adds spacing between the columns
        }}
      >
        <Box
          sx={{
            width: { xs: "50%", md: "50%" },
            mb: { xs: 2, md: 0 },
          }}
        >
          <Typography variant="span" sx={{ fontWeight: "bold" }}>
            Net Profit
          </Typography>
          <Typography
            component="p"
            variant="span"
            sx={{
              mt: 1,
              fontWeight: "bold",
              fontSize: { xs: "x-large", md: "xx-large", lg: "xx-large" },
            }}
          >
            $6,759.25
          </Typography>
          <Typography sx={{ color: "#257261", fontWeight: "bold" }}>
            <ArrowDropUpOutlinedIcon className="upArrow" /> 3%
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "70%", md: "70%" },
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: 105,
              height: 105,
              mx: "auto",
            }}
          >
            <CircularProgressbar value={70} text={`${70}% `} strokeWidth={12} />
          </Box>
          <Typography
            variant="p"
            sx={{ color: "#000", fontSize: "9px", lineHeight: 1.2 }}
          >
            *The values here have been rounded off.
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}
