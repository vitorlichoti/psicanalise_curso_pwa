import {Flex, Text, Box} from "@chakra-ui/layout";
import { Image } from '@chakra-ui/react'

function Perfil () {
    return(
        <Flex flexDirection="column" alignItems="center" w="100%">
            <Text as='b' fontSize='1.2rem' color='purple.900'>Meu Perfil</Text>
            <Image
                borderRadius='full'
                boxSize='150px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
                mt="10%"
            />
            <Box w="70%" mt="15%">
                <Box 
                    borderBottomRadius="1px solid black" 
                    display="flex" 
                    flexDirection="column" 
                    w="100%" style={{borderBottom:'1px solid gray'}}
                >
                    <Text as='b' color='gray.900'fontSize='.7rem'>Primeiro nome</Text>
                    <Text as='b' color='purple.900'fontSize='.7rem' mb="5%">Nome do fulano</Text>
                </Box>
                <Box 
                    borderBottomRadius="1px solid black" 
                    display="flex" 
                    flexDirection="column" 
                    w="100%" style={{borderBottom:'1px solid gray'}}
                    mt="10%"
                >
                    <Text as='b' color='gray.900'fontSize='.7rem'>Primeiro nome</Text>
                    <Text as='b' color='purple.900'fontSize='.7rem' mb="5%">Nome do fulano</Text>
                </Box>
                <Box 
                    borderBottomRadius="1px solid black" 
                    display="flex" 
                    flexDirection="column" 
                    w="100%" style={{borderBottom:'1px solid gray'}}
                    mt="10%"
                >
                    <Text as='b' color='gray.900'fontSize='.7rem'>Primeiro nome</Text>
                    <Text as='b' color='purple.900'fontSize='.7rem' mb="5%">Nome do fulano</Text>
                </Box>
            </Box>
        </Flex>
    )
}

export default Perfil