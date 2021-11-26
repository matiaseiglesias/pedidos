package routes

import (
	"mirepo/routes/orders"
	"mirepo/routes/reports"
	"mirepo/routes/sessions"

	"github.com/gin-gonic/gin"
)

var Router = gin.Default()

func InitRoutes(route *gin.Engine) {
	orders.Route(route)
	sessions.Route(route)
	reports.Route(route)
}
