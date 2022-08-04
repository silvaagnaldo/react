import produtos from "../../data/produtos"
import './TabelaProdutos.css'

export default function TabelaProdutos(props) {
    
        const getLinhas = produtos.map((produto, i) => {
            return(
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                </tr>
            )
        } )
    

    return(
       <div className="TabelaProdutos">
             <table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Peço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas}        
                </tbody>                 
           
        </table>
       </div>
    )
} 