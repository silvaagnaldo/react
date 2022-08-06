import DiretaFilho  from "./DiretaFilho"

export default function DiretaPai(props) {
    return(
        <div>
            <DiretaFilho nome="Junior" idade={20} nerd={true}/>
            <DiretaFilho nome="Chaves" idade={17} nerd={false}/>
        </div>
    )
}