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

const Event = ({ event, onDelete }) => {
  const daysRemaining = (difference) => {
    return Math.max(
      Math.floor(difference / NUMBER_OF_MILLISECONDS_IN_A_DAY),
      0
    );
  };

  const hoursRemaining = (difference) => {
    return Math.max(
      Math.floor(
        (difference % NUMBER_OF_MILLISECONDS_IN_A_DAY) /
          NUMBER_OF_MILLISECONDS_IN_AN_HOUR
      ),
      0
    );
  };

  const minutesRemaining = (difference) => {
    return Math.max(
      Math.floor(
        (difference % NUMBER_OF_MILLISECONDS_IN_AN_HOUR) /
          NUMBER_OF_MILLISECONDS_IN_A_MINUTE
      ),
      0
    );
  };

  const secondsRemaining = (difference) => {
    return Math.max(
      Math.floor(
        (difference % NUMBER_OF_MILLISECONDS_IN_A_MINUTE) /
          NUMBER_OF_MILLISECONDS_IN_A_SECOND
      ),
      0
    );
  };

  const [timeLeft, setTimeLeft] = useState({
    days: daysRemaining(new Date(event.date) - Date.now()),
    hours: hoursRemaining(new Date(event.date) - Date.now()),
    minutes: minutesRemaining(new Date(event.date) - Date.now()),
    seconds: secondsRemaining(new Date(event.date) - Date.now()),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = new Date(event.date) - Date.now();

      if (difference <= 0) {
        clearInterval(interval);
        alert("Countdown to " + event.name + " is done!");
        return;
      }

      setTimeLeft({
        days: daysRemaining(difference),
        hours: hoursRemaining(difference),
        minutes: minutesRemaining(difference),
        seconds: secondsRemaining(difference),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [event]);

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
          <Typography variant="h5">{event.name}</Typography>
          <Stack direction="row">
            <TimeDisplay type="Days" time={timeLeft.days} />
            <TimeDisplay type="Hours" time={timeLeft.hours} />
            <TimeDisplay type="Minutes" time={timeLeft.minutes} />
            <TimeDisplay type="Seconds" time={timeLeft.seconds} />
          </Stack>
        </Box>
        <IconButton
          aria-label="delete"
          color="secondary"
          size="large"
          onClick={onDelete}
        >
          <DeleteIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    </Paper>
  );
};

Event.propTypes = {
  event: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Event;
