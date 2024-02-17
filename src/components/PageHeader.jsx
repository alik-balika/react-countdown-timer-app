import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import AvTimerIcon from "@mui/icons-material/AvTimer";

const PageHeader = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <AvTimerIcon fontSize="large" sx={{ mr: 1 }} />
        <Typography
          variant="h4"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          React Event Countdown Timer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;
