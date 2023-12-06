import React, { useState } from "react";
import LoginContainer from "./LoginContainer";
import { Dialog, DialogContent, Button, DialogActions } from "@mui/material";

const LoginDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Login/SignUp</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        scroll="body"
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <DialogContent style={{ overflow: "hidden" }}>
          <LoginContainer />
        </DialogContent>
      </Dialog>
      <DialogActions></DialogActions>
    </>
  );
};
export default LoginDialog;
