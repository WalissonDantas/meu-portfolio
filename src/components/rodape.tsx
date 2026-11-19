type RodapeProps = {
    ano : number;
    autor: string;
}

export function Rodape({ ano, autor}: RodapeProps){
    return(
        <footer className="border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
            <p>© {autor} {ano} - Portfólio Pessoal</p>
        </footer>
    )
}