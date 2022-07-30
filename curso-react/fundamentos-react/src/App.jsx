import "./App.css"

import Card from "./components/layout/Card"

import Fragmento from "./components/basicos/Fragmento"
import ComParametro from "./components/basicos/ComParametro"
import Primeiro from "./components/basicos/Primeiro"
import Aleatorio from "./components/basicos/Aleatorio"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"

export default function App() {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Agnaldo" />
                        <FamiliaMembro nome="Camila" />
                        <FamiliaMembro nome="Paty"  />
                    </Familia>
                </Card>
                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>
                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>
                <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                    <ComParametro
                        titulo="Situação do aluno"
                        aluno="Pedro Silva"
                        nota={9.3}
                    />
                </Card>
                <Card titulo="#01 - Primeiro Componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
            </div>


        </div>
    )
} 