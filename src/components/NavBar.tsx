import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/game-hub-logo.png'

function NavBar() {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'></Image>
        <Text>TextBox</Text>
    </HStack>
  )
}

export default NavBar