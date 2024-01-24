import { Box, Typography, IconButton } from "@mui/material";
import LetterAvatars from "./LetterAvatars";
import AddIcon from "@mui/icons-material/Add";

// TODO - Change +number depending on the size limit of the avatar count.
function AvatarContainerComponents() {
  const avatarCount = 7;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: 2,
        }}
      >
        <Box sx={{ marginRight: 2 }}>
          <Typography>TAT Members</Typography>
        </Box>
        {[...Array(avatarCount)].map((_, index) => (
          <Box
            key={index}
            sx={{
              marginLeft: -3,
              width: "40px",
            }}
          >
            <IconButton>
              <LetterAvatars />
            </IconButton>
          </Box>
        ))}
        <Typography
          sx={{
            marginLeft: -3,
            zIndex: 1,
            width: "40px",
            height: "40px",
            background: "#E3F2FD",
            borderRadius: "50%",
            display: "flex",
            border: "3px solid #FFF",
          }}
        >
          <IconButton sx={{ color: "#2196F3" }}>+2</IconButton>
        </Typography>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            sx={{
              borderRadius: "50%",
              border: "6px dotted #90A4AE",
              background: "#FFF",
            }}
          >
            <AddIcon
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#90A4AE",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}

export default AvatarContainerComponents;
