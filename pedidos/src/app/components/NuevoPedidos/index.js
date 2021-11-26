import React from "react";
import { List, Container, Button, ListItem } from "@material-ui/core";

import NavBar from '../../screens/NavBar';
import Order from '../../screens/Order';
import { ListItemText } from "@mui/material";

const list = [
    {
      id: 'a',
      firstname: 'Robin',
      year: 1988,
      items: [{id: 1 , nombre:"semitin", cantidad: 120, place: 'Tortu'},{id: 2 , nombre:"calcita", cantidad: 10, place: 'Tortu'},{id: 3 , nombre:"sal", cantidad: 1200, place: 'Tortu'}]
    },
    {
      id: 'b',
      firstname: 'Dave',
      year: 1990,
      items: [{id: 4 , nombre:"semitin", cantidad: 150, place: 'Tortu'},{id: 5, nombre:"calcita", cantidad: 180, place: 'Tortu'},{id: 6, nombre:"sal", cantidad: 1, place: 'Tortu'}]
    },
  ];

class NuevosPedidos extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        orders: list
      } 
    }
  
    handleConfirm(i){

    }

    handleSelect(orderId, itemId, newPlace){
        console.log('working')
        console.log(orderId +' ' + itemId+' ' +newPlace )
        const orders = this.state.orders.slice();
        const order = orders.filter(order => order.id === orderId);
        console.log(order)
        const n = order[0].items.findIndex((item) => item.id == itemId)
        order[0].items[n].place = newPlace 
        this.setState({orders: orders});
    }

    render() {

        const orders = this.state.orders.map((order) => {
            return (
              <ListItem>
                <Container flex>
                  <ListItemText primary = {order.id}/>

                <Button label = 'Aceptar pedido'>
                  
                  Aceptar
                </Button>
              <Order data = {order} onSelect = {this.handleSelect.bind(this)}>
              </Order>
              </Container>
              </ListItem>
            );
          });

        return(
            <div>
                <NavBar/>
                <Container>
                  <List>
                      {orders}
                  </List>
                </Container>  
            </div>
        
        )
    }
}
export default NuevosPedidos;