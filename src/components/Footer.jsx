import { linksMenu } from '../data/dados'

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="container text-center">
        <p className="marca-rodape">Luis Buittons</p>
        <nav aria-label="Rodapé">
          <ul className="list-inline">
            {linksMenu.map((l) => (
              <li key={l.href} className="list-inline-item mx-2">
                <a href={l.href}>{l.rotulo}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="small mb-0">
          © {new Date().getFullYear()} Luis Buittons. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
