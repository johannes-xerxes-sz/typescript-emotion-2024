import DataGridMUI from "../components/DataGridMUI";
import { Box } from "@mui/material";

function DataGrid() {
  return (
    <>
      <Box sx={{
        backgound: "hotpink"
      }}>
        <DataGridMUI />
      </Box>
    </>
  );
}

export default DataGrid;
