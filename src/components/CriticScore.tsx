import { Badge } from "@chakra-ui/react"


interface Props {
    criticScore: number
}

function CriticScore({criticScore}: Props ) {
    
    let color = criticScore > 75 ? 'green' : criticScore > 60 ? 'yellow' : '' 

  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius={4}>{criticScore}</Badge>
  )
}

export default CriticScore