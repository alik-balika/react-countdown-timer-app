import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  TextField,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import CloseIcon from "@mui/icons-material/Close";
import dayjs from "dayjs";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const tomorrow = dayjs().add(1, "day").startOf("day");

const CreateEventDialog = ({ open, setOpen, onEventAdded }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        TransitionComponent={Transition}
        maxWidth="sm"
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const newEvent = {
              name: formJson.eventName,
              date: formJson.eventDate,
            };
            onEventAdded((prevEvents) => [newEvent, ...prevEvents]);
            setOpen(false);
          },
        }}
      >
        <DialogTitle>Create an Event</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.primary.main,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="eventName"
            name="eventName"
            label="Event Name"
            type="text"
            fullWidth
            variant="standard"
            sx={{ mb: 3 }}
          />
          <DateTimePicker
            id="eventDate"
            name="eventDate"
            label="Event Date"
            views={["year", "month", "day", "hours", "minutes", "seconds"]}
            defaultValue={tomorrow}
            disablePast
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
            variant="outlined"
            color="secondary"
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

CreateEventDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  onEventAdded: PropTypes.func.isRequired,
};

export default CreateEventDialog;
