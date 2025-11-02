import { useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }
    if (email === "admin@clinica.com" && senha === "1234") {
      navigate("/home");
    } else {
      setErro("E-mail ou senha incorretos.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-80">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h1>
        {erro && <Alert severity="error" className="mb-4">{erro}</Alert>}
        <TextField
          label="E-mail"
          fullWidth
          className="mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Senha"
          type="password"
          fullWidth
          className="mb-4"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Entrar
        </Button>
      </div>
    </div>
  );
}
