import Avatar from "@mui/material/Avatar";
import {
  //   deepOrange,
  deepPurple,
  //   teal,
  //   indigo,
  //   pink,
  //   amber,
} from "@mui/material/colors";
// import { Box } from "@mui/material";

//? The avatar will based itself to the size of the container. Adjust accordingly please.
function LetterAvatars() {
  return (
    <>
      <Avatar
        sx={{
          bgcolor: deepPurple[500],
          minWidth: "40px",
          minHeight: "40px",
          width: "100%",
          height: "100%",
        }}
      >
        JD
      </Avatar>
    </>
  );
}

export default LetterAvatars;
