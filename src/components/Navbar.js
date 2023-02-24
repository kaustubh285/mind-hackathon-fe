import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useNavigation } from "react-router-dom";

function useForceUpdate() {
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue((value) => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here
  // is better than directly setting `setValue(value + 1)`
}

export default function ButtonAppBar() {
  const navigate = useNavigate();

  const [userStatus, setUserStatus] = React.useState(false);

  const forceUpdate = useForceUpdate();

  const url = window.location.pathname.split("/").pop();

  React.useEffect(() => {
    let userLoggedIn = localStorage.getItem("loggedIn");
    if (userLoggedIn) {
      setUserStatus(true);
    } else setUserStatus(false);

    forceUpdate();
  }, [url]);

  const logoutOrLogin = () => {
    if (!userStatus) navigate("/login");

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
          <Button onClick={() => navigate("/checkout")}>Checkout</Button>
          <Button onClick={() => navigate("/home")}>Home</Button>

          <Typography
            variant='h6'
            color={"primary"}
            component='div'
            sx={{ flexGrow: 1 }}>
            Mind
          </Typography>
          <Typography
            variant='h6'
            color={"primary"}
            component='div'
            sx={{ flexGrow: 1 }}>
            Mind
          </Typography>

          <Button
            color='primary'
            onClick={logoutOrLogin}
            variant={userStatus ? "outlined" : "contained"}>
            {userStatus ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
