import { courses } from "@/data/mockCourse";
import {Flex, VStack, Text} from "@chakra-ui/layout";
import {Button, Card, CardBody, Heading, Image} from "@chakra-ui/react";
function RecentCourse() {
    return (
        <>
            <Text as='b' fontSize='1.2rem' color='purple.900' ml="5%">Curso Recente</Text>
            <VStack 
                paddingTop='5%' 
                spacing={4} 
                flexDirection="row" 
                width="100%"
                mb = "5%"
                maxW="100%"
            >
                <Flex
                    w='100%'
                    justifyContent= "center"
                >
                    <Card w='900px' m="10px">
                        <CardBody w="100%">
                            <Image src='https://academiaenlevo.com.br/wp-content/uploads/2019/09/curso-forma%C3%A7%C3%A3o-profissional-em-psican%C3%A1lise-cl%C3%ADnica-online-1-370x193.jpg' alt="imagem do freud" w="100%"/>
                            <Heading color='purple.900' fontSize='1rem'>Especialização em Psicanálise Freudiana</Heading>
                            <Button colorScheme='purple' fontSize="1rem" mt="2%">Ir para o curso</Button>
                        </CardBody>
                    </Card>
                </Flex>
            </VStack>
        </>
    )
}

export default RecentCourse