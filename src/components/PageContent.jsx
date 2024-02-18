import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";

import CreateEventDialog from "./CreateEventDialog";
import Event from "./Event";

const PageContent = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Box sx={{ backgroundColor: "#f5f5f5", padding: 3 }}>
        <Typography variant="h4">Welcome to EventCountdown</Typography>
        <Typography variant="subtitle1">
          Track your events and never miss a moment
        </Typography>
        <Box
          sx={{
            color: "white",
            borderRadius: 5,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            startIcon={<EditCalendarIcon />}
            sx={{ color: "white", borderRadius: 5, m: 2 }}
            onClick={() => setOpen(true)}
          >
            <Typography variant="button">Create Event</Typography>
          </Button>
        </Box>
      </Box>
      <Typography variant="h6" align="center" sx={{ mt: 2 }}>
        You have no events. Please add one :D
      </Typography>
      <CreateEventDialog open={open} setOpen={setOpen} />
      <Box sx={{ mt: 4 }}>
        <Event />
      </Box>
    </Box>
  );
};

export default PageContent;
