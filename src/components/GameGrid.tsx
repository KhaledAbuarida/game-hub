import { SimpleGrid, Text, slideFadeConfig } from "@chakra-ui/react";
import useGame from "../hooks/useGame"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface Props {
    selectedGenre: Genre | null;
}

function GameGrid({selectedGenre}: Props) {
    const { error, data, isLoading } = useGame(selectedGenre);

    return (
        <>  
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 2, md: 2 , lg: 3 , xl: 4}} spacing={4} padding={10}>
                {isLoading && skeletons.map(s => 
                    <GameCardContainer key={s}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                )}
                {data.map(game =>
                    <GameCardContainer  key={game.id}>
                        <GameCard game={game}></GameCard>
                    </GameCardContainer> 
                )}   
                
            </SimpleGrid>
        </>
    )
}

export default GameGrid