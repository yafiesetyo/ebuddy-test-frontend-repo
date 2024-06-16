"use client";

import { Button, TextField } from "@mui/material";
import { auth } from "@/firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import {
  setError,
  setLoading,
  setSuccess,
} from "@/store/features/dataTransferSlice";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { useState, useEffect } from "react";
import { setAuth } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const authState = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const dataTrfState = useSelector((state: RootState) => state.dataTransfer);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (authState) {
      router.push("/");
    }
  }, [authState]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      const creds: UserCredential = await signInWithEmailAndPassword(
        auth,
        form.username,
        form.password
      );
      dispatch(setAuth(true));
      dispatch(setSuccess("Login success"));
      // TODO: set 
    } catch (error) {
      dispatch(setError((error as Error).message));
    }

    dispatch(setLoading(false));
  }

  return (
    <>
      {dataTrfState.loading && <h1>LOADING GUN GUNAWAN</h1>}
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          name="username"
          value={form.username}
          onChange={(e) => {
            setForm({ ...form, username: e.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={form.password}
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
          }}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </>
  );
}
