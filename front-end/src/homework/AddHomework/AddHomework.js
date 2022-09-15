import React from "react";
import {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import DateTimePicker from "react-datetime-picker";

export function AddHomework(props) {
  const [formState, setFormState] = useState({});
  const [time, setTime] = useState(new Date());
  const [file, setFile] = useState('');

  const handleChange = (newDate) => {
    setTime(newDate);
    const newState = {...formState};
    newState["time"] = newDate;
    setFormState(newState);
  };

  const uploadFile = (event) => {
    setFile(event.target.value);
    const newState = {...formState};
    newState["file"] = event.target.value;
    setFormState(newState);
  }

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
        ADD NEW HOMEWORK
      </DialogTitle>
      <DialogContent>
        <TextField onChange={onFormInputChange} 
                   name="defination" 
                   label="Defination" 
                   color="secondary" 
                   fullWidth
        >
        </TextField>
        <input value={file} 
               type="file" 
               name="file" 
               label="file" 
               onChange={uploadFile}
        />
        <Box sx={{ minWidth: 120 }}> 
          <FormControl fullWidth>
            <DateTimePicker onChange={handleChange}
                            value={time}
                            name= "time"
            /> 
          </FormControl>
        </Box>           
        <TextField onChange={onFormInputChange} 
                   name="lesson_id" 
                   label="Lesson" 
                   color="secondary" 
                   fullWidth
        >
        </TextField>
        <TextField onChange={onFormInputChange} 
                   name="assistant_id" 
                   label="Assistant ID" 
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
        <Button onClick={() => props.addHomework(formState)} 
                color="success"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}