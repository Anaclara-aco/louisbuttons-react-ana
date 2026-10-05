import { useState } from 'react'
import { categorias, produtosFeminino } from '../data/dados'
import ProductCard from '../components/ProductCard'

export default function Feminino({ onAdicionar }) {
  const [selecionadas, setSelecionadas] = useState([])
  const [ordem, setOrdem] = useState('0')

  function alternar(valor) {
    setSelecionadas((atual) =>
      atual.includes(valor) ? atual.filter((v) => v !== valor) : [...atual, valor]
    )
  }

  const lista = produtosFeminino.filter(
    (p) => selecionadas.length === 0 || selecionadas.includes(p.categoria)
  )
  if (ordem === '1') lista.sort((a, b) => a.preco - b.preco)
  if (ordem === '2') lista.sort((a, b) => b.preco - a.preco)

  return (
    <section className="destaque-section secao-alt" id="feminino">
      <div className="container">
        <div className="section-heading">
          <span className="sub-title">Coleção</span>
          <h2>Moda Feminina</h2>
        </div>

        <div className="row">
          <aside className="col-lg-3 mb-4">
            <div className="card border-0 shadow-sm p-3 filtros">
              <h3 className="h5 mb-4 playfair-display">
                <i className="fa-solid fa-filter me-2" aria-hidden="true"></i> Filtros
              </h3>
              <h4 className="h6 fw-bold mb-3">Categoria</h4>
              {categorias.map((c) => (
                <div className="form-check mb-2" key={c.valor}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`cat-${c.valor}`}
                    checked={selecionadas.includes(c.valor)}
                    onChange={() => alternar(c.valor)}
                  />
                  <label className="form-check-label" htmlFor={`cat-${c.valor}`}>{c.rotulo}</label>
                </div>
              ))}
            </div>
          </aside>

          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
              <span className="text-muted small" aria-live="polite">
                Mostrando {lista.length} {lista.length === 1 ? 'produto' : 'produtos'}
              </span>
              <select
                className="form-select form-select-sm w-auto border-0 bg-light"
                aria-label="Ordenar produtos"
                value={ordem}
                onChange={(e) => setOrdem(e.target.value)}
              >
                <option value="0">Ordenar por: Mais Recentes</option>
                <option value="1">Menor Preço</option>
                <option value="2">Maior Preço</option>
              </select>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
              {lista.map((p) => (
                <div className="col" key={p.id}>
                  <ProductCard produto={p} onAdicionar={onAdicionar} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
