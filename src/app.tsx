import { Cabecalho } from "./components/Cabecalho";
import { Painel } from "./components/Painel";
import { ListaHabilidades } from "./components/ListaHabilidades";
import { ListaProjetos } from "./components/ListaProjetos";
import { Contato } from "./components/Contato";
import { Rodape } from "./components/Rodape";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-8">
        <Cabecalho
          Nome="Walisson dos Santos Dantas"
          Curso="Análise e desenvolvimento de sistemas"
        />

        <main className="space-y-8">
          <Painel titulo="Sobre mim">
            <p>Sou estudante de ADS no IFTM</p>
          </Painel>

          <ListaHabilidades />

          <ListaProjetos />

          <Contato
            email="walisson.dantas@estudante.iftm.edu.br"
            github="https://github.com/WalissonDantas"
          />
        </main>

        <Rodape ano={2026} autor="Walisson" />
      </div>
    </div>
  );
}

export default App;