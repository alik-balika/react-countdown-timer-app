import React from "react";
import { Box, Button, Typography } from "@mui/material";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";

const PageContent = () => {
  return (
    <Box sx={{ m: 3 }}>
      <Typography variant="h4">Welcome to EventCountdown</Typography>
      <Typography variant="subtitle1">
        Track your events and never miss a moment
      </Typography>
      <Button
        variant="contained"
        startIcon={<EditCalendarIcon />}
        sx={{ color: "white", borderRadius: 5, m: 2, float: "right" }}
      >
        Create Event
      </Button>
    </Box>
  );
};

export default PageContent;
