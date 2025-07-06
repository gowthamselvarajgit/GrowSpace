package register

import (
	"net/http"
	"server/config"

	"github.com/gin-gonic/gin"
)

type RegisterInput struct {
	FirstName   string `json:"first_name"`
	LastName    string `json:"last_name"`
	Email       string `json:"email"`
	PhoneNumber string `json:"phone_number"`
	Country     string `json:"country"`
	AvatarID    int    `json:"avatar_id"`
	Password    string `json:"password"`
}

func Register(c *gin.Context) {
	var input RegisterInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	_, err := config.DB.Exec(`INSERT INTO users 
		(first_name, last_name, email, phone_number, country, avatar_id, password)
		VALUES (?, ?, ?, ?, ?, ?, ?)`,
		input.FirstName, input.LastName, input.Email, input.PhoneNumber, input.Country, input.AvatarID, input.Password)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Email already exists or DB error"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "User registered successfully"})
}