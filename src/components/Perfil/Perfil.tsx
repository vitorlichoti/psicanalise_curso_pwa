import { useState, useEffect } from "react";
import {useRouter} from "next/navigation";

import {Flex, Text, Box} from "@chakra-ui/layout";
import { Image } from '@chakra-ui/react'
import { AiOutlineArrowLeft } from "react-icons/ai";

import {requestDataFromStorage} from "@/utils/requestDataFromStorage";

function Perfil () {
    const router = useRouter()
    const [data, setData] = useState({
        name: '',
        avatar: '',
        slug: ''
    })
    useEffect(() => {
        const dataReq: any = requestDataFromStorage('Perfil')
        setData(dataReq)
    }, []);

    return(
        <Flex flexDirection="column" alignItems="center" w="100%" mt="5%">
            <AiOutlineArrowLeft 
                style={{position:"absolute", left:"5%"}}
                onClick={() => router.push('/home')}
            />
            <Text as='b' fontSize='1.2rem' color='purple.900'>Meu Perfil</Text>
            <Image
                borderRadius='full'
                boxSize='150px'
                src={data?.avatar['48']}
                alt='Foto de perfil'
                mt="10%"
            />
            <Box w="70%" mt="15%">
                <Box 
                    borderBottomRadius="1px solid black" 
                    display="flex" 
                    flexDirection="column" 
                    w="100%" style={{borderBottom:'1px solid gray'}}
                >
                    <Text as='b' color='gray.900'fontSize='.7rem'>Nome do usuário</Text>
                    <Text as='b' color='purple.900'fontSize='.7rem' mb="5%">{data?.name}</Text>
                </Box>
                <Box 
                    borderBottomRadius="1px solid black" 
                    display="flex" 
                    flexDirection="column" 
                    w="100%" style={{borderBottom:'1px solid gray'}}
                    mt="10%"
                >
                    <Text as='b' color='gray.900'fontSize='.7rem'>Email</Text>
                    <Text as='b' color='purple.900'fontSize='.7rem' mb="5%">{`@${data?.slug}`}</Text>
                </Box>
            </Box>
        </Flex>
    )
}

export default Perfil