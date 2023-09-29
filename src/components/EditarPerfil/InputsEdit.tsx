import { useState } from 'react';
import { Input, Button } from '@chakra-ui/react'
import {Box} from "@chakra-ui/layout";

function InputsEdit({placeholder}: {placeholder: string}) {
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
    }

    return (
        <Box mb="5%">
            <Input 
                placeholder={placeholder} 
                w="100%"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button 
                colorScheme='purple' 
                fontSize="1rem" 
                mt="2%"
                width="100%"
                onClick={handleClick}
            >Pronto</Button>
        </Box>
    )
}

export default InputsEdit