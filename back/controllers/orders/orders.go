package orders

import (
	"fmt"
	"mirepo/models/orders"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/ulule/deepcopier"
)

func Hello(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, "TO-DO")
	fmt.Println("TO-DO")
}

func GetOrderByStatus(c *gin.Context) {

	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

	dbQuery := orders.GetOrders()

	jsonOrders := make(map[string]*orders.JsonOrder)
	response := []*orders.JsonOrder{}

	for _, order := range dbQuery {
		ProccesedOrder, ok := jsonOrders[order.ClientePedido]
		if ok {
			ProccesedOrder.AddItem(order.Items)
		} else {
			newOrder := &orders.JsonOrder{}
			deepcopier.Copy(order).To(newOrder)
			newOrder.AddItem(order.Items)
			jsonOrders[order.ClientePedido] = newOrder
		}
	}

	for _, o := range jsonOrders {
		response = append(response, o)
	}

	c.IndentedJSON(http.StatusOK, response)
	fmt.Println("TO-DO")
}

func TestDb(c *gin.Context) {
	//models.DB.Create(&orders.Order{Id: "25"})
	c.IndentedJSON(http.StatusOK, "TO-DO added")
	fmt.Println("TO-DO")
}

func GetOrders(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, "TO-DO")
	fmt.Println("TO-DO")
}

func GetOrderById(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, "TO-DO")
	fmt.Println("TO-DO")
}

func ModifyOrderPlace(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, "TO-DO")
	fmt.Println("TO-DO")
}

func NewOrder(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, "TO-DO")
	fmt.Println("TO-DO")
}
