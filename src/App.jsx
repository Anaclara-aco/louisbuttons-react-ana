import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Aviso from './components/Aviso'
import LandingPage from './pages/LandingPage'

export default function App() {
  const [qtdCarrinho, setQtdCarrinho] = useState(0)
  const [aviso, setAviso] = useState(null)

  useEffect(() => {
    if (!aviso) return
    const t = setTimeout(() => setAviso(null), 2500)
    return () => clearTimeout(t)
  }, [aviso])

  function adicionar(produto) {
    setQtdCarrinho((q) => q + 1)
    setAviso({ texto: `${produto.nome} adicionado ao carrinho` })
  }

  return (
    <>
      <Navbar qtdCarrinho={qtdCarrinho} />
      <main>
        <LandingPage onAdicionar={adicionar} />
      </main>
      <Footer />
      <Aviso mensagem={aviso?.texto} />
    </>
  )
}
