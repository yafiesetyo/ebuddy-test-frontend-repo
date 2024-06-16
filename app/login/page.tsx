import { Button, TextField } from "@mui/material";
import LoginForm from "./_loginForm";
import RegisterForm from "./_registerForm";

export default function Login() {

  return (
    <div className="bg-white text-black">
      <h1>Login</h1>
      <LoginForm/>
      <RegisterForm/>
    </div>
  );
}
