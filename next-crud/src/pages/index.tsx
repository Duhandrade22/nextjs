import Botao from "../components/botao";
import Formulario from "../components/formulario";
import Layout from "../components/layout";
import Tabela from "../components/tabela";
import Cliente from '../core/cliente'

const clientes = [
  new Cliente('Stefanie', 32, '1'),
  new Cliente('Arthur', 20, '2'),
  new Cliente('Mariana', 25, '3'),
  new Cliente('Eduardo', 34, '4'),
]

function clienteSelecionado(cliente: Cliente) {

}
function clienteExcluido(cliente: Cliente) {

}

export default function Home() {
  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white 

    `}>
      <Layout titulo='Cadastro Simples'>
        <div className="flex justify-end">
          <Botao className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido} />
        <Formulario cliente={clientes[3]}/>
      </Layout>
    </div>
  )
}
