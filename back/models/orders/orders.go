package orders

import (
	"gorm.io/gorm"
)

type Item struct {
	Id       int
	CodArt   int
	Articulo string
	Cantidad int
	Site     string
	Empresa  string
	Status   string
}

type Order struct {
	gorm.Model
	CodigoCliente      string
	ClientePedido      string
	FechaEntrega       string
	Observaciones      string
	Leyenda1           string
	RazonSocial        string
	NombreVendedor     string
	FechaPedido        string
	FechaAprobacion    string
	HoraAprobacion     string
	Estado             string
	Leyenda4           string
	DescuentoAdicional string

	Items Item `gorm:"embedded"`
}

type JsonOrder struct {
	CodigoCliente      string
	ClientePedido      string
	FechaEntrega       string
	Observaciones      string
	Leyenda1           string
	RazonSocial        string
	NombreVendedor     string
	FechaPedido        string
	FechaAprobacion    string
	HoraAprobacion     string
	Estado             string
	Leyenda4           string
	DescuentoAdicional string

	Items []Item
}

func (order *JsonOrder) AddItem(i Item) {
	order.Items = append(order.Items, i)
}

func GetOrders() []Order {
	return []Order{

		{
			CodigoCliente: "AAA002",
			ClientePedido: "NESTLE ARGENTINA S.A. | 200047390",
			Items: Item{
				Id:       1,
				CodArt:   77000168,
				Articulo: "ENSOLMIN POTASIO NP",
				Cantidad: 10000,
				Site:     "Tortuguitas",
				Empresa:  "Ensol",
				Status:   "Nuevo",
			},
		},
		{
			CodigoCliente: "AAA002",
			ClientePedido: "NESTLE ARGENTINA S.A. | 200047390",
			Items: Item{
				Id:       2,
				CodArt:   43850739,
				Articulo: "PETMIX VIT GEN NP 25 KG",
				Cantidad: 6000,
				Site:     "Tortuguitas",
				Empresa:  "Ensol",
				Status:   "Nuevo",
			},
		},
		{
			CodigoCliente: "AAA002",
			ClientePedido: "NESTLE ARGENTINA S.A. | 200047390",
			Items: Item{
				Id:       3,
				CodArt:   77700017,
				Articulo: "ENSOLMIX DES ADV 0.8%",
				Cantidad: 100,
				Site:     "Tortuguitas",
				Empresa:  "Ensol",
				Status:   "Nuevo",
			},
		},
		{
			CodigoCliente: "EEE051",
			ClientePedido: "ENSOLPIGS (NUTRICOR) S.A. | 100014208",
			Items: Item{
				Id:       4,
				CodArt:   77001645,
				Articulo: "ENSOLMIX DES ADV 0.8%",
				Cantidad: 1200,
				Site:     "Pilar",
				Empresa:  "EnsolPigs",
				Status:   "Nuevo",
			},
		},
		{
			CodigoCliente: "EEE051",
			ClientePedido: "ENSOLPIGS (NUTRICOR) S.A. | 100014208",
			Items: Item{
				Id:       5,
				CodArt:   43850739,
				Articulo: "PETMIX VIT GEN NP 25 KG",
				Cantidad: 6000,
				Site:     "Pilar",
				Empresa:  "EnsolPigs",
				Status:   "Nuevo",
			},
		},
		{
			CodigoCliente: "EEE051",
			ClientePedido: "ENSOLPIGS (NUTRICOR) S.A. | 100014208",
			Items: Item{
				Id:       6,
				CodArt:   77700017,
				Articulo: "ENSOL-BAC 15% 25 KG",
				Cantidad: 100,
				Site:     "Pilar",
				Empresa:  "EnsolPigs",
				Status:   "Nuevo",
			},
		},
	}
}
