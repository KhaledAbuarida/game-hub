import { MenuButton, Button, MenuList, MenuItem, Menu } from "@chakra-ui/react"
import { FaChevronDown } from "react-icons/fa"
import usePlatform from "../hooks/usePlatform"

function PlatformSelector() {
    const {data, error} = usePlatform();

    if(error)
        return null;
    return (
        <Menu>
            <MenuButton marginBottom={4} as={Button} rightIcon={<FaChevronDown />}>
                Actions
            </MenuButton>
            <MenuList>
                {data.map((platform) => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector