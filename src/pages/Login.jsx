import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Alert, FormHelperText } from "@mui/material";
import styles from "../../styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import { getLogin } from "../store/slices/auth/thunks";

export const Login = () => {
  const dispatch = useDispatch();
  const { formData, onChangeInput } = useForm();
  const { errorMessage } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getLogin(formData.username, formData.password));
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
        {
          errorMessage.msg && (
            <Alert severity="error">{`${errorMessage.msg} ⛔ ERROR ${errorMessage.type}`}</Alert>
          )
        }
        <TextField
        error={errorMessage.msg ? true : false}
          margin="normal"
          required
          fullWidth
          id="username"
          label="set kminchelle"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={onChangeInput}
        />
        <TextField
        error={errorMessage.msg ? true : false}
          margin="normal"
          required
          fullWidth
          name="password"
          label="set 0lelplR"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={onChangeInput}
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
       </div>
    </div>
  );
};
