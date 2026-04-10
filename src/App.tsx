const EMAIL = "pasquale.sportelloamico@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

export default function App() {
  return (
    <main className="page" id="contenuto-principale">
      <div className="shell">
        <header className="brand" aria-label="Area logo FIMASS">
          <div className="logo-slot">
            <img
              src="/logo.svg"
              alt="FIMASS"
              width="320"
              height="122"
              decoding="async"
            />
          </div>
        </header>

        <div className="card" role="region" aria-labelledby="titolo-manutenzione">
          <h1 className="title" id="titolo-manutenzione">
            Manutenzione in corso...
          </h1>

          <p className="lead">
            Stiamo effettuando alcuni interventi tecnici per migliorare il
            servizio.
            <br />
            Il portale sarà nuovamente disponibile a breve.
          </p>

          <p className="body">
            Per richieste di preventivo polizze, è possibile contattarci
            temporaneamente al seguente indirizzo email:
          </p>

          <p className="email-wrap">
            <a className="email" href={MAILTO}>
              {EMAIL}
            </a>
          </p>

          <p className="closing">Grazie per la pazienza.</p>
        </div>
      </div>
    </main>
  );
}
