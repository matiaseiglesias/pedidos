package reports

import (
	"mirepo/controllers/reports"

	"github.com/gin-gonic/gin"
)

func Route(route *gin.Engine) {
	report := route.Group("/reports")
	{
		report.POST("/session", reports.Hello)
	}
}
