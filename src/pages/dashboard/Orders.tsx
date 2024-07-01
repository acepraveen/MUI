import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";

export default function Orders() {
  const [rowsData, setRowsData] = React.useState([]);

  const columns: GridColDef<(typeof rowsData)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 200,
      valueGetter: (value, row: any) =>
        `${row.first_name || ""} ${row.last_name || ""}`,
    },
    {
      field: "email",
      headerName: "Email",
      width: 350,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 160,
    },
    {
      field: "contact",
      headerName: "Contact",
      width: 200,
      type: "number",
    },
  ];

  const getOrdersList = async () => {
    try {
      const res = await axios.get(
        "https://my.api.mockaroo.com/client?key=bc303150"
      );
      if (res && res.data) {
        setRowsData(res.data);
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  React.useEffect(() => {
    getOrdersList();
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rowsData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
