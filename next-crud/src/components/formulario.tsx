import { useState } from "react";
import Cliente from "../core/cliente";
import Botao from "./botao";
import Entrada from "./entrada";

interface FormularioProps {
    cliente: Cliente
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada texto='Código'
                    valor={id}
                    className='mb-4'
                />
            ) : false}
            <Entrada texto='Nome'
                valor={nome}
                valorMudou={setNome}
                className='mb-4'
            />
            <Entrada texto='Idade'
                tipo="number"
                valor={idade}
                valorMudou={setIdade}
            />
            <div className={`mt-7 flex justify-end
                
            `}>
                <Botao className="mr-2">
                    Salvar
                </Botao>
                <Botao className={`bg-gradient-to-r from-gray-400 to-gray-700`}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}