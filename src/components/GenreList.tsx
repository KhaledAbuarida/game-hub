import { List, ListItem, Image, HStack, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import cropImageByUrl from "../services/image-url";

interface Props {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

function GenreList({selectedGenre, onSelectedGenre}: Props) {
    const { data } = useGenres();

    return (
        <>
            <Heading fontSize={'2xl'}>Genres</Heading>
            <List paddingY={5}>
                {/* {isLoading && skeletons.map(s => <GenreSkeleton key={s}/>)} */}
                {data.map(genre => 
                    <ListItem key={genre.id}>
                        <HStack paddingY={1}>
                            <Image objectFit='cover' boxSize='40px' borderRadius={10} src={cropImageByUrl(genre.image_background)}/>
                            <Button whiteSpace='normal' textAlign='left' fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={()=> onSelectedGenre(genre)}>{genre.name}</Button>
                        </HStack>
                    </ListItem> 
                )}
            </List>
        </>
    )
}

export default GenreList