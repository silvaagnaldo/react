export default function Aleatorio(props) {
    /*
    const min = props.min
    const max = props.max  pode ser assim ou 
    */
   const { min, max  } = props
   
    const numSort = parseInt(Math.random() * (max - min )) + min
    return(
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor Mínimo:</strong> {min}
            </p>
            <p>
                <strong>Valor Máximo:</strong> {max}
            </p>
            <p>
                <strong>Valor Escolhido:</strong> {numSort}
            </p>
        </div>
    )
}