import { Select, ListItem, ListItemText, MenuItem } from "@material-ui/core";
import React from "react";

function Item(props) {

    return (
        <ListItem>
             <ListItemText primary= {props.data.nombre} />
             <ListItemText primary= {props.data.cantidad} />

            <Select value={props.data.place} onChange={() => props.onSelect(props.orderId ,props.data.nombre, props.data.place === 'Pilar' ? 'Tortu' : 'Pilar')}>
                <MenuItem value="Pilar">Pilar</MenuItem>
                <MenuItem value="Tortu">Tortu</MenuItem>
          </Select>

        </ListItem>
    )
}

export default Item;
