package orders

import (
	"mirepo/controllers/orders"

	"github.com/gin-gonic/gin"
)

func Route(route *gin.Engine) {
	order := route.Group("/orders")
	{
		order.GET("/", orders.GetOrderByStatus)
		order.GET("/:status", orders.GetOrderByStatus)
		//order.GET("/:id", orders.GetOrderById)
		//order.POST("/submit", orders.Hello)
		order.POST("/", orders.NewOrder)
	}
}
