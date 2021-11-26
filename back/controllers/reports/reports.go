package reports

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Hello(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, "TO-DO")
	fmt.Println("TO-DO")
}
