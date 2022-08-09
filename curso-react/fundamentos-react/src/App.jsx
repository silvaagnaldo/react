import "./App.css"

import Card from "./components/layout/Card"

import Fragmento from "./components/basicos/Fragmento"
import ComParametro from "./components/basicos/ComParametro"
import Primeiro from "./components/basicos/Primeiro"
import Aleatorio from "./components/basicos/Aleatorio"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ParOuImpar from "./components/condiciona/ParOuImpar"
import Usuario from "./components/condiciona/Usuario"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from "./components/formulario/Input"
import Contador from "./components/contador/Contador"


export default function App() {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo='#12 - Contador' color='#424242'>
                    <Contador numeroInicial={10}/>
                </Card>

                <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                    <Input />
                </Card>

                <Card titulo="#10 - Comunicação Direta" color="#8BAD39">
                    <IndiretaPai />
                </Card>

                <Card titulo="#09 - Comunicação Direta" color="#59323C">
                    <DiretaPai />
                </Card>

                <Card titulo="#8 - Renderização Condicional" color="#982395">
                    <ParOuImpar numero={33}/>
                    <Usuario usuario={{ nome: 'Fernando' }} />
                    {/*<Usuario usuario={{ email: 'Fer@nando.com' }} />
                    <Usuario /> */}
                </Card>

                <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                    <TabelaProdutos />
                </Card>
                <Card titulo="#06 - Repetição" color="#FF4C65">
                    <ListaAlunos />
                </Card>

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