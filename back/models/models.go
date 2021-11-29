package models

import (
	"mirepo/models/orders"

	"gorm.io/driver/sqlserver"
	"gorm.io/gorm"
)

var DB, _ = "nana", "na" //InitDB()

func InitDB() (*gorm.DB, error) {
	dsn := "sqlserver://sa:Test1234@localhost:1433?database=master"
	DB, err := gorm.Open(sqlserver.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
		//panic("failed to connect database")
	}
	DB.AutoMigrate(&orders.Order{})

	return DB, nil
}
