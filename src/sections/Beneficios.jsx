import { beneficios } from '../data/dados'

export default function Beneficios() {
  return (
    <section className="sub-bar py-3" aria-label="Benefícios">
      <div className="container text-center">
        <div className="row g-3">
          {beneficios.map((b) => (
            <div className="col-md-4" key={b.texto}>
              <p className="mb-0 text-uppercase small tracking-wide">
                <i className={`fa-solid ${b.icone} me-2`} aria-hidden="true"></i> {b.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
