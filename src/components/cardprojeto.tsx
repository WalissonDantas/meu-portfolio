type ProjetoProps = {
  nome: string;
  descricao: string;
  status: "Em andamento" | "Concluído";
};

export function CardProjeto({nome, descricao, status}: ProjetoProps){
    return(
        <article className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:-translate-y-1 hover: shadow:lg">
            <h3 className="text-x1 font-semibold text-white">{nome}</h3>
            <p className="mt-2 text-sm text-slate-400">{descricao}</p>
            <p className="mt-3 text-sm text-blue-400">{status}</p>
        </article>
    );
}