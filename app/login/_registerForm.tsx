"use client";

import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { auth } from "@/firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import {
  setError,
  setLoading,
  setSuccess,
} from "@/store/features/dataTransferSlice";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
  });

  const dataTrfState = useSelector((state: RootState) => state.dataTransfer);
  const dispatch = useDispatch();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        form.username,
        form.password
      );

      dispatch(setSuccess("Register success"));
    } catch (error) {
      dispatch(setError((error as Error).message));
    }

    dispatch(setLoading(false));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          name="name"
          value={form.name}
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
          }}
        />
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
          Register
        </Button>
      </form>
    </>
  );
}
