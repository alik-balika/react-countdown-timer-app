import React from "react";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TimeDisplay from "./TimeDisplay";

// const paperStyle = {};

const Event = () => {
  return (
    <Paper
      elevation={8}
      sx={{
        m: 3,
        p: 3,
        maxWidth: "sm",
      }}
    >
      <Typography variant="h5">Event Name</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack direction="row">
          <TimeDisplay type="Days" time={21} />
          <TimeDisplay type="Hours" time={16} />
          <TimeDisplay type="Minutes" time={44} />
          <TimeDisplay type="Seconds" time={32} />
        </Stack>
        <IconButton aria-label="delete" color="secondary" size="large">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Event;
