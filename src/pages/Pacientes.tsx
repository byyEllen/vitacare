import { useEffect, useState } from "react";
import { Paciente } from "../types/Paciente";
import PacienteForm from "../components/PacienteForm";
import api from "../services/api";

export default function Pacientes() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  useEffect(() => {
    const mockData: Paciente[] = [
      { id: 1, nome: "Maria Silva", idade: 32, diagnostico: "Hipertensão" },
      { id: 2, nome: "João Souza", idade: 45, diagnostico: "Diabetes Tipo 2" },
    ];
    setPacientes(mockData);
  }, []);

  const handleAdd = (novo: Paciente) => {
    setPacientes((prev) => [...prev, { ...novo, id: prev.length + 1 }]);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Pacientes</h1>

      <PacienteForm onAdd={handleAdd} />

      <ul className="mt-8 space-y-3">
        {pacientes.map((p) => (
          <li key={p.id} className="bg-white p-4 rounded-xl shadow">
            <p><strong>Nome:</strong> {p.nome}</p>
            <p><strong>Idade:</strong> {p.idade}</p>
            <p><strong>Diagnóstico:</strong> {p.diagnostico}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
