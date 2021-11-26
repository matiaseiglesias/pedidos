package orders

import (
	"gorm.io/gorm"
)

type Item struct {
	Id       int
	Nombre   string
	Cantidad int
	Place    string
}

type Order struct {
	gorm.Model
	Id        string
	Firstname string
	Year      int
	Items     Item `gorm:"embedded"`
}
