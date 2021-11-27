import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {useHistory} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Drawer, Grid} from "@material-ui/core";
import styles from "./styles.module.scss"
import {ROUTES} from '../../../constants/routes';
//import {getValue, removeValue} from '../../../services/LocalStorageService';
//import {post} from '../../../utils/requests'
import Button from "@material-ui/core/Button";
import SideBar from "../SideBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: 'linear-gradient(45deg, #20B613 30%, #17E805 90%)',
    color: 'white'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar({onRefresh, path}) {
  const history = useHistory();
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [visible, setVisibility] = useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleVisibility = () => {
    visible ? setVisibility(false) : setVisibility(true)
  };

  

  const handleEditProfile = () => history.push(ROUTES.EDIT_PROFILE);
  const handleLogout = () => {history.push(ROUTES.LOGIN)}

  //const handleLogout = () => {
  //  const user = getValue("user")
  //  if (user.provider === "google") {
  //    firebase.auth().signOut().then(() => {
  //      post({headers: {'x-auth-token': user.accessToken}, apiRoute: 'api/users/signOut'})
  //          .then(res => {
  //            removeValue("user");
  //            history.replace(ROUTES.LOGIN)
  //          })
  //          .catch(err => console.log(err))
  //    })
  //        .catch((error) => {
  //          console.log("Se cerró mal sesion")
  //        });
  //  } else {
  //    post({body: {'_id': user._id}, headers: {'x-auth-token': user.accessToken}, apiRoute: 'api/users/signOut'})
  //        .then(res => {
  //          removeValue("user");
  //          history.replace(ROUTES.LOGIN)
  //        })
  //        .catch(err => console.log(err))
  //  }
  //  removeValue("user");
  //  history.replace(ROUTES.LOGIN)
  //}

  return (
      <div className={classes.root}>
        {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
        <AppBar position="static" className={classes.appBar}>

          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick = {handleVisibility}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Apertura De Pedidos WMS
            </Typography>
            {(
                <div>
                  <Grid container className={styles.uploadButton}>
                    <Grid item>
                      <IconButton
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleMenu}
                          color="inherit"
                      >
                        <AccountCircle/>
                      </IconButton>
                      <Menu
                          id="menu-appbar"
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={open}
                          onClose={handleClose}
                      >
                        <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
                      </Menu>
                    </Grid>
                  </Grid>
                </div>
            )}
          </Toolbar>
        </AppBar>
                        

        {  <Drawer
            open = {visible} onClose = {handleVisibility}
          >
            <SideBar />
        </Drawer>
            
          
          }
      </div>
  );
}
