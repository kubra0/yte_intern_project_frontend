import * as React from "react";
import {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";

export function AddAssistant(props) {
  const [formState, setFormState] = useState({});

  function onFormInputChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    const newState = {...formState};
    newState[field] = value;
    setFormState(newState);
  }

  return (
    <Dialog open={props.isOpen}>
      <DialogTitle>Add new assistant</DialogTitle>
      <DialogContent>
        <TextField onChange={onFormInputChange} name="name" label="Name" color = "secondary" fullWidth></TextField>
        <TextField onChange={onFormInputChange} name="surname" label="Surname" color = "secondary" fullWidth></TextField>
        <TextField onChange={onFormInputChange} name="email" label="E-Mail" color = "secondary" fullWidth></TextField>
        <TextField onChange={onFormInputChange} name="username" label="Username" color = "secondary" fullWidth></TextField>
        <TextField onChange={onFormInputChange} name="password" label="Password" color = "secondary" fullWidth></TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.close()} color="secondary">Cancel</Button>
        <Button onClick={() => props.addAssistant(formState)} color = "success">Submit</Button>
      </DialogActions>
    </Dialog>
  );
  
}