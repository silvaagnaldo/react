import Layout from "../components/Layout"

export default function Jsx() {
    const titulo = "JSX é um Conceito Central"

    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }

    return(
        <Layout titulo="Entendendo o JSX">
            <h1>{titulo}</h1>
            {subtitulo()}
            <p>
                {JSON.stringify({nome: "João", idade: 30})}
            </p>
        </Layout>
    )
}