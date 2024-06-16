"use client"

import { Button, TextField } from "@mui/material";
import {
  setError,
  setLoading,
  setSuccess,
} from "@/store/features/dataTransferSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebase";

export interface UserData {
  name: string;
  username: string;
}

export default function UpdateForm({ u }: { u: UserData }) {
  const [form, setForm] = useState({
    name: u.name,
    username: u.username,
    password: "",
  });
  const dispatch = useDispatch();
  const router = useRouter();

  async function handleClick() {
    dispatch(setLoading(true));
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      dispatch(setError((error as Error).message));
    }

    dispatch(setLoading(false));
  }

  return (
    <>
      <form>
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
          Update
        </Button>
      </form>
      <Button type="button" onClick={handleClick} variant="contained">
        Logout
      </Button>
    </>
  );
}
