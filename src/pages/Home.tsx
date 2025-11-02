import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Bem-vindo à Clínica VitaCare</h1>
        <p className="text-gray-700 mb-6">
          Escolha uma opção para continuar.
        </p>
        <Button variant="contained" color="primary" onClick={() => navigate("/pacientes")}>
          Gerenciar Pacientes
        </Button>
      </div>
    </div>
  );
}
