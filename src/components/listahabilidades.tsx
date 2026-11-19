type Habilidade = {
  id: number;
  nome: string;
  nivel: "Básico" | "Intermediário" | "Avançado";
};

const habilidades: Habilidade[] = [
  { id: 1, nome: "HTML", nivel: "Intermediário" },
  { id: 2, nome: "CSS", nivel: "Intermediário" },
  { id: 3, nome: "JavaScript", nivel: "Básico" },
  { id: 4, nome: "Banco de Dados", nivel: "Básico" },
  { id: 5, nome: "Infraestrutura", nivel: "Básico" },
];

export function ListaHabilidades() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {habilidades.map((habilidade) => (
        <li
        
          key={habilidade.id}
          className="rounded-xl border border-slate-800 bg-slate-900 p-4 transition hover:-translate-y-1 hover:shadow-lg">

          <h3 className="text-lg font-semibold text-white">
            {habilidade.nome}
          </h3>

          <p className="mt-2 text-sm text-slate-400">{habilidade.nivel}</p>

          {habilidade.nivel === "Básico" && (
            <span className="mt-3 inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-300">
              Iniciante
            </span>
          )}

        </li>
      ))}
    </ul>
  );
}
