import { List, ListItem, Image, Text, HStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import cropImageByUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function GenreList() {
    const { data, isLoading } = useGenres();

    return (
        <List paddingY={9}>
            {isLoading && skeletons.map(s => <GenreSkeleton key={s}/>)}
            {data.map(genre => 
                <ListItem key={genre.id}>
                    <HStack paddingY={1}>
                        <Image boxSize='32px' borderRadius={10} src={cropImageByUrl(genre.image_background)}/>
                        <Text fontSize='md'>{genre.name}</Text>
                    </HStack>
                </ListItem> 
            )}
        </List>
    )
}

export default GenreList