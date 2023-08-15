import { Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame"

function GameGrid() {
    const { error, games } = useGame();

    return (
        <>  
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    )
}

export default GameGrid