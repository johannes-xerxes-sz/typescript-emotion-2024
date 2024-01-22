import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton  } from "@mui/material";

//TODO TITLE BOLD, #485DB0
function ModalHeader() {
  return (
    <>
      <Box
        sx={{
          overflow: "hidden",
          display: "flex",
          height: "60px",
          padding: "var(--none, 0px) 64px",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: "0",
          alignSelf: "stretch",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          backgroundColor: "#EFF2FD",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "var(--none, 0px)",
            alignItems: "center",
            gap: "10px",
            alignSelf: "stretch",
            borderRadius: "var(--none, 0px)",
          }}
        >
          Lorem Ipsum
        </Box>
        <IconButton >
        <CloseIcon
          sx={{ fontSize: "24px", fontWeight: "bold", color: "#485DB0" }}
        />
        </IconButton>
      </Box>
    </>
  );
}

export default ModalHeader;
