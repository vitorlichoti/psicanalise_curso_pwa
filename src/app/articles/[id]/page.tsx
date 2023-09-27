'use client'
import { articles } from "@/data/mackArticles";
import {NextUIProvider} from "@nextui-org/react";
import {Box, Flex, Text, VStack} from "@chakra-ui/layout";
import {
    Button,
    ChakraProvider,
    Image
} from "@chakra-ui/react";
import Link from "next/link";
import {BiArrowBack} from "react-icons/bi";

interface articlesPageProps {
    params: { id: string }
}

function ArticlesContentPage ({params}: articlesPageProps) {
    const article: any = articles.filter((e:any) => e.id === Number(params.id))

    return(
        <ChakraProvider>
            <NextUIProvider>
                <Link href={'/articles/'}>
                    <Button leftIcon={<BiArrowBack />} colorScheme='purple' variant='ghost'>
                        Voltar
                    </Button>
                </Link>
                {
                    article.map((e: any)=> (
                        <VStack key={e.id} marginBottom="70px">
                            <Box>
                                <Image src={e.image_url} alt="foto do artigo"/>
                            </Box>
                            <Box
                                w='90%'
                                p="3"
                                border='1px'
                                borderColor='gray.200'
                                marginTop="-35px"
                                bg="white"
                                borderRadius="10"
                            >
                                <Text textAlign="center" marginBottom="30px" fontWeight="bold">{e.article_title}</Text>
                            </Box>
                            {
                                e.content.map((f: any)=> (
                                    <Box
                                        key={f.id} 
                                        w="90%">
                                        <Text textAlign="center" marginBottom="30px" fontWeight="bold">{f.head}</Text>
                                        <Text textAlign="center" marginBottom="30px">{f.text}</Text>
                                    </Box>
                                ))
                            }
                        </VStack>
                    )) 
                }
            </NextUIProvider>
        </ChakraProvider>
    )
}

export default ArticlesContentPage