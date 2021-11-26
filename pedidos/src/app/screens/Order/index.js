import React from "react";
import { List, ListItem, Button, ListItemText, Divider } from "@material-ui/core";
import { DataGrid } from '@mui/x-data-grid';

import Item from '../../components/Item';


function Order(props) {
    
    return (

        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.data.items}
        columns={props.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        onEditRowsModelChange = {(editRowsModel, details) => {for (let itemId in editRowsModel) {props.onSelect(props.data.id, itemId, editRowsModel[itemId].place.value)}}}
      />
    </div>
    )
}

export default Order;

//console.log("pedido id "+ props.data.id + " " + itemId + ": "+ editRowsModel[itemId].place.value)
//Object.keys(editRowsModel)[0], editRowsModel['3'].place.value