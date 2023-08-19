import { HStack, Image} from "@chakra-ui/react"
import logo from '../assets/game-hub-logo.png'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

function NavBar() {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <SearchInput />
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavBar