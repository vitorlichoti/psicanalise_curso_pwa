import { articles } from "@/data/mockArticles";
import { Flex, Text, VStack, Center} from "@chakra-ui/layout";
import { Card, CardBody, Button, Image, Heading, Link } from '@chakra-ui/react'

function Articles() {
    return(
        <>
            <Center paddingTop='5%'>
                <Text as='b' fontSize='4xl' color='purple.900'>Artigos</Text>
            </Center>
            <VStack paddingTop='5%' paddingBottom='20%' spacing={4}>
                {
                    articles.map((e: any) => (
                        <Flex
                            key={e.id}
                            justifyContent='center'
                            w='100%'
                        >
                            <Card w='90%'>
                                <CardBody>
                                    <Image src={e.image_url} alt="imagem dos artigos" />
                                    <Heading color='purple.900' fontSize='1.3rem'>{e.article_title}</Heading>
                                    <Flex justifyContent="space-between">
                                        <Link href={`/courses/${e.id}`}>
                                            <Button colorScheme='purple'>Ler Artigo</Button>
                                        </Link>
                                    </Flex>
                                </CardBody>
                            </Card>
                        </Flex>
                    ))
                }
            </VStack>
        </>
    )
}

export default Articles