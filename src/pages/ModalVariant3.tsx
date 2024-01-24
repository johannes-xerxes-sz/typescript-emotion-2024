import ModalHeader3 from "../components/ModalHeader3";
import ModalBody3 from "../components/ModalBody3";
import { Modal, Box } from "@mui/material";

function ModalVariant3() {
  return (
    <>
      <Modal
        open={true}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "445px",
            padding: "20px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
            borderRadius: "20px",
            border: "var(--none, 1px) solid var(--Neutral-300, #DEE2E6)",
            background: "#FFF",
            boxShadow:
              "0px 0px 1px 0px rgba(33, 37, 41, 0.08), 0px 2px 2px 0px rgba(33, 37, 41, 0.06);",
          }}
        >
          <ModalHeader3 />
          <ModalBody3 />
        </Box>
      </Modal>
    </>
  );
}

export default ModalVariant3;
