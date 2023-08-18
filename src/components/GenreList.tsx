import { List, ListItem, Image, HStack, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import cropImageByUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

interface Props {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

function GenreList({selectedGenre, onSelectedGenre}: Props) {
    const { data, isLoading } = useGenres();

    return (
        <List paddingY={9}>
            {isLoading && skeletons.map(s => <GenreSkeleton key={s}/>)}
            {data.map(genre => 
                <ListItem key={genre.id}>
                    <HStack paddingY={1}>
                        <Image boxSize='32px' borderRadius={10} src={cropImageByUrl(genre.image_background)}/>
                        <Button fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'} fontSize='md' variant='link' onClick={()=> onSelectedGenre(genre)}>{genre.name}</Button>
                    </HStack>
                </ListItem> 
            )}
        </List>
    )
}

export default GenreList