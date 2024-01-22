import { Box, Container} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ModalBody2() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "15px",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "15px",
          }}
        >
          <Box>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Box>
        </Box>
      </Box>
        <Container 
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "16px",
            borderRadius: "var(--none, 0px)",
            alignSelf: "stretch",
          }}
        >
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
        </Container >
    </>
  );
}

export default ModalBody2;
