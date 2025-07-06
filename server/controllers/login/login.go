package login

import (
	"database/sql"
	"net/http"

	"server/config"
	functions "server/function"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"

	"server/models"
)

type LoginInput struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}


func Login(c *gin.Context) {
	var input LoginInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var user models.User
	row := config.DB.QueryRow("SELECT id, password FROM users WHERE email = ?", input.Email)
	err := row.Scan(&user.ID, &user.Password)
	if err == sql.ErrNoRows {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid email or password"})
		return
	} else if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database error"})
		return
	}

	if input.Password != user.Password {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid email or password"})
		return
	}

	token := uuid.New().String()
	_, err = config.DB.Exec("INSERT INTO user_login (user_id, auth_token) VALUES (?, ?)", user.ID, token)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error storing auth token"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message":    "Login successful",
		"auth_token": token,
	})
}

func Protected(c *gin.Context) {
	ok, userID := functions.CheckAuth(c)
	if !ok {
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Access granted",
		"user_id": userID,
	})
}