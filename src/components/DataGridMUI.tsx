import { DataGrid, GridToolbar, GridCellParams } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";

// TODO - 2 Types of data grid, with settigns and no settings

function DataGridMUI() {
  const handleClick = (action: string, itemId: number) => {
    console.info(`You clicked the ${action} chip for item with ID ${itemId}.`);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "age", headerName: "Age" },
    { field: "birthdate", headerName: "Birthday" },
    {
      field: "actions",
      headerName: "Actions",
      width: 275,
      renderCell: (params: GridCellParams) => (
        <div>
          <Chip
            icon={<VisibilityIcon />}
            label="View"
            color="primary"
            style={{ marginRight: 8 }}
            onClick={() => handleClick("View", params.row.id)}
          />
          <Chip
            icon={<EditIcon />}
            label="Edit"
            color="secondary"
            style={{ marginRight: 8 }}
            onClick={() => handleClick("Edit", params.row.id)}
          />
          <Chip
            icon={<DeleteIcon />}
            label="Delete"
            color="error"
            onClick={() => handleClick("Delete", params.row.id)}
          />
        </div>
      ),
    },
  ];

  const rows = [
    { id: 1, name: "Johannes Xerxes", age: 25, birthdate: "Aug 3, 1999" },
    { id: 2, name: "Jane Doe", age: 30, birthdate: "Aug 3, 1999" },
  ];

  return (
    <Box sx={{height: 300, width: 500}}>
      <DataGrid
        // autoHeight
        disableRowSelectionOnClick
        rows={rows}
        columns={columns}
        checkboxSelection
        pagination
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  );
}

export default DataGridMUI;
