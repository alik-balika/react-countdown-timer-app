import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TimeDisplay from "./TimeDisplay";

const NUMBER_OF_MILLISECONDS_IN_A_SECOND = 1000;
const NUMBER_OF_MILLISECONDS_IN_A_DAY =
  NUMBER_OF_MILLISECONDS_IN_A_SECOND * 60 * 60 * 24;
const NUMBER_OF_MILLISECONDS_IN_AN_HOUR =
  NUMBER_OF_MILLISECONDS_IN_A_SECOND * 60 * 60;
const NUMBER_OF_MILLISECONDS_IN_A_MINUTE =
  NUMBER_OF_MILLISECONDS_IN_A_SECOND * 60;

const Event = ({ eventDate }) => {
  // const [date, setDate] = useState(new Date(eventDate));
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = new Date(eventDate) - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }

      const daysRemaining = Math.floor(
        difference / NUMBER_OF_MILLISECONDS_IN_A_DAY
      );

      const hoursRemaining = Math.floor(
        (difference % NUMBER_OF_MILLISECONDS_IN_A_DAY) /
          NUMBER_OF_MILLISECONDS_IN_AN_HOUR
      );

      const minutesRemaining = Math.floor(
        (difference % NUMBER_OF_MILLISECONDS_IN_AN_HOUR) /
          NUMBER_OF_MILLISECONDS_IN_A_MINUTE
      );
      const secondsRemaining = Math.floor(
        (difference % NUMBER_OF_MILLISECONDS_IN_A_MINUTE) /
          NUMBER_OF_MILLISECONDS_IN_A_SECOND
      );

      setTimeLeft({
        days: daysRemaining,
        hours: hoursRemaining,
        minutes: minutesRemaining,
        seconds: secondsRemaining,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

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
            <TimeDisplay type="Days" time={timeLeft.days} />
            <TimeDisplay type="Hours" time={timeLeft.hours} />
            <TimeDisplay type="Minutes" time={timeLeft.minutes} />
            <TimeDisplay type="Seconds" time={timeLeft.seconds} />
          </Stack>
        </Box>
        <IconButton aria-label="delete" color="secondary" size="large">
          <DeleteIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    </Paper>
  );
};

Event.propTypes = {
  eventDate: PropTypes.string.isRequired,
};

export default Event;
