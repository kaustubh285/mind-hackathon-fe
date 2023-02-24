import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  const [userStatus, setUserStatus] = React.useState(false);

  React.useEffect(() => {
    let userLoggedIn = localStorage.getItem("loggedIn");
    if (userLoggedIn) {
      setUserStatus(true);
    } else setUserStatus(false);
  }, []);

  const logout = () => {
    setUserStatus(false);
    localStorage.removeItem("loggedIn");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='secondary'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='primary'
            aria-label='menu'
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            color={"primary"}
            component='div'
            sx={{ flexGrow: 1 }}>
            Login
          </Typography>
          <Button
            color='primary'
            onClick={logout}
            variant={userStatus ? "outlined" : "contained"}>
            {userStatus ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
