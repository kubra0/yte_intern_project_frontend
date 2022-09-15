import React, { useState } from "react";
import {AppBar} from "@mui/material"; 
import Toolbar from '@mui/material/Toolbar';
import {Avatar} from "@mui/material";
import {Button} from "@mui/material";
import {ExamApi} from "./api/ExamApi";
import {useEffect} from "react";
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {AddExam} from "./AddExam/AddExam";
import {toast} from "react-toastify";
import {IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'

function Exam() {
    const [exams, setExams] = useState([]);
    const [isAddExamDialogOpen, setAddExamDialogOpen] = useState(false);
    const [selectionModel, setSelectionModel] = useState();
    const examApi = new ExamApi();

    async function getExams() {
      const response = await examApi.getExams();
      setExams(response.data);
    }

    useEffect(() => {
      getExams();
    }, []);

    async function addExam(formState) {
      const response = await examApi.addExam(formState);
      const messageResponse = response.data;
      if (messageResponse.responseType === "SUCCESS") {
        toast.success(messageResponse.message);
        setAddExamDialogOpen(false);
      }
    }

    async function deleteCell(e){
      e.preventDefault();
      const selectedIDs = selectionModel;
        try {
          const response = await examApi.deleteExam(selectedIDs);
          const messageResponse = response.data;
          if (messageResponse.responseType === "SUCCESS") {
            toast.success(messageResponse.message);
            setExams((r) => r.filter((x) => !x.id===selectedIDs));
            getExams();
          }
          else{
            toast.error(messageResponse.message);
          }
        }catch (error) {
          toast.error("Please select id");
        }   
    }

    async function handleCellChange(params, newValue) {
      const examIndex = exams.findIndex(exam => {
        return exam.id === params.id;
      });
      const updateExams = [... exams];
      updateExams[examIndex][params.field] = newValue;
      setExams(updateExams)
      const id = params.id;
      const response = await examApi.updateExam(id,updateExams[examIndex]);
      const messageResponse = response.data;
    }  

    const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      editable: false,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "time",
      headerName: "Time",
      width: 150,
      editable: true,
    },
    {
      field: "room",
      headerName: "Room",
      width: 150,
      editable: true,
    },
    {
      field: "info",
      headerName: "Info",
      width: 150,
      editable: true,
    },
    {
      field: "lesson_id",
      headerName: "Lesson",
      width: 150,
      editable: true,
    },
    {
      field: "delete",
        width: 75,
        disableColumnMenu: true,
        renderHeader: () => {
          return (
            <IconButton
              onClick={deleteCell}
            >
            <DeleteIcon color="secondary" />
            </IconButton>
          );
        }
    },
    ]
  
    return(
      <div>
        <AppBar className="appbar" 
                position="static" 
                color="secondary" 
        >
          <Toolbar> 
            <Button className="bttn"
                    onClick={() => setAddExamDialogOpen(true)} 
                    color= "inherit"
            >
              Add Exam
            </Button>
          </Toolbar>
        </AppBar>
        <h2>
          EXAMS
        </h2>
        <Box sx={{height: 400, 
                  width: '80%',  
                  marginLeft: 15
                }}
        >
        <DataGrid sx={{boxShadow: 2,
                       border: 2,
                       borderColor:'secondary.light'
                     }}
                  rows={exams}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  experimentalFeatures={{ newEditingApi: true }}
                  onCellEditStop={(params,event) =>handleCellChange(params, event.target.value)} 
                  checkboxSelection
                  selectionModel={selectionModel}
                  hideFooterSelectedRowCount
                  onSelectionModelChange={(selection) => { 
                    if (selection.length > 1) {
                      const selectionSet = new Set(selectionModel);
                      const result = selection.filter((s) => !selectionSet.has(s));
                      setSelectionModel(result);
                    } else {
                      setSelectionModel(selection);
                    }
                  }}
        />
        </Box>
        <AddExam isOpen={isAddExamDialogOpen}
                 close={() => setAddExamDialogOpen(false)}
                 addExam={addExam}
        />
      </div>
    );
}

export default Exam;