import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { FormHelperText } from "@mui/material";
import styles from "../../styles.module.css";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/auth/authSlice";

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  return (
    <div className={styles.form}>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="set kminchelle"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="set 0lelplR"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <FormHelperText
          id="component-helper-text"
          sx={{ color: "red" }}
        ></FormHelperText>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          INGRESAR
        </Button>
      </Box>
      <div>
        <hr />
        <p>
          username: kminchelle <br />
          password: 0lelplR
        </p>
        <hr />
      </div>
    </div>
  );
};
