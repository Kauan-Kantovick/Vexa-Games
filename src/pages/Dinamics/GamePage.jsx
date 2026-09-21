import { useParams } from "react-router-dom"

function GamePage () {

    const { id } = useParams(); 

    return (
        <>
            <h1>Page of game whit id = {id}</h1>
        </>
    )
}

export default GamePage