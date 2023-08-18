import { MenuButton, Button, MenuList, MenuItem, Menu } from "@chakra-ui/react"
import { FaChevronDown } from "react-icons/fa"
import usePlatform from "../hooks/usePlatform"
import { Platform } from "../hooks/useGame";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

function PlatformSelector({onSelectPlatform, selectedPlatform}: Props) {
    const {data, error} = usePlatform();

    if(error)
        return null;
    return (
        <Menu>
            <MenuButton marginBottom={4} as={Button} rightIcon={<FaChevronDown />}>
                {selectedPlatform ? selectedPlatform?.name : 'Platform'}
            </MenuButton>
            <MenuList>
                {data.map((platform) => <MenuItem onClick={() => onSelectPlatform(platform) } key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector