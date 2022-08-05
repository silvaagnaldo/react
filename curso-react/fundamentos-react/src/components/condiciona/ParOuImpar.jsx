export default function ParOuImpar(props) {
    const num = props.numero
    const res = props.numero % 2 === 0 ? 'Par' : 'Impar'

    return(
        <div>
            <span>O número {num} é {res}</span>
        </div>
    )
}