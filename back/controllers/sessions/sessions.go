package sessions

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func NewSession(c *gin.Context) {
	//TODO hacer la query a coresec
	answ := make(map[string]string)
	answ["token"] = "dadadadfasfasf"
	c.IndentedJSON(http.StatusOK, answ)
}
