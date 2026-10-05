const formatarPreco = (valor) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function ProductCard({ produto, onAdicionar }) {
  return (
    <div className="card h-100 border-0 product-card">
      <div className="position-relative">
        <img src={produto.imagem} className="card-img-top" alt={produto.nome} loading="lazy" />
        {produto.destaque && <span className="selo-destaque">Destaque</span>}
      </div>
      <div className="card-body text-center d-flex flex-column">
        <span className="text-muted small mb-1 text-uppercase">{produto.rotulo}</span>
        <h3 className="card-title fs-6">{produto.nome}</h3>
        <p className="fw-bold mb-3 mt-auto">{formatarPreco(produto.preco)}</p>
        <button type="button" className="btn w-100 btn-add-carrinho" onClick={() => onAdicionar(produto)}>
          <i className="fa-solid fa-cart-shopping me-2" aria-hidden="true"></i> Adicionar
        </button>
      </div>
    </div>
  )
}
