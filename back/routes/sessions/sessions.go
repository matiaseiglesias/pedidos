package sessions

import (
	"mirepo/controllers/sessions"

	"github.com/gin-gonic/gin"
)

func Route(route *gin.Engine) {
	session := route.Group("/session")
	{
		session.POST("/session", sessions.Hello)
	}
}
