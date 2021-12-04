class NewOrders{

    getOrders(){
        fetch('http://127.0.0.1:8080/orders', {mode: 'no-cors'})
      .then(data => {return data})
      .catch(err => {return err});
    }
}
export default NewOrders;