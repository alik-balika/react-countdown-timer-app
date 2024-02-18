import React from "react";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TimeDisplay from "./TimeDisplay";

const Event = () => {
  return (
    <Paper
      elevation={8}
      sx={{
        m: 3,
        pt: 2,
        pl: 2,
        pb: 1,
        maxWidth: "sm",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h5">Event Name</Typography>
          <Stack direction="row">
            <TimeDisplay type="Days" time={21} />
            <TimeDisplay type="Hours" time={16} />
            <TimeDisplay type="Minutes" time={44} />
            <TimeDisplay type="Seconds" time={32} />
          </Stack>
        </Box>
        <IconButton aria-label="delete" color="secondary" size="large">
          <DeleteIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Event;
