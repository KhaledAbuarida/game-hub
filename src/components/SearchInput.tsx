import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

function SearchInput() {
    return (
        <InputGroup>
            <InputLeftElement children={<FaSearch />}/>
            <Input placeholder='Search Games...' borderRadius={20} variant='filled'/>   
        </InputGroup>
    )
}

export default SearchInput