import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/material";

//TODO H2 BOLD, #607CEB
function SampleComponent() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <ArrowBackIcon
          sx={{ fontSize: "24px", fontWeight: "bold", color: "#F29D38" }}
        />
        <h2>Reports</h2>
      </Box>
    </>
  );
}

export default SampleComponent;
