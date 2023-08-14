import { HStack, Image} from "@chakra-ui/react"
import logo from '../assets/game-hub-logo.png'
import ColorModeSwitch from "./ColorModeSwitch"

function NavBar() {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavBar