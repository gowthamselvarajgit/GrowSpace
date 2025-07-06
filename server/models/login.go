package models

type User struct {
	ID           int
	FirstName    string
	LastName     string
	Email        string
	PhoneNumber  string
	Country      string
	AvatarID     int
	Password     string
}
