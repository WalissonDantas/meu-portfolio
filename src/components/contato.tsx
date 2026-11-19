type ContatoProps = {
  email: string;
  github: string;
};

export function Contato({ email, github }: ContatoProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="mb-4 text-xl font-semibold text-white">Contato</h2>

      <div className="grid grid-cols-2 gap-3">
        <a
          href={`mailto:${email}`}
          className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-center font-medium text-white transition hover:border-blue-500 hover:bg-slate-700"
        >
          E-mail
        </a>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-center font-medium text-white transition hover:border-blue-500 hover:bg-slate-700"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
