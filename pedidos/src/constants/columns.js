export const newOrderColumns = [
    { field: 'cod_art', headerName: 'Cód Art', width: 160, editable: false },
    { field: 'articulo', headerName: 'Artículo', width: 320, editable: false },
    {
      field: 'cantidad',
      headerName: 'Cantidad',
      type: 'number',
      width: 120,
      editable: false,
    },
    {
      field: 'place',
      headerName: 'Destino',
      type: 'singleSelect',
      valueOptions: ['Pilar', 'Tortu'],
      width: 160,
      editable: true,
    },
  ];

  export const pendingOrdersColumns = [
    { field: 'cod_art', headerName: 'Cód Art', width: 160, editable: false },
    { field: 'articulo', headerName: 'Artículo', width: 320, editable: false },
    {
      field: 'cantidad',
      headerName: 'Cantidad',
      type: 'number',
      width: 120,
      editable: false,
    },
    {
      field: 'place',
      headerName: 'Destino',
      type: 'singleSelect',
      width: 160,
      editable: false,
    },
    { field: 'finished', headerName: 'Terminado', type: 'boolean', width: 120 },

  ];

