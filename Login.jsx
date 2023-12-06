import React from "react";
import {
  Box,
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Link,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { blue } from "@mui/material/colors";
import { useForm } from "react-hook-form";

const shade = blue[400];

const paperStyle = {
  padding: "20px",
  height: "80vh",
  width: "300px",
  margin: "0px auto",
  color: shade,
  backgroundColor: "whitesmoke",
};

const avatarStyle = {
  backgroundColor: shade,
};

const textFieldStyle = {
  margin: "10px auto",
};

const submitBtnStyle = {
  marginTop: "10px",
  marginBottom: "20px",
  color: "white",
  backgroundColor: shade,
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = (data) => {
    const requestOptions = {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:5173/login", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "UserLogin");
      });
  };
  return (
    <Box>
      <Paper elevation={3} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddIcon />
          </Avatar>
          <h3> LOGIN </h3>
        </Grid>
        <form name="SignUpForm" noValidate onSubmit={handleSubmit(submit)}>
          <TextField
            style={textFieldStyle}
            name="email"
            id="s-email"
            label="Email"
            variant="outlined"
            type="email"
            required
            fullWidth
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
            error={!!errors?.email}
            helperText={errors?.email ? errors.email.message : null}
          />
          <TextField
            style={textFieldStyle}
            name="password"
            id="s-password"
            label="Password"
            variant="outlined"
            type="password"
            required
            fullWidth
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 4,
                message: "Password should be of atleast 4 characters.",
              },
              maxLength: {
                value: 12,
                message: "Password should not exceed 12 characters.",
              },
            })}
            error={!!errors?.password}
            helperText={errors?.password ? errors.password.message : null}
          />
          <Grid align="center">
            <Button type="submit" variant="contained" style={submitBtnStyle}>
              LOGIN
            </Button>
          </Grid>
        </form>

        <Typography variant="body2">
          Don't have an account?
          <Link href="#" color="inherit" underline="hover">
            {" Sign Up "}
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};
export default Login;
