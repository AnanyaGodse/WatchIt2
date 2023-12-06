import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const LoginContainer = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box style={{ backgroundColor: "whitesmoke" }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} centered>
            <Tab value="1" label="Login" style={{ minWidth: "160px" }} />
            <Tab value="2" label="Sign Up" style={{ minWidth: "160px" }} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Login />
        </TabPanel>
        <TabPanel value="2">
          <SignUp />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
export default LoginContainer;
