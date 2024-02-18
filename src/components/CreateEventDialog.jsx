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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateEventDialog = ({ open, setOpen }) => {
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
            console.log(formJson);
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
            label="Event Date"
            views={["year", "month", "day", "hours", "minutes", "seconds"]}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button type="submit">Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

CreateEventDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default CreateEventDialog;
