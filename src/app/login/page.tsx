'use client'
import React from 'react'
import {Button, Container, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {Flex, Text} from "@chakra-ui/layout";
import {Image} from "@nextui-org/react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {useRouter} from "next/navigation";

function LoginPage() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const router = useRouter()


    return (
        <Flex direction='column' h='100vh' justifyContent='center' alignItems='center' gap='20px'>
            <Container marginBottom='10%' textAlign='center'>
                <Flex direction='column' alignItems='center'>
                    <Image width={256} height={256} src='https://academiaenlevo.com.br/wp-content/uploads/2021/01/logo-academia-512.png' alt='logo'/>
                    <Text fontSize='1.5rem'>Bem vindo ao seu ambiente de aprendizagem</Text>
                </Flex>
            </Container>
            <Container>
                <Input
                    focusBorderColor='purple.800'
                    type='email' pr='4.5rem'
                    placeholder='Insira seu Email'
                />
            </Container>
            <Container>
                <InputGroup>
                    <Input
                        focusBorderColor='purple.800'
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Insira sua senha'
                    />
                    <InputRightElement width='4.5rem' onClick={handleClick}>
                        {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </InputRightElement>
                </InputGroup>
            </Container>
            <Flex justifyContent='center' marginTop='5%'>
                <Button colorScheme='purple' onClick={() => router.push('/home')}>Entrar</Button>
            </Flex>
        </Flex>
    )
}

export default LoginPage
