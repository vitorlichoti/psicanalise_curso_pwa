import { courses } from '../../../data/mockCourse';
import {Box, Flex, Text, VStack} from "@chakra-ui/layout";
import {Button, Card, CardBody, Center, Heading, Image} from "@chakra-ui/react";
function Courses() {
    return (
        <>
            <Center paddingTop='5%'>
                <Text as='b' fontSize='4xl' color='purple.900'>Cursos</Text>
            </Center>
            <VStack paddingTop='5%' paddingBottom='20%' spacing={4}>
                {
                    courses.map((e: any) => (
                        <Flex
                            key={e.id}
                            justifyContent='center'
                            w='100%'
                        >
                            <Card w='90%'>
                                <CardBody>
                                    <Image src={e.image_url} alt="imagem do freud" />
                                    <Heading color='purple.900' fontSize='1.3rem'>{e.course_name}</Heading>
                                    <Button colorScheme='purple'>Iniciar o Curso</Button>
                                </CardBody>
                            </Card>
                        </Flex>
                    ))
                }
            </VStack>
        </>
    )
}

export default Courses
