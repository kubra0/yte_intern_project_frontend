import React from "react";
import {AppBar} from "@mui/material"; 
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import {MenuItem} from "@mui/material";
import {Button} from "@mui/material";
import {Menu} from "@mui/material";
import {Avatar} from "@mui/material";
import {Grid} from "@mui/material";

function Admin() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return(
    <div>
      <AppBar className="appbar" 
              position="static" 
              color="secondary" 
      >
        <Toolbar>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
          <MenuIcon color="action" 
                    fontSize="large"
          />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>
              <Button color="inherit" 
                      href="./StudentView"
              >
                Student
              </Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Button color="inherit" 
                      href="./AssistantView"
              >
                Assistant
              </Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Button color="inherit" 
                      href="./AcademicianView"
              >
                Academician
              </Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Button color="inherit" 
                      href="./LessonView"
              >
                Lesson
              </Button>
            </MenuItem>
          </Menu> 
        <Button href="./Login">
          <Avatar sx={{ width: 32, 
                        height: 32, 
                        marginLeft: 170, 
                        color: "black"
                      }}
          >
            A
          </Avatar>
        </Button>
        </Toolbar>
      </AppBar>
      <h1 className="title">
        HELLO ADMİN
      </h1>
      <h2 className="title">
        Welcome To Admin Panel
      </h2>
      <Grid paddingTop={20} 
            container 
            spacing={3}
      >
        <Grid button 
              xs={4} 
              md={4}
        >
          <Button className="bttn"
                  color="inherit" 
                  href ="./StudentView"
          >
            STUDENT
          </Button>
        </Grid>
        <Grid button 
              xs={4} 
              md={4}
        >
          <Button className="bttn" 
                  color="inherit" 
                  href ="./AcademicianView"
          >
            ACADEMICIAN
          </Button>
        </Grid>
        <Grid button 
              xs={4} 
              md={4}
        >
          <Button className="bttn" 
                  color="inherit" 
                  href ="./AssistantView"
          >
            ASSISTANT
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Admin;