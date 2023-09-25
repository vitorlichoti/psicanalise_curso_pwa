'use client'
import {courses} from "@/data/mockCourse";
import {Button, ChakraProvider, Flex} from "@chakra-ui/react";
import {NextUIProvider} from "@nextui-org/react";
import {Box, VStack, Text} from "@chakra-ui/layout";
import BottomBar from "@/components/Commons/BottomBar";
import {BiArrowBack} from "react-icons/bi";
import Link from "next/link";

interface coursePageProps {
    params: { aula: string }
}
function AulaPage({params}: coursePageProps) {
    const classe: any = courses[Number(params.aula[0]) - 1].modules[Number(params.aula[1]) - 1].classes[Number(params.aula[2]) - 1]
    return (
        <ChakraProvider>
            <NextUIProvider>
                <Link href={`/courses/${params.aula[0]}`}>
                    <Button leftIcon={<BiArrowBack />} colorScheme='purple' variant='ghost'>
                        Voltar
                    </Button>
                </Link>
                <hr />
                <VStack marginBottom="80px">
                    <Box paddingTop='10px' paddingBottom='15px'>
                        <Text textAlign="center">{classe.title}</Text>
                    </Box>
                    <Box>
                        {classe.url ? <iframe
                            src={classe.url}
                            allow="autoplay"
                        /> : ''}
                    </Box>
                    <Flex justifyContent="center">
                        {
                            classe.content ?
                                <VStack w="95%">
                                    <Text textAlign="center" fontWeight="bold">{classe.content.title}</Text>
                                    {
                                        classe.content.paragraphs?.map((e:any) => (
                                            <Box key={e.id} marginTop="20px">
                                                <Text textAlign="left" fontWeight='semibold' marginBottom="8px">{e.head}</Text>
                                                <Text textAlign="justify">{e.text}</Text>
                                            </Box>
                                        ))
                                    }
                                </VStack>
                                : ''
                        }
                    </Flex>
                </VStack>
                <BottomBar />
            </NextUIProvider>
        </ChakraProvider>
    )
}

export default AulaPage