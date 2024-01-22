import ModalHeader2 from "../components/ModalHeader2";
import ModalBody2 from "../components/ModalBody2";
import { Modal, Box } from "@mui/material";

function ModalVariant2() {
  return (
    <Modal open={true}>
      <Box
        sx={{
          display: "flex",
          width: "785px",
          height: "700px",
          padding: "20px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
          borderRadius: "20px",
          border: "var(--none, 1px) solid var(--Neutral-300, #DEE2E6)",
          background: "#FFF",
          boxShadow: "0px 0px 1px 0px rgba(33, 37, 41, 0.08), 0px 2px 2px 0px rgba(33, 37, 41, 0.06);"
        }}
      >
        <ModalHeader2 />
        <ModalBody2 />
      </Box>
    </Modal>
      )
}

export default ModalVariant2