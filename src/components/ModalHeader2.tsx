import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton } from "@mui/material";

//TODO TITLE BOLD, #485DB0
function ModalHeader() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          padding: "var(--none, 0px)",
          alignItems: "center",
          gap: "var(--1, 8px)",
          alignSelf: "stretch",
          borderRadius: "var(--none, 0px)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "var(--none, 0px)",
            alignItems: "center",
            gap: "10px",
            justifyContent: "space-between",
            alignSelf: "stretch",
            flex: "1 0 0",
          }}
        >
          Lorem Ipsum
        </Box>
        <IconButton>
          <CloseIcon sx={{ fontSize: "24px", fontWeight: "bold", color: "#212529" }} />
        </IconButton>
      </Box>
    </>
  );
}

export default ModalHeader;
