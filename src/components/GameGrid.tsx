import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame"
import GameCard from "./GameCard";

function GameGrid() {
    const { error, games } = useGame();

    return (
        <>  
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 2, md: 3 , lg: 4 , xl: 5}} spacing={10} padding={10}>
                {games.map(game => <GameCard key={game.id} game={game}></GameCard> )}   
                
            </SimpleGrid>
        </>
    )
}

export default GameGrid