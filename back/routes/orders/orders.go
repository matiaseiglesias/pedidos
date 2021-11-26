package orders

import (
	"mirepo/controllers/orders"

	"github.com/gin-gonic/gin"
)

func Route(route *gin.Engine) {
	order := route.Group("/orders")
	{
		order.GET("/login", orders.TestDb)
		order.POST("/submit", orders.Hello)
		order.POST("/read", orders.Hello)
	}
}
