import React from "react";
import {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import DateTimePicker from "react-datetime-picker";

export function AddExam(props) {
  const [formState, setFormState] = useState({});
  const [time, setTime] = useState(new Date());

  const handleChange = (newDate) => {
    setTime(newDate);
    const newState = {...formState};
    newState["time"] = newDate;
    setFormState(newState);
  };

  function onFormInputChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    const newState = {...formState};
    newState[field] = value;
    setFormState(newState);
  }

  return (
    <Dialog open={props.isOpen}>
      <DialogTitle>
        ADD NEW EXAM
      </DialogTitle>
      <DialogContent>
        <TextField onChange={onFormInputChange} 
                   name="name" 
                   label="Name" 
                   color="secondary" 
                   fullWidth
        >
        </TextField>
        <Box sx={{ minWidth: 120 }}> 
          <FormControl fullWidth>
            <DateTimePicker onChange={handleChange}
                            value={time}
                            name= "time" 
            /> 
          </FormControl>
        </Box>  
        <TextField onChange={onFormInputChange}  
                   name="room" 
                   label="Room" 
                   color="secondary" 
                   fullWidth
        >
        </TextField>
        <TextField onChange={onFormInputChange} 
                   name="info" 
                   label="Info" 
                   color="secondary" 
                   fullWidth
        >
        </TextField>
        <TextField onChange={onFormInputChange} 
                   name="lesson_id" 
                   label="Lesson" 
                   color="secondary" 
                   fullWidth
        >
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.close()} 
                color="secondary"
        > 
          Cancel
        </Button>
        <Button onClick={() => props.addExam(formState)} 
                color= "success"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}