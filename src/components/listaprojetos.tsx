import { CardProjeto } from "./cardprojeto";

type Projeto = {
  id: number;
  nome: string;
  descricao: string;
  status: "Em andamento" | "Concluído";
};

const projetos: Projeto[] = [
  {
    id: 1,
    nome: "Sistema de Estoque",
    descricao: "Sistema para gerenciamento de peças de motocicletas",
    status: "Em andamento",
  },

  {
    id: 2,
    nome: "Agente de IA para WhatsApp",
    descricao: "Agente para atendimento via WhatsApp automatizando respostas para clientes",
    status: "Em andamento",
  }

];

export function ListaProjetos() {
    return(
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projetos.map((projeto) => (
                <CardProjeto
                key={projeto.id}
                nome={projeto.nome}
                descricao={projeto.descricao}
                status={projeto.status}
                />
            ))}
        </section>
    );
}
