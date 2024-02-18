import React from "react";
import PropTypes from "prop-types";
import { Stack, Typography } from "@mui/material";

const TimeDisplay = ({ type, time }) => {
  return (
    <Stack sx={{ width: "fit-content", pr: 2, pt: 1, pb: 1 }}>
      <Typography gutterBottom variant="h5">
        {type}
      </Typography>
      <Typography align="center" variant="h6">
        {time}
      </Typography>
    </Stack>
  );
};

TimeDisplay.propTypes = {
  type: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default TimeDisplay;
