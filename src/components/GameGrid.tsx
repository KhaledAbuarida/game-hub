import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function GameGrid() {
    const { error, data, isLoading } = useGame();

    return (
        <>  
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 2, md: 2 , lg: 3 , xl: 4}} spacing={10} padding={10}>
                {isLoading && skeletons.map(s => 
                    <GameCardContainer>
                        <GameCardSkeleton key={s}/>
                    </GameCardContainer>
                )}
                {data.map(game => 
                    <GameCardContainer>
                        <GameCard key={game.id} game={game}></GameCard>
                    </GameCardContainer> 
                )}   
                
            </SimpleGrid>
        </>
    )
}

export default GameGrid