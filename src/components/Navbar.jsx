import { useState } from 'react'
import { linksMenu } from '../data/dados'

export default function Navbar({ qtdCarrinho }) {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="header">
      <div className="header-grid">
        <a href="#inicio" className="marca">Luis Buittons</a>

        <nav className="nav" aria-label="Principal">
          <div className={`nav-links${aberto ? ' aberto' : ''}`} id="menu-navegacao">
            <ul>
              {linksMenu.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setAberto(false)}>{l.rotulo}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-actions">
            <ul>
              <li>
                <div className="icon-with-badge">
                  <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                  {qtdCarrinho > 0 && <span className="badge-count">{qtdCarrinho}</span>}
                  <span className="visually-hidden">Carrinho: {qtdCarrinho} itens</span>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  className="botao-menu"
                  aria-label="Abrir menu"
                  aria-expanded={aberto}
                  aria-controls="menu-navegacao"
                  onClick={() => setAberto(!aberto)}
                >
                  <i className="fa-solid fa-bars" aria-hidden="true"></i>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
