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
    <Card>
        <Image src={cropImageByUrl(game.background_image)} />
        <CardBody>
            <HStack justifyContent='space-between' marginBottom={3}>
              <PlatformsIconList platforms={game.parent_platforms.map(p => p.platform)}/>
              <CriticScore criticScore={game.metacritic}/>
            </HStack>
            <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard