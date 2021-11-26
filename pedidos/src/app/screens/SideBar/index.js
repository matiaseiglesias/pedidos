import { Button, Box, List, ListItem, Drawer } from "@material-ui/core";
import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import {Link, useHistory} from "react-router-dom";

import {ROUTES} from '../../../constants/routes';


function SideBar() {
    
    const history = useHistory();
    return(
        <List>
            <ListItem>
                <Button 
                    label = 'Nuevos pedidos'
                    onClick = {()=> history.push(ROUTES.LOGIN)}>
                    Nuevos pedidos
                </Button>
            </ListItem>
            <ListItem>
                <Button 
                    label = 'Pedidos pendientes'
                    onClick = {()=> history.push(ROUTES.LOGIN)}>
                    Pedidos pendientes
                </Button>
            </ListItem>
            <ListItem>
                <Button 
                    label = 'Pedidos en espera'
                    onClick = {()=> history.push(ROUTES.LOGIN)}>
                    Pedidos en espera
                </Button>
            </ListItem>
        </List>
    )
}
export default SideBar;