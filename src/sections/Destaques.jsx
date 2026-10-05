import { destaques } from '../data/dados'
import ProductCard from '../components/ProductCard'

export default function Destaques({ onAdicionar }) {
  return (
    <section className="destaque-section" id="destaque">
      <div className="container">
        <div className="section-heading">
          <span className="sub-title">Seleção Especial</span>
          <h2>Produtos em Destaque</h2>
          <p>Nossas peças mais desejadas. As favoritas femininas estão na coleção abaixo, com o selo Destaque.</p>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {destaques.map((p) => (
            <div className="col" key={p.id}>
              <ProductCard produto={p} onAdicionar={onAdicionar} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
