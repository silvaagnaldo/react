import If, {Else} from './if'

export default function Usuario(props) {
    const usuario = props.usuario || {}
    return(
        <div>
            <If test={usuario && usuario.nome}>
            Seja bem vindo <strong>{usuario.nome}</strong>!
            <Else> 
                Seja bem vindo <strong>Amigão</strong>
            </Else>
            </If>
        </div>
    )
}