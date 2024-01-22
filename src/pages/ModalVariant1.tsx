import ModalBody1 from "../components/ModalBody1";
import ModalHeader1 from "../components/ModalHeader1";
import { Modal, Box, } from "@mui/material";

function ModalVariant1() {
  return (
    <>
      <Modal open={true}>
        <Box
          sx={{
            display: "flex",
            width: "1180px",
            height: "600px",
            padding: "var(--none, 0px)",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--none, 0px)",
            borderRadius: "20px",
            background: "#FFF",
          }}
        >
          <ModalHeader1 />
          <ModalBody1 />
        </Box>
      </Modal>
    </>
  );
}

export default ModalVariant1;
