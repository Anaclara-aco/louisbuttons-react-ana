import Hero from '../sections/Hero'
import Beneficios from '../sections/Beneficios'
import Destaques from '../sections/Destaques'
import Feminino from '../sections/Feminino'
import ChamadaFinal from '../sections/ChamadaFinal'

export default function LandingPage({ onAdicionar }) {
  return (
    <>
      <Hero />
      <Beneficios />
      <Destaques onAdicionar={onAdicionar} />
      <Feminino onAdicionar={onAdicionar} />
      <ChamadaFinal />
    </>
  )
}
