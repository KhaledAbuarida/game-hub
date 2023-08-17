import { List, ListItem, Image, Text, HStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import cropImageByUrl from "../services/image-url";

function GenreList() {
    const { data } = useGenres();

    return (
        <List paddingY={9}>
            {data.map(genre => 
                <ListItem key={genre.id}>
                    <HStack paddingY={1}>
                        <Image boxSize='32px' borderRadius={10} src={cropImageByUrl(genre.image_background)}/>
                        <Text fontSize='md'>{genre.name}</Text>
                    </HStack>
                </ListItem> )}
        </List>
    )
}

export default GenreList