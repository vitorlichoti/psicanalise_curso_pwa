import { useState } from "react";
import {Flex, Text, Box} from "@chakra-ui/layout";
import { Input, Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { AiOutlineArrowLeft , AiFillEdit  } from "react-icons/ai";
import {useRouter} from "next/navigation";

import InputsEdit from "./InputsEdit";

function EditarPerfil () {
    const router = useRouter()

    const [showName, setShowName] = useState(false)
    const [showLastName, setShowLastName] = useState(false)
    const [showEmail, setShowEmail] = useState(false)

    const [inputValue, setInputValue] = useState('');

    const handleEditName = () => {
        setShowName(true)
    }
    
    const handleEditLastName = () => {
        setShowLastName(true)
    }

    const handleEditEmail = () => {
        setShowEmail(true)
    }

    const handleClickName = () => {
        console.log('Valor digitado:', inputValue);
         setInputValue('')
        setShowName(false)
    }

    const handleClickLastName = () => {
        console.log('Valor digitado:', inputValue);
        setInputValue('')
        setShowLastName(false)
    }

    const handleClickEmail = () => {
        console.log('Valor digitado:', inputValue);
         setInputValue('')
        setShowEmail(false)
    }

    return(
        <Flex flexDirection="column" alignItems="center" w="100%" mt="5%">
            <AiOutlineArrowLeft 
                style={{position:"absolute", left:"5%"}}
                onClick={() => router.push('/home')}
            />
            <Text as='b' fontSize='1.2rem' color='purple.900'>Editar Perfil</Text>
            <Image
                borderRadius='full'
                boxSize='150px'
                src='https://bit.ly/dan-abramov'
                alt='Foto do perfil'
                mt="10%"
            />
            <Box w="70%" mt="15%">
                {!showName && 
                <Box 
                    borderBottomRadius="1px solid black" 
                    display="flex" 
                    flexDirection="column" 
                    w="100%" 
                    style={{borderBottom:'1px solid gray', position:"relative"}}
                >
                    <Text as='b' color='gray.900'fontSize='.7rem'>Primeiro nome</Text>
                    <Text as='b' color='purple.900'fontSize='.7rem' mb="5%">Nome do fulano</Text>
                    < AiFillEdit 
                    style={{position:"absolute", right:"0", top:"40%"}}
                    onClick={() => handleEditName()}
                />
                </Box>}
                {showName && 
                <Box mb="5%">
                    <Input 
                        placeholder="digite seu nome" 
                        w="100%"
                        h="100%"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button 
                        colorScheme='purple' 
                        fontSize=".8rem" 
                        mt="2%"
                        width="100%"
                        onClick={handleClickName}
                    >Pronto</Button>
                </Box>}
                {!showLastName && 
                    <Box 
                        borderBottomRadius="1px solid black" 
                        display="flex" 
                        flexDirection="column" 
                        w="100%"
                        mt="5%"
                        style={{borderBottom:'1px solid gray', position:"relative"}}
                    >
                        <Text as='b' color='gray.900'fontSize='.7rem'>Sobrenome</Text>
                        <Text as='b' color='purple.900'fontSize='.7rem' mb="5%">Sobrenome do fulano</Text>
                        < AiFillEdit 
                        style={{position:"absolute", right:"0", top:"40%"}}
                        onClick={() => handleEditLastName()}
                    />
                    </Box>}
                    {showLastName && 
                    <Box mb="5%" mt="5%">
                        <Input 
                            placeholder="digite seu ultimo nome" 
                            w="100%"
                            h="100%"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <Button 
                            colorScheme='purple' 
                            fontSize=".8rem" 
                            mt="2%"
                            width="100%"
                            onClick={handleClickLastName}
                        >Pronto</Button>
                </Box>}
                {!showEmail && 
                    <Box 
                        borderBottomRadius="1px solid black" 
                        display="flex" 
                        flexDirection="column" 
                        w="100%"
                        mt="5%"
                        style={{borderBottom:'1px solid gray', position:"relative"}}
                    >
                        <Text as='b' color='gray.900'fontSize='.7rem'>Email</Text>
                        <Text as='b' color='purple.900'fontSize='.7rem' mb="5%">Email do fulano</Text>
                        < AiFillEdit 
                        style={{position:"absolute", right:"0", top:"40%"}}
                        onClick={() => handleEditEmail()}
                    />
                    </Box>}
                    {showEmail && 
                    <Box mb="5%" mt="5%">
                        <Input 
                            placeholder="digite seu email" 
                            w="100%"
                            h="100%"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <Button 
                            colorScheme='purple' 
                            fontSize=".8rem" 
                            mt="2%"
                            width="100%"
                            onClick={handleClickEmail}
                        >Pronto</Button>
                </Box>}
            </Box>
        </Flex>
    )
}

export default EditarPerfil