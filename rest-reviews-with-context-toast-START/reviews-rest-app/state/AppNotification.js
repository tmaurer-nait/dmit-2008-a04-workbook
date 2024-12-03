import { createContext, useState } from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export const AppNotificationContext = createContext({});

export default function AppNotification(props) {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const showNotification = (msg, sev) => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  };

  return (
    <AppNotificationContext.Provider value={{ showNotification }}>
      {props.children}
      <Snackbar open={open} onClose={handleClose} autoHideDuration={6000}>
        <MuiAlert
          onClose={handleClose}
          elevation={6}
          variant="filled"
          severity={severity}
          sx={{ width: "100%" }}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </AppNotificationContext.Provider>
  );
}
