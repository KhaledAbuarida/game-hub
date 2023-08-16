import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function GameGrid() {
    const { error, games, isLoading } = useGame();

    return (
        <>  
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 2, md: 2 , lg: 3 , xl: 4}} spacing={10} padding={10}>
                {isLoading && skeletons.map(s => <GameCardSkeleton key={s}/>)}
                {games.map(game => <GameCard key={game.id} game={game}></GameCard> )}   
                
            </SimpleGrid>
        </>
    )
}

export default GameGrid