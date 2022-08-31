import Layout from "../components/layout";
import Tabela from "../components/tabela";
import Cliente from '../core/cliente'

const clientes = [
  new Cliente('Stefanie', 32,'1'),
  new Cliente('Arthur', 20,'2'),
  new Cliente('Mariana', 25,'3'),
  new Cliente('Eduardo', 34,'4'),
]

export default function Home() {
  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white 

    `}>
    <Layout titulo='Cadastro Simples'>
      <Tabela clientes={clientes}></Tabela>
    </Layout>
    </div>
  )
}
