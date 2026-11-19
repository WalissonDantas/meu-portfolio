type CabecalhoProps = {
    Nome: string;
    Curso: string;
}

export function Cabecalho({Nome, Curso}: CabecalhoProps){
    return (
    <header className="flex flex-col items-center gap-6 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:flex-row">
        <img
        src="/foto-de-perfil.png"
        alt="Foto de perfil de Walisson"
        className="h-40 w-40 shrink-0 rounded-full object-cover sm:h-60 sm:w-60"
        />

        <div>
        <h1 className="text-3xl font-bold text-white">{Nome}</h1>
        <p className="mt-2 text-slate-400">{Curso}</p>
        </div>
    </header>
    );
}