export default function Botoes(props) {
    return(
        <div>
            <button onClick={props.setDec}>-</button>
            <button onClick={props.setInc}>+</button>  
        </div>
    )
}