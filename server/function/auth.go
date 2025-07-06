package functions

import (
	"database/sql"
	"fmt"
	"net/http"
	"server/config"

	"github.com/gin-gonic/gin"
)

func CheckAuth(c *gin.Context) (bool, string) {
	authHeader := c.GetHeader("Authorization")
	fmt.Println("Authorization Header:", authHeader)

	if authHeader == "" {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Authorization Not Found"})
		c.Abort()
		return false, ""
	}

	var userID string
	err := config.DB.QueryRow("SELECT user_id FROM user_login WHERE auth_token = ?", authHeader).Scan(&userID)
	if err == sql.ErrNoRows {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Authorization Mismatch"})
		c.Abort()
		return false, ""
	} else if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database error"})
		c.Abort()
		return false, ""
	}

	return true, userID
}
