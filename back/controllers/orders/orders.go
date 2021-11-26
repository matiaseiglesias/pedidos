package orders

import (
	"fmt"
	"mirepo/models"
	"mirepo/models/orders"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Hello(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, "TO-DO")
	fmt.Println("TO-DO")
}

func TestDb(c *gin.Context) {
	models.DB.Create(&orders.Order{Id: "25"})
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

func GetOrderByStatus(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, "TO-DO")
	fmt.Println("TO-DO")
}

func ModifyOrderPlace(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, "TO-DO")
	fmt.Println("TO-DO")
}
