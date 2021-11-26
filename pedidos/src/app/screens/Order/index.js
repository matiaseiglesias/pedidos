import React from "react";
import { List, ListItem, Button, ListItemText, Divider } from "@material-ui/core";
import { DataGrid } from '@mui/x-data-grid';

import Item from '../../components/Item';

const columns = [
    { field: 'Cód. Cli.', headerName: 'Cód. Cli.', width: 160, editable: false },
    { field: 'Cliente & Pedido', headerName: 'Cliente & Pedido', width: 160, editable: false },
    { field: 'Cód Art', headerName: 'Cód Art', type: 'number', width: 160, editable: false },
    { field: 'nombre', headerName: 'Artículo', width: 160, editable: false },
    {
      field: 'cantidad',
      headerName: 'Cantidad',
      type: 'number',
      width: 120,
      editable: false,
    },
    {
      field: 'place',
      headerName: 'Destino',
      type: 'singleSelect',
      valueOptions: ['Pilar', 'Tortu'],
      width: 160,
      editable: true,
    },
  ];


function Order(props) {

    const items = props.data.items.map((item) => {
        return (
          <Item data = {item} onSelect = {props.onSelect} orderId= {props.data.id} >
          </Item>
        );
      });
    
    return (

        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.data.items}
        columns={columns}
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