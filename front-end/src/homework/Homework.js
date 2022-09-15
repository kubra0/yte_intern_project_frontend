import React, {useState} from "react";
import {AppBar} from "@mui/material"; 
import Toolbar from '@mui/material/Toolbar';
import {Button} from "@mui/material";
import {HomeworkApi} from "./api/HomeworkApi";
import {useEffect} from "react";
import {DataGrid} from '@mui/x-data-grid';
import {AddHomework} from "./AddHomework/AddHomework";
import {toast} from "react-toastify";
import {IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

function Homework() {
  const [homeworks, setHomeworks] = useState([]);
  const [isAddHomeworkDialogOpen, setAddHomeworkDialogOpen] = useState(false);
  const [selectionModel, setSelectionModel] = useState();
  const homeworkApi = new HomeworkApi();

  async function getHomeworks() {
    const response = await homeworkApi.getHomeworks();
    setHomeworks(response.data);
  }

  useEffect(() => {
    getHomeworks();
  }, []);

  async function addHomework(formState) {
    const response = await homeworkApi.addHomework(formState);
    const messageResponse = response.data;
    if (messageResponse.responseType === "SUCCESS") {
      toast.success(messageResponse.message);
      setAddHomeworkDialogOpen(false);
    }
  }

  async function deleteCell(e){
    e.preventDefault();
    const selectedIDs = selectionModel;
    try {
      const response = await homeworkApi.deleteHomework(selectedIDs);
      const messageResponse = response.data;
      if (messageResponse.responseType === "SUCCESS") {
        toast.success(messageResponse.message);
        getHomeworks((r) => r.filter((x) => !x.id===selectedIDs));
        getHomeworks();
      }
      else{
        toast.error(messageResponse.message);
      }
    }catch (error) {
      toast.error("Please select id");
    }   
  }

  async function handleCellChange(params, newValue) {
    const homeworkIndex = homeworks.findIndex(homework => {
      return homework.id === params.id;
    });
    const updateHomeworks = [... homeworks];
    updateHomeworks[homeworkIndex][params.field] = newValue;
    setHomeworks(updateHomeworks)
    const id = params.id;
    const response = await homeworkApi.updateHomework(id,updateHomeworks[homeworkIndex]);
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
    field: "defination",
    headerName: "Defination",
    width: 150,
    editable: true,
  },
  {
    field: "file",
    headerName: "file",
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
    field: "assistant_id",
    headerName: "Assistant ID",
    width: 150,
    editable: true,
  },
  {
    field: "lesson_id",
    headerName: "Lesson ID",
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
                  onClick={() => setAddHomeworkDialogOpen(true)} 
                  color="inherit"
          >
            Add Homework
          </Button>
        </Toolbar>
      </AppBar>
      <h2>
        HOMEWORKS
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
                  rows={homeworks}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  experimentalFeatures={{ newEditingApi: true }}
                  onCellEditStop={(params,event) =>handleCellChange(params, event.target.value)} //GÜncelleme iptal edilirse eski kayıtları getirir
                  checkboxSelection
                  selectionModel={selectionModel}
                  hideFooterSelectedRowCount
                  onSelectionModelChange={(selection) => {
                    if (selection.length > 1) {
                      const selectionSet = new Set(selectionModel);
                      const result = selection.filter((s) => !selectionSet.has(s));
                      setSelectionModel(result);
                    }else {
                      setSelectionModel(selection);
                    }
                  }}
          />
      </Box>
      <AddHomework isOpen={isAddHomeworkDialogOpen}
                   close={() => setAddHomeworkDialogOpen(false)}
                   addHomework={addHomework}
      />
    </div>
  );
}

export default Homework;