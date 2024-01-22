import { Box } from "@mui/material";
import Button from "@mui/material/Button";

// TODO TITLE BOLD, SUBTITLE COLOR, BUTTON COLORS
function ModalBody2() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          padding: "var(--none, 0px)",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          alignSelf: "stretch",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "5px",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          alignSelf: "stretch",
        }}
      >
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
      </Box>
    </>
  );
}

export default ModalBody2;
