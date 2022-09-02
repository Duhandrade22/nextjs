import { useState } from "react";
import Botao from "../components/botao";
import Formulario from "../components/formulario";
import Layout from "../components/layout";
import Tabela from "../components/tabela";
import Cliente from '../core/cliente'

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Stefanie', 32, '1'),
    new Cliente('Arthur', 20, '2'),
    new Cliente('Mariana', 25, '3'),
    new Cliente('Eduardo', 34, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  function clienteExcluido(cliente: Cliente) {

  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }
    
  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white 

    `}>
      <Layout titulo='Cadastro Simples'>
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao onClick={novoCliente} className="mb-4">Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido} />
          </>

        ) : (
          <Formulario cliente={cliente} 
          clienteMudou={salvarCliente}
          cancelado={() => setVisivel('tabela')}
          />

        )}

      </Layout>
    </div>
  )
}
