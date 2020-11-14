import {useState} from 'react'

function Home(){
    return (
    <div>
        <h1 style='color:#006699;'>Fernando Gonçales - Dev</h1>
        <Contador/>
    </div>
    )
}

function Contador(){
    const [contador,setContador] = useState(1)

    function adicionarContador(){
        setContador(contador + 1)
    }

    return (
        <div>
            <div>{contador}</div>
            <div><button onClick={adicionarContador}>Adicionar</button></div>
        </div>
    )
}

export default Home