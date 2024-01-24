import LetterAvatars from "./LetterAvatars";
import { Box, Typography, IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";

// TODO Typography are not yet complete; icon button hover fixes
// TODO STEPPER PROCESS FOR ADD AND APPROVALS.
function StepperComponents() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            bgcolor="success.main"
            sx={{
              width: 118,
              height: 118,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "75px",
            }}
          >
            <Box
              sx={{
                width: 98,
                height: 98,
              }}
            >
              <LetterAvatars />
              <Box sx={{ marginTop: "10px" }}>
                <Typography>John Doe</Typography>
                <Typography>Junior Developer</Typography>
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{ minWidth: "82px", borderBottomWidth: "5px", backgroundColor: "success.main" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            bgcolor="success.main"
            sx={{
              width: 118,
              height: 118,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "75px",
            }}
          >
            <Box
              sx={{
                width: 98,
                height: 98,
              }}
            >
              <LetterAvatars />
              <Box sx={{ marginTop: "10px" }}>
                <Typography>John Doe</Typography>
                <Typography>Junior Developer</Typography>
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{ minWidth: "82px", borderBottomWidth: "5px",  backgroundColor: "success.main"  }}
          />
          <IconButton sx={{ background: "#607CEB" }}>
            <AddIcon
              sx={{ fontSize: "24px", fontWeight: "bold", color: "#FFF" }}
            />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}

export default StepperComponents;
