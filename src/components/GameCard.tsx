import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame"
import PlatformsIconList from "./PlatformsIconList";
import CriticScore from "./CriticScore";
import cropImageByUrl from "../services/image-url";

interface Props {
    game: Game;
}

function GameCard({game}: Props) {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={cropImageByUrl(game.background_image)} />
        <CardBody>
            <Heading fontSize='lg'>{game.name}</Heading>
            <HStack justifyContent='space-between'>
              <PlatformsIconList platforms={game.parent_platforms.map(p => p.platform)}/>
              <CriticScore criticScore={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard