const foto = (id) =>
  `https://images.unsplash.com/${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`

export const linksMenu = [
  { href: '#inicio', rotulo: 'Início' },
  { href: '#destaque', rotulo: 'Destaques' },
]

export const beneficios = [
  { icone: 'fa-gem', texto: 'Design Exclusivo' },
  { icone: 'fa-truck-fast', texto: 'Frete Grátis' },
  { icone: 'fa-gift', texto: 'Embalagem Ecológica' },
]

export const destaques = [
  { id: 'mas-01', nome: 'Camisa Social Oxford', rotulo: 'Masculino', preco: 350, imagem: foto('photo-1602810318383-e386cc2a3ccf') },
  { id: 'mas-03', nome: 'Blazer Lã Fria', rotulo: 'Masculino', preco: 1250, imagem: foto('photo-1551028719-00167b16eac5') },
  { id: 'mas-06', nome: 'Jaqueta de Couro Biker', rotulo: 'Masculino', preco: 1800, imagem: foto('photo-1559551409-dadc959f76b8') },
]

export const categorias = [
  { valor: 'vestidos', rotulo: 'Vestidos' },
  { valor: 'blusas', rotulo: 'Blusas & Camisas' },
  { valor: 'saias-calcas', rotulo: 'Saias & Calças' },
  { valor: 'casacos', rotulo: 'Casacos & Blazers' },
]

export const produtosFeminino = [
  { id: 'fem-01', nome: 'Vestido Midi em Seda', rotulo: 'Vestidos', categoria: 'vestidos', destaque: true, preco: 890, imagem: foto('photo-1566174053879-31528523f8ae') },
  { id: 'fem-02', nome: 'Blusa Crepe com Amarração', rotulo: 'Blusas', categoria: 'blusas', preco: 320, imagem: foto('photo-1551163943-3f6a855d1153') },
  { id: 'fem-03', nome: 'Calça Pantalona Cintura Alta', rotulo: 'Alfaiataria', categoria: 'saias-calcas', preco: 450, imagem: foto('photo-1509631179647-0177331693ae') },
  { id: 'fem-04', nome: 'Saia Plissada Clássica', rotulo: 'Saias', categoria: 'saias-calcas', destaque: true, preco: 280, imagem: foto('photo-1582142306909-195724d33ffc') },
  { id: 'fem-05', nome: 'Casaco em Tweed', rotulo: 'Casacos', categoria: 'casacos', destaque: true, preco: 1150, imagem: foto('photo-1539533018447-63fcce2678e3') },
  { id: 'fem-06', nome: 'Vestido Longo Botânico', rotulo: 'Vestidos', categoria: 'vestidos', preco: 750, imagem: foto('photo-1515372039744-b8f02a3ae446') },
]
