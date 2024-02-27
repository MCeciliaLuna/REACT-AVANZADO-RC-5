import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store/slices/products/thunks";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "images",
    headerName: "Imagen",
    width: 130,
    renderCell: ({row}) => (
      <img src={row.images[0]} alt="Product" style={{ width: 100, height: 100 }} />
    ),
  },
  { field: "title", headerName: "Nombre", width: 130 },
  { field: "category", headerName: "Categoría", width: 130 },
  { field: "price", headerName: "💵", width: 130 },
  { field: "stock", headerName: "📦", width: 130 },
  { field: "rating", headerName: "⭐", width: 130 },
  { field: "actions", headerName: "Acciones", width: 130 },
];

export default function ProductsList() {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        loading={isLoading}
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
