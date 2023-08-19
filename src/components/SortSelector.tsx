import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'

interface Props {
    onSelectOrder: (order: string) => void;
    sortOrder: string;
}

function SortSelector({onSelectOrder, sortOrder}: Props) {

    const sortOrders = [
        {value: '' , name: 'Relevance'},
        {value: '-added' , name: 'Date added'},
        {value: 'name' , name: 'Name'},
        {value: '-released' , name: 'Release date'},
        {value: '-metacritic' , name: 'Popularity'},
        {value: 'rating' , name: 'Average rating'}
    ]

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

    return (
        <Menu>
            <MenuButton marginBottom={4} as={Button} rightIcon={<FaChevronDown />}>
                Order by: {currentSortOrder?.name || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map(order => 
                    <MenuItem onClick={() => onSelectOrder(order.value)} key={order.value} value={order.value}>  
                        {order.name}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}

export default SortSelector