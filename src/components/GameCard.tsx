import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGame"
import PlatformsIconList from "./PlatformsIconList";

interface Props {
    game: Game;
}

function GameCard({game}: Props) {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize='lg'>{game.name}</Heading>
            <PlatformsIconList platforms={game.parent_platforms.map(p => p.platform)}/>
        </CardBody>
    </Card>
  )
}

export default GameCard