import { courses } from "@/data/mockCourse";
import {Flex, VStack} from "@chakra-ui/layout";
import {Button, Card, CardBody, Heading, Image} from "@chakra-ui/react";
function EveryCourses() {
    return (
        <>
            <VStack 
                paddingTop='5%' 
                paddingBottom='20%' 
                spacing={4} 
                flexDirection="row" 
                width="100%"
            >
                {
                    courses.map((e: any) => (
                        <Flex
                            key={e.id}
                            w='100%'
                            justifyContent= "center"
                        >
                            <Card w='900px' m="10px">
                                <CardBody w="100%">
                                    <Image src={e.image_url} alt="imagem do freud" w="100%"/>
                                    <Heading color='purple.900' fontSize='1rem'>{e.course_name}</Heading>
                                    <Button colorScheme='purple' fontSize="1rem" w="100%" mt="2%">Ir para o curso</Button>
                                </CardBody>
                            </Card>
                        </Flex>
                    ))
                }
            </VStack>
        </>
    )
}

export default EveryCourses