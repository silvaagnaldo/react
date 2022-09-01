import Cliente from "../core/Cliente"

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props: TabelaProps) {

    function rederizarCabecalho() {
        return(
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((Cliente, i) => {
            return(
                <tr key={Cliente.id}
                className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'} `}
                >
                    <td className="text-left p-4">{Cliente.id}</td>
                    <td className="text-left p-4">{Cliente.nome}</td>
                    <td className="text-left p-4">{Cliente.idade}</td>
                </tr>
            )
        })
    }

    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {rederizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}