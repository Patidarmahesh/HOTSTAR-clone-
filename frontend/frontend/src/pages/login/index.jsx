import React from "react";
import MainLayOut from "../../mainlayout";
import { useForm } from "react-hook-form";
import schema from "../../Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const userRegister = () => {};

  return (
    <MainLayOut>
      <div
        style={{
          border: "1px solid green",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "44.6rem",
        }}
      >
        
          <Card sx={{ maxWidth: 400 }}>
            <form onSubmit={handleSubmit(userRegister)}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Register User
                </Typography>
                <TextField
                  id="standard-basic"
                  label="name"
                  variant="standard"
                  name="name"
                  {...register("name")}
                  error={!!errors?.name}
                  helperText={errors?.name?.message}
                  sx={{ width: "100%" }}
                />
                <TextField
                  id="standard-basic"
                  label="email"
                  variant="standard"
                  name="email"
                  {...register("email")}
                  error={!!errors?.email}
                  helperText={errors?.email?.message}
                  sx={{ width: "100%" }}
                />
                <TextField
                  id="standard-basic"
                  label="password"
                  variant="standard"
                  name="password"
                  {...register("password")}
                  error={!!errors?.password}
                  helperText={errors?.password?.message}
                  sx={{ width: "100%" }}
                />
              </CardContent>
              <CardActions>
                <Button
                  size="large"
                  sx={{
                    width: "80%",
                    background: "black",
                    color: "gold",
                    marginLeft: "32px",
                  }}
                  type="submit"
                >
                  Sign/Up
                </Button>
              </CardActions>
            </form>
            <CardActions>
              <Link
                size="large"
                style={{ marginLeft: "38px", fontSize: "20px" }}
              >
                Go To Login
              </Link>
            </CardActions>
          </Card>
      </div>
    </MainLayOut>
  );
}
