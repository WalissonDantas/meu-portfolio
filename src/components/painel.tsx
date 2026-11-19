import type { ReactNode } from 'react'
type PainelProps = {
    titulo: string;
    children: ReactNode;
}

export function Painel({titulo, children} : PainelProps){
    return(
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="mb-3 text-xl font-semibold text-white">
                {titulo}
            </h2>
            {children}
        </section>
    )
}