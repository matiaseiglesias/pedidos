import React from "react";
import { List, Container, Button, ListItem } from "@material-ui/core";

import NewOrders from '../../services/NewOrders';
import NavBar from '../../screens/NavBar';
import Order from '../../screens/Order';
import {newOrderColumns} from '../../../constants/columns'
import { ListItemText, Typography } from "@mui/material";

const list = [
    {
      codigo_cliente: 'AAA002',
      cliente_pedido: 'NESTLE ARGENTINA S.A. | 200047390',
      items: [{id: 1 , articulo:"ENSOLMIN POTASIO NP", cod_art:77000168, cantidad: 10000, place: 'Tortuguitas', empresa: 'EnsolPigs'},
              {id: 2, articulo:"PETMIX VIT GEN NP 25 KG", cod_art:43850739, cantidad: 6000, place: 'Tortuguitas', empresa: 'EnsolPigs'},
              {id: 3 , articulo:"ENSOL-BAC 15% 25 KG", cod_art:77700017, cantidad: 100, place: 'Tortuguitas', empresa: 'EnsolPigs'},
              {id: 3 , articulo:"ENSOL-BAC 15% 25 KG", cod_art:77700017, cantidad: 100, place: 'Tortuguitas', empresa: 'EnsolPigs'},
              {id: 3 , articulo:"ENSOL-BAC 15% 25 KG", cod_art:77700017, cantidad: 100, place: 'Tortuguitas', empresa: 'EnsolPigs'},
              {id: 3 , articulo:"ENSOL-BAC 15% 25 KG", cod_art:77700017, cantidad: 100, place: 'Tortuguitas', empresa: 'EnsolPigs'},
              {id: 3 , articulo:"ENSOL-BAC 15% 25 KG", cod_art:77700017, cantidad: 100, place: 'Tortuguitas', empresa: 'EnsolPigs'}
            ]
    },
    {
      codigo_cliente: 'EEE051',
      cliente_pedido: 'ENSOLPIGS (NUTRICOR) S.A. | 100014208',
      items: [{id: 4 , articulo:"ENSOLMIX DES ADV 0.8%", cod_art:77001645, cantidad: 1200, place: 'Pilar', empresa: 'EnsolPigs'},
              {id: 5, articulo:"PETMIX VIT GEN NP 25 KG", cod_art:43850739, cantidad: 6000, place: 'Pilar', empresa: 'EnsolPigs'},
              {id: 6 , articulo:"ENSOL-BAC 15% 25 KG", cod_art:77700017, cantidad: 100, place: 'Pilar', empresa: 'EnsolPigs'}]
    },
  ];

class NuevosPedidos extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        isLoading: true,
        orders: list
      } 
      
      NewOrders().getOrders()
      .then(data => this.setState({isLoading: false, data}))
      .catch(err => console.error(err));

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

      if (this.state.isLoading)
        return <h2>Loading...</h2>
        
        const orders = this.state.orders.map((order) => {
            return (
              <ListItem>
                <Container fixed>
                <Typography fontFamily = 'Segoe UI' >
                  {'Cod. Cli. ' + order.codigo_cliente}
                </Typography>
                <Typography fontFamily = 'Segoe UI'>
                  {'Cliente & Pedido: ' + order.cliente_pedido}
                </Typography>

                <Button label = 'Aceptar pedido'>
                  
                  Aceptar
                </Button>
              <Order data = {order} onSelect = {this.handleSelect.bind(this)} columns = {newOrderColumns}>
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