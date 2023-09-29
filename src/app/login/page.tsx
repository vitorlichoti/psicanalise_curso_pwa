'use client'
import React from 'react'
import {Button, Container, Input, InputGroup, InputRightElement, Spinner} from "@chakra-ui/react";
import {Flex, Text} from "@chakra-ui/layout";
import {Image} from "@nextui-org/react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {handleLoginAuth} from "@/utils/handleLoginAuth"
import {useRouter} from "next/navigation";

function LoginPage() {
    const [show, setShow] = React.useState(false)
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
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
                    value={username}
                    onChange={({target}) => setUsername(target.value)}
                />
            </Container>
            <Container>
                <InputGroup>
                    <Input
                        focusBorderColor='purple.800'
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Insira sua senha'
                        value={password}
                        onChange={({target}) => setPassword(target.value)}
                    />
                    <InputRightElement width='4.5rem' onClick={handleClick}>
                        {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </InputRightElement>
                </InputGroup>
            </Container>
            <Flex justifyContent='center' marginTop='5%'>
                <Button colorScheme='purple' onClick={() => handleLoginAuth(username, password, setError, setLoading, router)}>
                    {loading ? <Spinner/> : 'Entrar'}
                </Button>
            </Flex>
            <Container>
                {error && <Text textAlign="center" color="red.600">Nome de usuário ou senha inválidos</Text>}
            </Container>
        </Flex>
    )
}

export default LoginPage
