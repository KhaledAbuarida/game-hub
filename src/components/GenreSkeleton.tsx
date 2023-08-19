import { Card, HStack, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react"

function GenreSkeleton() {
    return (
            <HStack paddingY={1}>
                <Skeleton boxSize='40px' borderRadius={10}/>
                <Skeleton height='12px' width='100px'/>
            </HStack>
    )
}

export default GenreSkeleton